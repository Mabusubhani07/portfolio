const fs = require('fs');
const path = require('path');

const content = `BT
/F1 18 Tf
50 780 Td
(D MABUSUBHANI) Tj
/F1 10 Tf
0 -18 Td
(Software Engineer - AI/ML Builder) Tj
0 -14 Td
(Bengaluru, India | 01.mabhusubhani@gmail.com | github.com/Mabusubhani07) Tj
0 -26 Td
/F1 12 Tf
(EDUCATION) Tj
/F1 9 Tf
0 -16 Td
(Manipal Institute of Technology - MAHE) Tj
0 -13 Td
(Bachelor of Technology - B.Tech, Semester 3 | Bengaluru, Karnataka | Class of 2029) Tj
0 -24 Td
/F1 12 Tf
(FLAGSHIP PROJECT) Tj
/F1 9 Tf
0 -16 Td
(DIEMP: Digital Investigation & Evidence Management Platform) Tj
0 -13 Td
(Case-centric investigation workspace with SHA-256 integrity, RBAC, and AI summarization.) Tj
0 -13 Td
(Technologies: Next.js, TypeScript, PostgreSQL, Prisma, Cryptographic Verification) Tj
0 -24 Td
/F1 12 Tf
(TECHNICAL SKILLS) Tj
/F1 9 Tf
0 -16 Td
(AI/ML: Machine Learning, Generative AI, LLM APIs, AI Application Development, Data Analytics) Tj
0 -13 Td
(Programming: Java, C, Python, Data Structures & Algorithms, OOP) Tj
0 -13 Td
(Web / Backend: React, Next.js, TypeScript, PostgreSQL, Prisma, REST APIs, RBAC) Tj
0 -13 Td
(Cloud / Systems: AWS, Git, GitHub, DevOps, Cybersecurity Principles, Secure System Design) Tj
0 -24 Td
/F1 12 Tf
(HACKATHONS & ACHIEVEMENTS) Tj
/F1 9 Tf
0 -16 Td
(Adobe University Hackathon 2026 - Round 1 Coding/DSA, Round 2 Case Study Analytics) Tj
0 -13 Td
(Smart India Hackathon 2026 - Team LUCID) Tj
0 -13 Td
(PowerNext AI Hackathon - CPRI, Government of Karnataka) Tj
0 -24 Td
/F1 12 Tf
(COMMUNITY ENGAGEMENT) Tj
/F1 9 Tf
0 -16 Td
(Member, Volunteer Services Organisation - VSO, MAHE) Tj
0 -13 Td
(Volunteer, Psychology Department - Yuv Kriti NGO) Tj
0 -13 Td
(Content Writer & Medium Publisher - medium.com/@01.mabhusubhani) Tj
ET`;

const streamLength = Buffer.byteLength(content);

const objects = [
  '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
  '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
  '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n',
  `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${content}\nendstream\nendobj\n`,
  '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n'
];

let pdf = '%PDF-1.4\n';
const offsets = [];

objects.forEach((obj) => {
  offsets.push(Buffer.byteLength(pdf));
  pdf += obj;
});

const xrefOffset = Buffer.byteLength(pdf);
pdf += 'xref\n0 6\n0000000000 65535 f \n';
offsets.forEach(offset => {
  pdf += ('' + offset).padStart(10, '0') + ' 00000 n \n';
});

pdf += `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

const targetPath = path.join(__dirname, '..', 'public', 'assets', 'resume.pdf');
fs.writeFileSync(targetPath, pdf);
console.log('Resume PDF generated at', targetPath);
