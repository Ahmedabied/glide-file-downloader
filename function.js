// function.js

window.function = async function(text) {
  try {
    // Parse the input text
    const parts = text.value.split(',').map(part => part.trim());
    
    // Extract URLs from the input
    const urls = parts.filter(part => part.startsWith('http'));
    
    if (urls.length === 0) {
      throw new Error('No valid URLs found in the input');
    }

    // Create a new zip file using JSZip (loaded from CDN in index.html)
    const zip = new JSZip();

    // Download and add files to zip
    const downloadPromises = urls.map(async (url, index) => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const filename = `file_${index + 1}${url.substring(url.lastIndexOf('.'))}`;
        zip.file(filename, blob);
      } catch (error) {
        console.error(`Error downloading ${url}:`, error);
      }
    });

    await Promise.all(downloadPromises);

    // Generate the zip file
    const content = await zip.generateAsync({type: 'blob'});
    
    // Create download link
    const downloadUrl = URL.createObjectURL(content);
    
    return downloadUrl;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
