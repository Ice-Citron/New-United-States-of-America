# Portfolio Website Project Notes

**Last Updated:** March 8, 2026 (Session 5 — end of session)
**Project Location:** `/Users/administrator/Python/New United States of America`
**Live URL:** https://sienarindustries.com
**Build Size:** ~456MB (down from 1.4GB after Session 5 optimization)

---

## Project Overview

Personal portfolio website for **Shi Hao Ng** — MEng Computing (AI & ML) student at Imperial College London. Built with **React** and **MDX** for content management.

### Tech Stack
- **React** (Create React App with CRACO)
- **MDX** (@mdx-js/mdx v3) for rich content pages
- **gray-matter** for YAML frontmatter parsing
- **remark-gfm v4** (upgraded from v3 to fix `this.getData is not a function` error)
- **react-router-dom** for routing
- **Hostinger** for hosting (Apache with .htaccess SPA routing)

### Owner Info
- Email: shi-hao.ng25@imperial.ac.uk
- GitHub: github.com/Ice-Citron
- LinkedIn: linkedin.com/in/shi-hao-ng-83b55b224/

---

## Current State (End of Session 5)

### What Works
- All portfolio tabs render correctly on localhost
- Resume tab uses Google Docs viewer on mobile (iOS) for multi-page PDF rendering
- All project titles renamed to match CV/LinkedIn naming conventions
- Project hover overlay now shows **title + description** (previously description only)
- `.htaccess` configured with no-cache headers on `index.html` + long-term cache on hashed assets
- Cache-busting `?v=Date.now()` query params on all `.md` fetch calls in `ProjectGrid.jsx`
- `AddType text/plain .md .mdx` in `.htaccess` to ensure Apache serves markdown files
- Service worker unregistration script in `index.html`
- Copyright footer: `© 2026 SIENAR INDUSTRIES`

### Known Issues / Bugs
1. **Brave browser caching** — Old `index.html` (without no-cache headers) is stuck in some browsers. User needs to hard-clear cache once. New deploys will have proper headers going forward.
2. **Mobile thumbnails** — Bottom border of project cards may be slightly clipped on some phones. Added `box-sizing: border-box` and mobile overflow fixes but needs visual verification.
3. **Corrupted edutech images** — 5 JPEGs (6-8MB, missing EOI markers) still broken. Files: `award-ceremony.jpg`, `competition-1.jpg`, `competition-2.jpg`, `pit-display-1.jpg`, `pit-display-2.jpg` in `computer-science/projects/edutech/images/`
4. **Permissions-Policy console warnings** — Harmless, from Hostinger's headers. Could remove the custom Permissions-Policy header in `.htaccess` to silence them.

---

## Session 5 Changes (March 8, 2026)

### Build Optimization (1.4GB → 456MB)
- Replaced local videos with YouTube embeds (saved ~460MB):
  - Isaac Sim/Automaton: ZnokOyQuvvo, IUY39CWeqOQ, 2WafN8yf-kY, I6fmQ-RUpyw
  - RL-Iterate: KBBktEzvcEQ, kJSmBLhmAb4
  - Nosco: w9Vges5LNsE
  - Previously existing: VfRMeVB7RLk, A3WwhNlCwlY (FPV drone), VdRrR-3tqBI (IBM), u8NdAZnB5io (SkyHammer)
- Compressed images via `sips --resampleWidth 1920` and `sips -s formatOptions 70` (saved ~500MB)
- Removed duplicate files: FPV maiden flight video (140MB), IBM datathon video (26MB), railgun PDF duplicate (11MB)
- ~200MB of video still local (railgun ×4, tissue culture, f1-in-schools ×2, maze, solar heater, new-dejima ×2) — user hit YouTube upload limit

