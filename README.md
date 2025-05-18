# Glide URL Processor

This tool processes URLs for use with Glide Apps Experimental Code columns. It's designed to be deployed on Netlify.

## Features

- Processes multiple URLs from comma-separated text
- Uses Netlify serverless functions to handle requests
- Follows Glide's experimental code column requirements
- Supports CORS for cross-origin requests

## Setup

1. Deploy to Netlify:
   - Fork this repository
   - Connect to Netlify
   - Deploy with the following settings:
     - Build command: (leave blank)
     - Publish directory: .
     - Functions directory: netlify/functions

2. In your Glide app:
   - Create an Experimental Code column
   - Set the URL to your Netlify deployment URL
   - Pass comma-separated URLs as input

## Local Development

```
npm install
npm run dev
```

This will start the Netlify development server which allows you to test your functions locally.

## Technical Details

- Uses Netlify Functions for serverless backend
- All processing happens server-side
- Follows Glide's experimental code column conventions
- Properly handles CORS for browser access

## Deployment Status

The site is deployed at: https://glidehelper.netlify.app
