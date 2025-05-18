// function.js

window.function = async function(text) {
  try {
    if (!text.value) {
      throw new Error('No input text provided');
    }
    
    // Call our Netlify function
    const response = await fetch('/api/process-urls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: text.value })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to process URLs');
    }
    
    const data = await response.json();
    return data.result;
    
  } catch (error) {
    console.error('Error:', error);
    return error.message;
  }
}