### New Images Added (from `/Users/administrator/imperial-college-london/Projects/2026/Red Coast Base/8 March 2026/`)
- **New Dejima**: 14 files — Eiffel Tower, HackEurope venue/sponsors/auditorium, Paris scenes (10-slide carousel)
- **Isaac Sim/Automaton**: 16 files — RTX 5090 workstation build (7-slide carousel), VR teleoperation with Meta Quest 3 (carousel + YouTube embeds)
- **SkyHammer**: 4 images — CLI offensive mode, workstation, SFT training logs, model loading (2 carousels)
- **Interceptor Drone**: 6 images — bare prototype parts, assembled, eCalc sims, parts list (6-slide carousel)
- **Pinhole Camera**: Expanded from 1 to 5 slides — front view, back view, 3D render, Blender screenshots
- **Maze**: Added maze-photo.jpg (HEIC → JPEG conversion)

### Thumbnail Updates
- RoboCup: → `thumbnail.png` (new screenshot, had unicode filename issue U+202F)
- SkyHammer: → `SkyHammer - CLI Offensive engaged.JPG`
- Rockstar Datathon: → `IMG_8311.JPG`
- Solar Heater: → `thumbnail.jpg` (HEIC → JPEG)
- Pinhole Camera: → `thumbnail.jpg` (HEIC → JPEG)
- Blender Donut: → `Electronic Arts/Donut/Donut Render Final.webp`
- Voodoo Block: New entry → `Electronic Arts/Voodoo Block/voodoo_block.webp`

### Game Engine Merge
- "Sparky Game Engine" + "Hazel Engine (WIP)" → single "C++ Game Engine" in both `cpp.md` and `year-2023.md`

### remark-gfm Fix
- Upgraded `remark-gfm` from v3.0.1 to v4.0.1 to fix `this.getData is not a function` error with @mdx-js/mdx v3

### AAH IA Optimiser Project Added
- Created `computer-science/projects/aah-ia-optimiser/index.mdx`
- Copied 9.8MB PDF (IB Math AA HL IA — "A Comparative Study of First-order and Second-order Optimizers for Training Large-Scale AI Models")
- Scored 18/20 internally, 13/20 after external moderation
- GitHub: https://github.com/Ice-Citron/AAH-IA
- Thumbnail: Three-Hump Camel 3D surface + contour plot at `Computing/Optimisers/thumbnail.png`
- Added to `aiml.md` and `year-2025.md`

### Project Title Renames (ALL projects renamed to match CV/LinkedIn)

| Old Title | New Title |
|---|---|
| Interceptor Drone — 400km/h... | **Project Interceptor** |
| NVIDIA Isaac Sim — Robotic Manipulation | **Project Automaton** |
| First Order Robotics (RoboCup) — AI Engineer | **First-Order Robotics** |
| Custom FPV Racing Drone — 240km/h... | **Custom 5" FPV Drone** |
| 450V Augmented Railgun | **Project Railgun** |
| Anduril F1 — F1 in Schools Competition | **Anduril F1** |
| IGCSE DT Coursework — POV Display Spinner | **iGCSE DT Coursework — Display Spinner** |
| GPT-2 Pre-training Research — IB Extended Essay | **IB Extended Essay — Transformer Architecture Research** |
| Google Edutech Asia Challenge — Champion of Asia | **Recon Drone (Edutech Asia)** |
| New Dejima — Autonomous AI Agent Revenue System | **New Dejima — Modified OpenClaw** |
| Nosco WorkHours — Full-Stack Developer | **Nosco Workhours App** |
| AAH IA Optimiser — First vs Second-Order... | **IB AAHL IA — Optimisers Exploration** |
| Custom C++ Game Engine — Low-Level Graphics | **C++ Game Engine** |
| IB Physics IA — Electromagnetic Railgun | **Physics IA — Built Railgun** |
| IGCSE Awards — Best in Asia & Malaysia | **Award Ceremony** |
| Voodoo Block | **Voodoo Cube** |

### Hackathon Renames & Reorder
Order: SkyHammer → EDTH Warsaw → RL Iterate → Reply AIM → Rockstar → Perplexity

