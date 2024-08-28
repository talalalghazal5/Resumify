const doc = document.implementation.createHTMLDocument("New Document");
const p = doc.createElement("p");
p.textContent = "This is a new paragraph.";
doc.body.appendChild(p);
console.log(doc);