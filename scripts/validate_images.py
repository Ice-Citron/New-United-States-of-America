#!/usr/bin/env python3
"""
Image Validation Script for Portfolio Website
Checks images for corruption before they're used in the portfolio.
Usage: python3 scripts/validate_images.py [directory]
"""
import os
import sys
import struct

def validate_jpeg(filepath):
    """Check JPEG starts with FFD8 and ends with FFD9."""
    try:
        with open(filepath, 'rb') as f:
            header = f.read(2)
            if header != b'\xff\xd8':
                return False, "Missing JPEG SOI marker"
            f.seek(-2, 2)
            footer = f.read(2)
            if footer != b'\xff\xd9':
                return False, "Missing JPEG EOI marker (may be truncated)"
        return True, "OK"
    except Exception as e:
        return False, str(e)

def validate_png(filepath):
    """Check PNG signature and basic chunk structure."""
    try:
        with open(filepath, 'rb') as f:
            sig = f.read(8)
            if sig != b'\x89PNG\r\n\x1a\n':
                return False, "Missing PNG signature"
            # Check first chunk is IHDR
            chunk_len = struct.unpack('>I', f.read(4))[0]
            chunk_type = f.read(4)
            if chunk_type != b'IHDR':
                return False, f"First chunk is {chunk_type}, expected IHDR"
            if chunk_len != 13:
                return False, f"IHDR length is {chunk_len}, expected 13"
        return True, "OK"
    except Exception as e:
        return False, str(e)

def validate_video(filepath):
    """Basic check that video files aren't empty/truncated."""
    try:
        size = os.path.getsize(filepath)
        if size < 1024:
            return False, f"File too small ({size} bytes)"
        with open(filepath, 'rb') as f:
            header = f.read(12)
            if len(header) < 12:
                return False, "File too short to read header"
        return True, f"OK ({size / (1024*1024):.1f} MB)"
    except Exception as e:
        return False, str(e)

def validate_file(filepath):
    """Validate a single file based on extension."""
    ext = os.path.splitext(filepath)[1].lower()
    size = os.path.getsize(filepath)

    if size == 0:
        return False, "Empty file (0 bytes)"

    if ext in ('.jpg', '.jpeg'):
        return validate_jpeg(filepath)
    elif ext == '.png':
        return validate_png(filepath)
    elif ext in ('.mp4', '.mov', '.webm'):
        return validate_video(filepath)
    elif ext == '.webp':
        try:
            with open(filepath, 'rb') as f:
                header = f.read(4)
                if header != b'RIFF':
                    return False, "Missing RIFF header"
            return True, "OK"
        except Exception as e:
            return False, str(e)
    elif ext in ('.svg', '.pdf'):
        return True, f"OK ({size / 1024:.1f} KB)"
    else:
        return None, f"Skipped (unsupported: {ext})"

def scan_directory(directory):
    """Scan a directory recursively for image/video files and validate them."""
    media_exts = {'.jpg', '.jpeg', '.png', '.webp', '.mp4', '.mov', '.webm', '.svg', '.pdf'}

    valid_count = 0
    invalid_count = 0
    skipped_count = 0
    invalid_files = []

    for root, dirs, files in os.walk(directory):
        # Skip node_modules, .git, etc.
        dirs[:] = [d for d in dirs if d not in ('.git', 'node_modules', '.next', '__pycache__', '.DS_Store')]

        for fname in sorted(files):
            ext = os.path.splitext(fname)[1].lower()
            if ext not in media_exts:
                continue

            filepath = os.path.join(root, fname)
            is_valid, message = validate_file(filepath)
            rel_path = os.path.relpath(filepath, directory)

            if is_valid is None:
                skipped_count += 1
            elif is_valid:
                valid_count += 1
            else:
                invalid_count += 1
                invalid_files.append((rel_path, message))
                print(f"  INVALID: {rel_path} -- {message}")

    print(f"\nResults: {valid_count} valid, {invalid_count} invalid, {skipped_count} skipped")

    if invalid_files:
        print("\nInvalid files:")
        for path, msg in invalid_files:
            print(f"  - {path}: {msg}")
    else:
        print("All files passed validation!")

    return invalid_count == 0

if __name__ == '__main__':
    target = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'public')
    print(f"Scanning: {target}\n")
    success = scan_directory(target)
    sys.exit(0 if success else 1)