| Old Title | New Title |
|---|---|
| xAI Grokathon (merged into SkyHammer) | **Project SkyHammer** |
| SkyHammer — Gemini Hackathon | **Project SkyHammer** |
| EDTH Warsaw — Defense Drones | **EDTH Warsaw** (Anti-Shahed system) |
| RL-Iterate London Hackathon | **RL Iterate Hackathon** |
| Reply AIM Hackathon — CareCompass | **Reply AIM Hackathon** |
| Rockstar GTA V Datathon | **Rockstar Datathon** |
| Perplexity Hackathon — Ground News Clone | **Perplexity Hackathon** |

### Interceptor Drone — Removed IC Drone Soc Affiliation
- The interceptor is a PERSONAL project, NOT affiliated with Imperial College Drone Society
- Removed all IC Drone Soc references from `interceptor-drone/index.mdx` and `ongoing.md`

### New Dejima Page Header
- Changed from `# Introduction` → `# New Dejima` (project title/callsign first)

### Hover Overlay Fix
- Added `<h4 className="project-title">{proj.title}</h4>` to project cards in `ProjectGrid.jsx`
- CSS: `.po_item .content .project-title` — 1.1rem, bold, centered
- CSS: `.po_item .content p` — 0.85rem, centered, with padding

### Mobile Resume PDF Fix
- iOS Safari only renders page 1 of PDF in iframe
- On mobile: swaps to Google Docs viewer (`https://docs.google.com/gview?url=...&embedded=true`)
- On desktop: keeps direct PDF iframe

### Cache-Control / .htaccess Overhaul
- `index.html`: `Cache-Control: no-cache, no-store, must-revalidate`
- Static assets (JS/CSS/images/fonts): `Expires: access plus 1 year`
- `AddType text/plain .md .mdx` — ensures Apache serves markdown files
- HTML meta tags: `<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />`
- Service worker unregistration script in `<body>` of `index.html`
- Cache-busting `?v=${Date.now()}` on all `.md` fetch calls in `ProjectGrid.jsx`
- **CRITICAL**: `RewriteCond` must be IMMEDIATELY before `RewriteRule` — separating them crashes the site (all requests rewrite to index.html including JS/CSS/images)

### Copyright Footer
- Changed from `copyright __ SIENAR INDUSTRIES` to `© 2026 SIENAR INDUSTRIES`

### Mobile Thumbnail Fix
- Added `box-sizing: border-box` to `.po_item`
- Mobile: added `overflow: hidden` and padding to `.po_items_ho`
- Image positioning: `position: absolute; top: 6px; left: 6px; width: calc(100% - 12px); height: calc(100% - 12px)` to prevent bottom border clipping

---

## Files Modified in Session 5

### Content Files (titles, descriptions, thumbnails)
```
public/content/portfolio/engineering/ongoing.md          — Project Interceptor, Project Automaton, First-Order Robotics
public/content/portfolio/engineering/year-2025.md        — Custom 5" FPV Drone
public/content/portfolio/engineering/year-2024.md        — Project Railgun, Anduril F1
public/content/portfolio/engineering/year-2023.md        — iGCSE DT Coursework — Display Spinner
public/content/portfolio/engineering/year-2022.md        — (pinhole camera thumbnail updated)
public/content/portfolio/computer-science/aiml.md        — IB Extended Essay, Recon Drone, New Dejima, IB AAHL IA
public/content/portfolio/computer-science/ongoing.md     — New Dejima — Modified OpenClaw
public/content/portfolio/computer-science/year-2025.md   — Nosco Workhours App, IB AAHL IA
public/content/portfolio/computer-science/year-2024.md   — IB Extended Essay, Recon Drone
public/content/portfolio/computer-science/year-2023.md   — C++ Game Engine
public/content/portfolio/computer-science/cpp.md         — C++ Game Engine
public/content/portfolio/computer-science/fullstack.md   — Nosco Workhours App
public/content/portfolio/computer-science/hackathons.md  — All hackathons reordered + renamed
public/content/portfolio/academic/ib.md                  — IB Extended Essay, Physics IA, Display Spinner, Award Ceremony
public/content/portfolio/electronic-art/blender.md       — Voodoo Cube (was Block)
public/content/portfolio/miscellaneous/hackathons.md     — All hackathons reordered + renamed
```

