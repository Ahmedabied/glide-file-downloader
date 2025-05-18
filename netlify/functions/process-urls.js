// Netlify serverless function to handle URL processing
const fetch = require('node-fetch');

exports.handler = async (event) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  // Handle OPTIONS request (pre-flight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse request body
    const body = JSON.parse(event.body || '{}');
    const { text } = body;

    if (!text) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'No input text provided' })
      };
    }

    // Parse the input text
    const parts = text.split(',').map(part => part.trim());
    
    // Extract URLs from the input
    const urls = parts.filter(part => part.startsWith('http'));
    
    if (urls.length === 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'No valid URLs found in the input' })
      };
    }

    // Return the processed URLs
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        result: urls.join(','),
        message: `Found ${urls.length} valid URLs`
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
}; 