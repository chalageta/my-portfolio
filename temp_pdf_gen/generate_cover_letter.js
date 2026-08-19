const fs = require('fs');
const PDFDocument = require('pdfkit');

const doc = new PDFDocument({ margin: 50, size: 'A4' });
doc.pipe(fs.createWriteStream('../public/Chala_Geta_Cover_Letter.pdf'));

const ACCENT_COLOR = '#4F46E5';
const TEXT_COLOR = '#333333';
const LIGHT_TEXT = '#666666';

// HEADER
doc.font('Helvetica-Bold').fontSize(24).fillColor('#111827').text('Chala Geta', { align: 'left' });
doc.font('Helvetica').fontSize(10).fillColor(LIGHT_TEXT).text('Addis Ababa, Ethiopia  |  chalageta21@gmail.com  |  0955350910');
doc.fillColor(ACCENT_COLOR).text('Portfolio: https://portifolio-delta-tawny-75.vercel.app/  |  LinkedIn: linkedin.com/in/chala-geta');
doc.moveDown(2);

// Date
const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
doc.font('Helvetica').fontSize(11).fillColor(TEXT_COLOR).text(date);
doc.moveDown(1);

// Salutation
doc.font('Helvetica').text('Dear Hiring Manager,');
doc.moveDown(1);

// Body
const body = `I am writing to express my strong interest in the Frontend Developer position. With 3 years of hands-on professional experience building responsive, highly interactive, and scalable web applications, I am confident in my ability to make an immediate impact on your engineering team.

In my current and previous roles at the Ethiopian Disaster Risk Management Commission and the Ethiopian Customs Commission, I have successfully designed and delivered complex user interfaces using React.js, Next.js, TypeScript, and modern CSS frameworks like Tailwind CSS. My work involves translating complex UI/UX designs into reusable components, consuming RESTful APIs, and optimizing applications for maximum performance and cross-browser compatibility. 

I am highly detail-oriented and passionate about creating seamless user experiences. I thrive in collaborative environments and am adept at working within agile workflows using tools like Git, Docker, and CI/CD pipelines. My ability to bridge the gap between design and technical implementation ensures that products are not only functional but also visually compelling and user-friendly.

I am excited about the opportunity to bring my technical expertise and proactive problem-solving mindset to your team. I am available to start on 08/31/2026, and my expected salary is 50k. 

Thank you for reviewing my application. I have attached my resume and provided links to my portfolio and GitHub profile for your consideration. I look forward to the possibility of discussing this exciting opportunity with you.`;

doc.text(body, { align: 'justify', lineGap: 4 });
doc.moveDown(2);

// Sign-off
doc.text('Sincerely,');
doc.moveDown(1);
doc.font('Helvetica-Bold').text('Chala Geta');

doc.end();
console.log('Cover letter generated successfully!');