### New Files Created
```
public/content/portfolio/computer-science/projects/aah-ia-optimiser/index.mdx     — AAH IA project page
public/content/portfolio/computer-science/projects/aah-ia-optimiser/aah-ia-optimiser.pdf  — 30-page IA paper (9.8MB)
public/assets/images/thumbnails/Computing/Optimisers/thumbnail.png                 — Optimiser thumbnail
```

### Source Code Files
```
src/components/portfolio/ProjectGrid.jsx    — Title in hover overlay, cache-busting, mobile PDF
src/pages/portfolio/style.css               — .project-title CSS, mobile fixes, image positioning
src/header/index.js                         — © 2026 copyright
public/index.html                           — Cache-control meta tags, service worker unregistration
public/.htaccess                            — AddType .md, cache headers, CRITICAL RewriteCond placement
```

### Project Page MDX Files Modified
```
public/content/portfolio/computer-science/projects/new-dejima/index.mdx       — Header → "# New Dejima", added 10-slide carousel
public/content/portfolio/computer-science/projects/rl-iterate/index.mdx       — YouTube embeds replacing local video
public/content/portfolio/computer-science/projects/nosco-workhours/index.mdx  — YouTube embed replacing local video
public/content/portfolio/computer-science/projects/skyhammer/index.mdx        — 2 new carousels
public/content/portfolio/engineering/projects/isaac-sim/index.mdx             — 5090 workstation + VR sections, YouTube embeds
public/content/portfolio/engineering/projects/interceptor-drone/index.mdx     — Removed IC Drone Soc, added prototype carousel
public/content/portfolio/engineering/projects/pinhole-camera/index.mdx        — Expanded to 5 slides
public/content/portfolio/engineering/projects/maze/index.mdx                  — Added maze-photo
public/content/portfolio/engineering/projects/fpv-drone/index.mdx             — Removed duplicate video entry
```

---

## Still To Do (Next Session)

### HIGH PRIORITY
- [ ] **Verify deployed site works** — After uploading latest build, confirm all tabs load correctly. Clear Brave cache if needed.
- [ ] **Fix corrupted edutech images** — 5 JPEGs with missing EOI markers need re-export or replacement
- [ ] **Remaining videos to YouTube** — ~200MB still local: railgun firing ×4, tissue culture, f1-in-schools ×2, maze, solar heater, new-dejima MOVs. User hit YouTube upload limit last session.
- [ ] **Voodoo Cube project page** — Entry exists in `blender.md` but no MDX project page created yet

### MEDIUM PRIORITY
- [ ] **Polish GitHub READMEs** — Add sienarindustries.com backlinks to each repo
- [ ] **Image mismatches** — Several images in wrong project folders (see list below)
- [ ] **Mobile styling verification** — Check thumbnail borders, hover overlay, responsive layout on actual phone
- [ ] **Remove Permissions-Policy header** — The custom header in `.htaccess` causes console warnings. Can safely remove it.

### LOW PRIORITY
- [ ] **Compress remaining large images** — Some >5MB PNGs in electronic-art and display-spinner
- [ ] **Hero images for new hackathon cards** — Some still use placeholder paths from `/assets/projects/` that may not exist
- [ ] **python.md and robotics.md** — These subsections exist but contain placeholder/template data, not shown in index.md sections list
- [ ] **drone-go-brrrrr** — Still in CS hackathons.md but was removed from misc hackathons. Verify if user wants it.

