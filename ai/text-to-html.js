function convertToHTML(text) {
  // ``` কে ফাকা করে 
  let html = text.split("```\n").join("</textarea><br>").split("``` ").join("</textarea><br>").split("```").join("<textarea>");

  // Bold (**...**) -> <strong>...</strong>
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // List item (* ...) -> <li>...</li>
  html = html.replace(/^\s*\* (.*)$/gm, "<li>$1</li>");

  // Horizontal rule (--- বা -----) -> <hr>
  html = html.replace(/^-{3,}$/gm, "<hr>");

  // Newlines (paragraph আলাদা করতে)
  html = html.replace(/\n\s*\n/g, "</p><p>");

  // Wrap lists inside <ul>
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>");
  html = html.replace(/<\/ul>\s*<ul>/g, "");

  // সব টেক্সট <p> এর মধ্যে ঢুকিয়ে দেওয়া
  html = "<p>" + html + "</p>";
  return html;
}
