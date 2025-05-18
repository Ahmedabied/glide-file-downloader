// function.js

window.function = function(text) {
  try {
    // Check if input text is defined
    if (!text || text.value === undefined) {
      return "";
    }
    
    // Parse the input text
    const parts = text.value.split(',').map(part => part.trim());
    
    // Extract URLs from the input
    const urls = parts.filter(part => part.startsWith('http'));
    
    if (urls.length === 0) {
      return "No valid URLs found";
    }
    
    // Return the processed URLs
    return urls.join(',');
    
  } catch (error) {
    console.error('Error:', error);
    return error.message;
  }
}