---

## Image Mismatches (from Session 3 Vision Scan)
- `maze/images/maze-render.png` → Shows a camera model (should be in pinhole-camera?)
- `solar-heater/images/solar-heater-2.jpg` → Shows a car parked on road, not a solar heater
- `f1-in-schools/images/Car Design/img2.jpg` → Shows school hall video on laptop
- `f1-in-schools/images/Renders/cyberstation.jpg` → Shows students at table, not a render
- `f1-in-schools/images/Renders/darkstar.jpg` → Shows model car on newspaper
- `f1-in-schools/images/Track Building/img2.jpg` → Shows a pull-up banner
- `f1-in-schools/images/CFD Analysis/img1.jpg` → Shows race cars at competition
- `f1-in-schools/images/CFD Analysis/img2.jpg` → Shows award certificates

---

## Key File Locations

### Configuration Files
```
/craco.config.js          — CRACO config (fixes ResizeObserver error)
/package.json             — Uses CRACO instead of react-scripts
/public/.htaccess         — SPA routing, cache headers, .md MIME type, Tractable redirect
/public/index.html        — Cache-control meta tags, SW unregistration
/src/index.js             — React entry point
/.env                     — PUBLIC_URL=. and GENERATE_SOURCEMAP=false
```

### Main Components
```
/src/app/App.js                                — Routes (/, /portfolio, /project/:slug)
/src/content_option.js                         — All About page data, skills, services, contact
/src/components/portfolio/ProjectDetail.jsx    — Renders individual project pages (MDX)
/src/components/portfolio/ProjectGrid.jsx      — Grid view + Resume/VideoSummary special cases
/src/components/portfolio/PortfolioNav.jsx     — Tab navigation
/src/components/portfolio/Carousel.jsx         — Image/video carousel component
/src/components/portfolio/VideoSummary.jsx     — Video summary tab (MIT Portfolio)
/src/components/portfolio/SkillsShowcase.jsx   — Skills grid component
```

### Content Structure
```
/public/content/portfolio/
├── video-summary/index.md              ← MIT Portfolio content
├── engineering/
│   ├── index.md, ongoing.md, year-2025.md, year-2024.md, year-2023.md, year-2022.md, skills.md
│   └── projects/{railgun,f1-in-schools,display-spinner,solar-heater,maze,pinhole-camera,fpv-drone,interceptor-drone,tissue-culture}/
├── computer-science/                    ← "Computing" tab maps here (id "computing" → folder "computer-science")
│   ├── index.md, aiml.md, ongoing.md, fullstack.md, cpp.md, hackathons.md, python.md, robotics.md, skills.md
│   ├── year-2025.md, year-2024.md, year-2023.md
│   └── projects/{gpt-valkyrie,edutech,game-engine,ibm-datathon,new-dejima,nosco-workhours,
│                  skyhammer,rl-iterate,aah-ia-optimiser,project-liberty,
│                  xai-grokathon,edth-warsaw,perplexity-hack,rockstar-datathon,reply-aim,drone-go-brrrrr}/
├── electronic-art/
│   ├── index.md, blender.md, skills.md
│   └── projects/{mclaren-speedtail,mercedes-g-class,ferrari-laferrari,mclaren-p1,dodge-challenger,blender-donut}/
├── academic/
│   ├── index.md, ib.md, self-study.md, skills.md
│   └── projects/{igcse-awards}/
└── miscellaneous/
    ├── index.md, hackathons.md
    └── (MDX pages are in computer-science/projects/ — slug lookup searches all sections)
```

### Portfolio Nav Tabs
1. **Resume** — PDF embed (Google Docs viewer on mobile) + download button
2. **Computing** — Maps to `computer-science/` content folder
3. **Engineering** — Direct mapping
4. **MIT Portfolio** — Special `VideoSummary` component (YouTube embed, "projects till December 2024")
5. **Academic** — IB results, coursework, awards
6. **Electronic Art** — Blender 3D models
7. **Miscellaneous** — Hackathons

