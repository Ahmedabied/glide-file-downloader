// function.js

window.function = async function (p1) {
  // 1. Load JSZip dynamically inside this async fn
  let JSZip;
  try {
    const jsZipUrl =
      "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.0/jszip.min.js";
    const libRes = await fetch(jsZipUrl);
    if (!libRes.ok) throw new Error(`Status ${libRes.status}`);
    const libCode = await libRes.text();
    eval(libCode);
    if (typeof window.JSZip === "undefined")
      throw new Error("JSZip failed to initialize");
    JSZip = window.JSZip;
  } catch (e) {
    return `❌ Could not load JSZip: ${e.message}`;
  }

  // 2. Parse the incoming JSON string (from p1.value or p1)
  const rawJson = p1 && p1.value !== undefined ? p1.value : p1;
  let data;
  try {
    data = JSON.parse(rawJson);
  } catch (e) {
    return `❌ Invalid JSON in p1: ${e.message}`;
  }

  // 3. Extract URL array under "Image URL"
  const urls = Array.isArray(data["Image URL"]) ? data["Image URL"] : [];
  if (urls.length === 0) {
    return '❌ No URLs found under key "Image URL"';
  }

  // 4. Zip images
  const zip = new JSZip();
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i].trim();
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = await res.arrayBuffer();
      const m = url.match(/\.([^\.\/\?#]+)(?:[\?#]|$)/);
      const ext = m ? m[1] : "jpg";
      zip.file(`image_${i + 1}.${ext}`, buf);
    } catch (err) {
      return `❌ Failed to fetch ${url}: ${err.message}`;
    }
  }

  // 5. Generate ZIP and return as data-URI
  try {
    const b64 = await zip.generateAsync({ type: "base64" });
    return `data:application/zip;base64,${b64}`;
  } catch (e) {
    return `❌ ZIP generation error: ${e.message}`;
  }
};
