export const htmlEncoded = (value) => {
  const htmlCharMap = {
    "'": "&#39;",
    '"': "&quot;",
    "<": "&lt;",
    ">": "&gt;",
    "\\": "&#x5c;",
    "`": "&#x60;",
    ":": "&#58",
  };
  const encodeHTMLmapper = (ch) => htmlCharMap[ch];
  return value.replace(/[&"'<>\\`:]/g, encodeHTMLmapper);
};
