/**
 * One-off script: generates a minimal, valid placeholder PDF at
 * public/resume.pdf so the "Download Resume" buttons work before you
 * add your real resume. Run with: node scripts/generate-placeholder-resume.js
 */
const fs = require("fs");
const path = require("path");

function buildPdf(lines) {
  const header = "%PDF-1.4\n";
  const objects = [];

  objects.push("<< /Type /Catalog /Pages 2 0 R >>");
  objects.push("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  objects.push(
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>"
  );

  const contentLines = lines
    .map((line) => `(${line.text.replace(/([()\\])/g, "\\$1")}) Tj`)
    .map((tj, i) => `BT /${lines[i].font} ${lines[i].size} Tf 72 ${lines[i].y} Td ${tj} ET`)
    .join("\n");
  const stream = `${contentLines}\n`;
  objects.push(`<< /Length ${stream.length} >>\nstream\n${stream}endstream`);

  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

  let body = header;
  const offsets = [0];
  objects.forEach((obj, i) => {
    offsets.push(body.length);
    body += `${i + 1} 0 obj\n${obj}\nendobj\n`;
  });

  const xrefStart = body.length;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) {
    xref += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }

  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  return body + xref + trailer;
}

const pdf = buildPdf([
  { text: "Stephanie Onwuagbaizu", font: "F1", size: 22, y: 700 },
  { text: "Backend Software Engineer / AI Enthusiast", font: "F2", size: 13, y: 674 },
  { text: "This is a placeholder resume.", font: "F1", size: 14, y: 630 },
  { text: "Replace public/resume.pdf with your real resume PDF.", font: "F2", size: 12, y: 610 },
]);

const outPath = path.join(__dirname, "..", "public", "resume.pdf");
fs.writeFileSync(outPath, pdf, "binary");
console.log(`Wrote placeholder resume to ${outPath}`);