### index.md Sections (what's actually displayed per tab)
**computer-science/index.md** lists: ongoing, year-2025, year-2024, year-2023 (NOTE: aiml.md, cpp.md, fullstack.md, hackathons.md are NOT in index.md sections — they exist as files but aren't rendered in the Computing tab)

### Source Directories on Computer
```
/Users/administrator/imperial-college-london/Projects/2026/Red Coast Base/8 March 2026/  — Latest photos (Session 5)
/Users/administrator/imperial-college-london/Projects/2025/Red Coast Base/                — Older photos
/Users/administrator/Black Projects/                                                       — Project repos
/Users/administrator/HTML, CSS, JS/Nosco-Workhours-WebApp/                                — Nosco source
/Users/administrator/School/IB - AAHL/IA/                                                 — IB IA papers
/Users/administrator/Documentations/Engineering/DT Coursework - Pinhole Camera, Maze/     — DT coursework photos
```

---

## Key Techniques & Patterns

### MDX Components (available in ProjectDetail.jsx)
```jsx
<MyCarousel slides={[{src, caption}, {type:"video", src, videoType, caption}]} width={900} height={600} />
<PDFViewer url="/path/to/file.pdf" />
<GoogleSlides url="https://docs.google.com/.../edit..." height={569} />
<DocumentLink href="url" title="Title" description="Desc" icon="code|pdf|link" />
```

### YouTube Embed Pattern
```jsx
<div style={{position: "relative", width: "100%", paddingBottom: "56.25%", marginBottom: "1rem"}}>
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: "8px"}} allowFullScreen title="Title" />
</div>
```

### HEIC to JPEG Conversion (macOS)
```bash
sips -s format jpeg input.HEIC --out output.jpg
```

### Image Compression
```bash
sips -s format jpeg -s formatOptions 70 --resampleWidth 1920 input.jpg --out output.jpg  # JPEG
sips --resampleWidth 1920 input.png --out output.png                                       # PNG
```

### Unicode Filename Fix (macOS screenshots with U+202F)
```bash
cd /target/dir && for f in Screenshot*; do mv "$f" "thumbnail.png"; done
```

### Image Validation
```bash
python3 scripts/validate_images.py [directory]
```

### Build Commands
```bash
cd "/Users/administrator/Python/New United States of America"
npm start          # Dev server on localhost:3000
npm run build      # Production build → /build/ (uses craco)
```

### .htaccess Critical Rule
**RewriteCond MUST be immediately before RewriteRule** — if you add content between them, ALL requests (including JS/CSS/images) get rewritten to index.html and the site crashes:
```apache
# CORRECT — these must be adjacent:
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
```

---

## Session History

1. **Session 1 (Jan 2026):** Populated engineering projects, added PDF/Slides/DocumentLink components, fixed ResizeObserver, enabled CS and Electronic Art sections
2. **Session 2 (Jan 2026):** Continued populating, fixed ProjectDetail multi-section search, hit MDX loading bug
3. **Session 3 (Mar 7, 2026):** Fixed MDX, added Resume tab, Tractable redirect, filled About/Academic/Contact, vision-scanned images, created 8 new project pages. Crashed from corrupted edutech images.
4. **Session 4 (Mar 7-8, 2026):** Computer scan for repos/images, created hackathon pages, restructured nav layout (added Miscellaneous, MIT Portfolio), moved RoboCup/Isaac Sim to Engineering
5. **Session 5 (Mar 8, 2026):** Build optimization (1.4GB→456MB via YouTube embeds + image compression + dedup), added new photos from Red Coast Base, title renames to match CV/LinkedIn, hover overlay shows titles, mobile PDF fix, .htaccess cache-control overhaul, AAH IA Optimiser project added, copyright updated, mobile thumbnail fix, game engine merge, remark-gfm v4 upgrade
