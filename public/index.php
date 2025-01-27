<?php
// Set proper MIME types
$extension = pathinfo($_SERVER['REQUEST_URI'], PATHINFO_EXTENSION);
if ($extension === 'js') {
    header('Content-Type: application/javascript');
} elseif ($extension === 'css') {
    header('Content-Type: text/css');
}

// Handle all routes to index.html
$request_uri = $_SERVER['REQUEST_URI'];
if (!file_exists('.' . $request_uri) && !preg_match('/\.(js|css|png|jpg|jpeg|gif|ico|svg)$/i', $request_uri)) {
    include('index.html');
    exit;
}

// Serve the requested file
if (file_exists('.' . $request_uri)) {
    return false;
}
?>