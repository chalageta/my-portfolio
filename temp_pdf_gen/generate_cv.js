const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('../public/Chala_Geta_CV.pdf'));

// Fonts and Styling
doc.font('Helvetica-Bold').fontSize(24).text('Chala Geta', { align: 'center' });
doc.font('Helvetica').fontSize(12).fillColor('#666666').text('Full Stack Developer', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(10).text('Addis Ababa, Ethiopia | GitHub: chalageta | LinkedIn: chala-geta', { align: 'center' });
doc.moveDown(2);

// Summary
doc.fillColor('#000000').font('Helvetica-Bold').fontSize(16).text('Professional Summary');
doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor('#cccccc').stroke();
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text('I am a Full Stack Developer with strong self-commitment and a continuous passion for learning new technologies. I have hands-on experience designing, developing, and delivering scalable web applications across both frontend and backend systems.\n\nI have worked on several impactful projects, including the ECC Integrated Library System, MOR & ECC Alumni Management Systems, and Arifget.com E-Learning Platform. Currently, I am working on the Ethiopian Single Window (ESW) project as a Software Developer, contributing to national-level digital transformation initiatives.\n\nMy technical expertise includes Next.js, React.js, Tailwind CSS, Node.js, Spring Boot, and backend systems using MySQL and Oracle databases. I am highly motivated, adaptable, and always eager to expand my skill set while building reliable, secure, and user-focused solutions.\n\nI thrive in collaborative environments and enjoy turning complex requirements into efficient, maintainable software solutions.', { align: 'justify' });
doc.moveDown(1.5);

// Experience
doc.font('Helvetica-Bold').fontSize(16).text('Experience');
doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor('#cccccc').stroke();
doc.moveDown(0.5);
// Role 0
doc.font('Helvetica-Bold').fontSize(12).text('Ethiopian Disaster Risk Management Commission (EDRMC)');
doc.font('Helvetica-Bold').fontSize(11).text('Frontend Developer', { continued: true }).font('Helvetica-Oblique').text('  |  July 2026 - Present');
doc.font('Helvetica').fontSize(11).text('Working as a part-time frontend developer, contributing to the development and improvement of modern web applications and digital platforms. Developing responsive interfaces using React, Next.js, TypeScript, and Tailwind CSS. Translating UI/UX designs into reusable and maintainable frontend components. Integrating frontend applications with REST APIs and backend services. Implementing form workflows, data management, validation, and authentication interfaces.');
doc.moveDown(0.8);

// Role 1
doc.font('Helvetica-Bold').fontSize(12).text('Ethiopian Customs Commission');
doc.font('Helvetica-Bold').fontSize(11).text('Full Stack Developer', { continued: true }).font('Helvetica-Oblique').text('  |  Dec 2023 - Present');
doc.font('Helvetica').fontSize(11).text('I specialize in designing and developing scalable, secure, and high-performance web applications using modern technologies such as React, Next.js, TypeScript, Spring Boot, PHP, and MySQL. At the Commission, I have contributed to several national digital transformation projects, including the ECC-Integrated Library System (ECC-ILS), the Ministry of Revenue and Customs Commission Alumni System, and the Ethiopian Single Window (inECC). My role focuses on backend development, API integration, and frontend implementation to ensure seamless data flow, efficiency, and user experience.');
doc.moveDown(0.8);

// Role 2
doc.font('Helvetica-Bold').fontSize(11).text('Junior Software Developer', { continued: true }).font('Helvetica-Oblique').text('  |  Dec 2024 - Present');
doc.font('Helvetica').fontSize(11).text('Developed and maintained components of the Ethiopian Electronic Single Window (EESW) system, improving efficiency in customs processing. Participated in testing, debugging, and deploying software modules, ensuring high-quality and reliable system performance. Contributed to digital transformation initiatives to modernize customs operations and improve user experience.');
doc.moveDown(0.8);

// Role 3
doc.font('Helvetica-Bold').fontSize(12).text('DAN Energy R&D');
doc.font('Helvetica-Bold').fontSize(11).text('Internship Practitioner', { continued: true }).font('Helvetica-Oblique').text('  |  Aug 2022 - Aug 2023');
doc.font('Helvetica').fontSize(11).text('Full-time internship focused on software development and applied learning.');
doc.moveDown(1.5);

// Education
doc.font('Helvetica-Bold').fontSize(16).text('Education');
doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor('#cccccc').stroke();
doc.moveDown(0.5);

doc.font('Helvetica-Bold').fontSize(12).text('Ambo University');
doc.font('Helvetica-Bold').fontSize(11).text('Bachelor of Technology, Information Systems', { continued: true }).font('Helvetica-Oblique').text('  |  Oct 2019 – Jul 2022');
doc.font('Helvetica').fontSize(11).text('Grade: 3.86');
doc.moveDown(1.5);

// Skills
doc.font('Helvetica-Bold').fontSize(16).text('Technical Skills');
doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor('#cccccc').stroke();
doc.moveDown(0.5);

const skills = [
  { category: 'Languages & Frameworks', items: 'Next.js, React.js, Tailwind CSS, Node.js, Spring Boot, PHP, TypeScript' },
  { category: 'Databases', items: 'MySQL, Oracle' },
  { category: 'Other Skills', items: 'Front-End Development, Full-Stack Development, API Integration' }
];

skills.forEach(skill => {
  doc.font('Helvetica-Bold').fontSize(11).text(`${skill.category}: `, { continued: true })
     .font('Helvetica').text(skill.items);
  doc.moveDown(0.3);
});
doc.moveDown(1.5);

// Certifications
doc.font('Helvetica-Bold').fontSize(16).text('Certifications');
doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor('#cccccc').stroke();
doc.moveDown(0.5);
doc.font('Helvetica-Bold').fontSize(11).text('• IEICS ESW Certificate of Recognition');
doc.font('Helvetica').fontSize(10).text('   Certification for Ethiopian Electronic Single Window development and integration.');
doc.moveDown(0.3);
doc.font('Helvetica-Bold').fontSize(11).text('• ILS Certificate of Appreciation');
doc.font('Helvetica').fontSize(10).text('   Professional certification highlighting technical and functional expertise.');
doc.moveDown(0.3);
doc.font('Helvetica-Bold').fontSize(11).text('• Arifget Elearning Certification');
doc.font('Helvetica').fontSize(10).text('   Certificate of recognition for the Arifget Elearning project.');

doc.end();
console.log('PDF generated successfully!');
