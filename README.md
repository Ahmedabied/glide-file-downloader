# Glide File Downloader

This tool downloads files from URLs, creates a zip archive, and returns a download link. It's designed for use with Glide Apps Experimental Code columns.

## Features

- Downloads multiple files from URLs provided in comma-separated text
- Creates a zip file containing all downloaded files
- Works entirely in the browser (no server required)
- Can be hosted on GitHub Pages

## Usage

In your Glide app, create an Experimental Code column with this URL:
https://ahmedabied.github.io/glide-file-downloader/

Pass a comma-separated list of URLs as input, and the function will return a download URL for a zip file containing all the files.

## Technical Details

This tool uses:
- JSZip for creating zip files in the browser
- FileSaver.js for handling file downloads
- Client-side JavaScript for all processing
- GitHub Pages for hosting
