const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50, size: 'A4' });
doc.pipe(fs.createWriteStream('../public/Frontend_CV.pdf'));

const ACCENT_COLOR = '#4F46E5';
const TEXT_COLOR = '#333333';
const LIGHT_TEXT = '#666666';

// Helper function for Section Headers
function addSectionHeader(title) {
  doc.moveDown(1);
  doc.font('Helvetica-Bold').fontSize(14).fillColor(ACCENT_COLOR).text(title.toUpperCase());
  doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor('#E5E7EB').lineWidth(1).stroke();
  doc.moveDown(0.5);
}

// Helper function for items with bullet points
function addBulletPoint(text) {
  doc.font('Helvetica').fontSize(10).fillColor(TEXT_COLOR).text(`•  ${text}`, { indent: 10, align: 'justify' });
}

// ---------------- HEADER ----------------
doc.font('Helvetica-Bold').fontSize(28).fillColor('#111827').text('Chala Geta', { align: 'center' });
doc.font('Helvetica-Bold').fontSize(12).fillColor(ACCENT_COLOR).text('Frontend Developer', { align: 'center' });
doc.moveDown(0.3);

const contactY1 = doc.y;
doc.font('Helvetica').fontSize(10);
const line1Text = 'Addis Ababa, Ethiopia  |  chalageta21@gmail.com';
doc.fillColor(LIGHT_TEXT).text(line1Text, { align: 'center' });
doc.moveDown(0.2);

const contactY2 = doc.y;
const t1 = 'GitHub: chalageta';
const t2 = '  |  ';
const t3 = 'LinkedIn: chala-geta';
const t4 = '  |  ';
const t5 = 'Portfolio: Live Site';
const totalWidth2 = doc.widthOfString(t1 + t2 + t3 + t4 + t5);
const startX2 = (doc.page.width - totalWidth2) / 2;

doc.fillColor(ACCENT_COLOR).text(t1, startX2, contactY2, { continued: true, link: 'https://github.com/chalageta' });
doc.fillColor(LIGHT_TEXT).text(t2, { continued: true, link: null });
doc.fillColor(ACCENT_COLOR).text(t3, { continued: true, link: 'https://www.linkedin.com/in/chala-geta' });
doc.fillColor(LIGHT_TEXT).text(t4, { continued: true, link: null });
doc.fillColor(ACCENT_COLOR).text(t5, { link: 'https://portifolio-delta-tawny-75.vercel.app/' });
doc.moveDown(0.5);

// ---------------- SUMMARY ----------------
addSectionHeader('Professional Summary');
doc.font('Helvetica').fontSize(10).fillColor(TEXT_COLOR)
   .text('Passionate Frontend Developer with 3 years of professional experience building responsive, highly interactive, and scalable web applications. Expert in React.js, Next.js, TypeScript, and modern CSS frameworks like Tailwind CSS. Proven track record of translating complex UI/UX designs into reusable and maintainable frontend components. Adept at consuming RESTful APIs, managing complex global state, and ensuring cross-browser compatibility and high performance. Dedicated to delivering seamless user experiences and writing clean, maintainable code within agile teams.', { align: 'justify' });

// ---------------- TECHNICAL SKILLS ----------------
addSectionHeader('Technical Skills');
const skills = [
  { category: 'Frontend', items: 'React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Vite, Redux' },
  { category: 'UI Libraries', items: 'Shadcn/UI, Material UI, Syncfusion, Framer Motion, React Router' },
  { category: 'Backend & APIs', items: 'RESTful APIs, Node.js, Express.js, GraphQL basics, Spring Boot (Familiar)' },
  { category: 'DevOps & Tools', items: 'Git, GitHub, Docker, Linux, CI/CD, Webpack, Figma (Design Handoff)' }
];

skills.forEach(skill => {
  doc.font('Helvetica-Bold').fontSize(10).fillColor(TEXT_COLOR).text(`${skill.category}: `, { continued: true })
     .font('Helvetica').fillColor(LIGHT_TEXT).text(skill.items);
  doc.moveDown(0.2);
});

// ---------------- EXPERIENCE ----------------
addSectionHeader('Professional Experience');

// Role 1
doc.font('Helvetica-Bold').fontSize(12).fillColor(TEXT_COLOR).text('Frontend Developer', { continued: true })
   .font('Helvetica').fillColor(LIGHT_TEXT).text('  |  Ethiopian Disaster Risk Management Commission (EDRMC)');
doc.font('Helvetica-Oblique').fontSize(10).fillColor(ACCENT_COLOR).text('July 2026 - Present');
doc.moveDown(0.2);
addBulletPoint('Working as a part-time frontend developer, contributing to the development and improvement of modern web applications.');
addBulletPoint('Developing responsive interfaces using React, Next.js, TypeScript, and Tailwind CSS.');
addBulletPoint('Translating UI/UX designs into reusable and maintainable frontend components.');
addBulletPoint('Integrating frontend applications with REST APIs and backend services.');
doc.moveDown(0.5);

// Role 2 (MESOB)
if (doc.y > 650) doc.addPage();
doc.font('Helvetica-Bold').fontSize(12).fillColor(TEXT_COLOR).text('Part-Time Backend Developer', { continued: true })
   .font('Helvetica').fillColor(LIGHT_TEXT).text('  |  Ethiopian MESOB Unified Platform');
doc.font('Helvetica-Oblique').fontSize(10).fillColor(ACCENT_COLOR).text('Jan 2026 – May 2026');
doc.moveDown(0.2);
addBulletPoint('Participated as a part-time backend developer in the development of the Ethiopian MESOB Unified Platform.');
addBulletPoint('Developed and maintained backend services using Spring Boot and implemented business workflows using Camunda.');
addBulletPoint('Participated in designing microservices architecture and integrated RESTful APIs between distributed services.');
addBulletPoint('Worked on database design, data persistence, service-to-service integration, and system interoperability.');
addBulletPoint('Applied scalable, modular, and maintainable backend development practices.');
doc.moveDown(0.5);

// Role 2
doc.font('Helvetica-Bold').fontSize(12).fillColor(TEXT_COLOR).text('Software Engineer', { continued: true })
   .font('Helvetica').fillColor(LIGHT_TEXT).text('  |  Ethiopian Customs Commission');
doc.font('Helvetica-Oblique').fontSize(10).fillColor(ACCENT_COLOR).text('Dec 2024 - Present');
doc.moveDown(0.2);
addBulletPoint('Specialize in designing and developing scalable, secure, and high-performance web applications.');
addBulletPoint('Contributed to national digital transformation projects: ECC-Integrated Library System, Alumni System, and Ethiopian Single Window.');
addBulletPoint('Focus on backend development, API integration, and frontend implementation to ensure seamless data flow and efficiency.');
addBulletPoint('Participating in national and international integrations, such as Phytosanitary application integration with IEICS and national integrations like ESW-EFDA.');
addBulletPoint('Developing ongoing modifications for the Ethiopian Electronic Single Window (ESW) and implementing cross-system integrations including National ID.');
doc.moveDown(0.5);

// Role 3
if (doc.y > 650) doc.addPage();
doc.font('Helvetica-Bold').fontSize(12).fillColor(TEXT_COLOR).text('Junior Software Developer', { continued: true })
   .font('Helvetica').fillColor(LIGHT_TEXT).text('  |  Ethiopian Customs Commission');
doc.font('Helvetica-Oblique').fontSize(10).fillColor(ACCENT_COLOR).text('Dec 2023 - Dec 2024');
doc.moveDown(0.2);
addBulletPoint('Developed and maintained components of the Ethiopian Electronic Single Window (EESW) system.');
addBulletPoint('Participated in testing, debugging, and deploying software modules.');
doc.moveDown(0.5);

// Role 4
if (doc.y > 650) doc.addPage();
doc.font('Helvetica-Bold').fontSize(12).fillColor(TEXT_COLOR).text('Internship Practitioner', { continued: true })
   .font('Helvetica').fillColor(LIGHT_TEXT).text('  |  DAN Energy R&D');
doc.font('Helvetica-Oblique').fontSize(10).fillColor(ACCENT_COLOR).text('Aug 2022 - Aug 2023');
doc.moveDown(0.2);
addBulletPoint('Full-time internship focused on software development and applied learning.');

// ---------------- FEATURED PROJECTS ----------------
if (doc.y > 650) doc.addPage();
addSectionHeader('Featured Projects');

const projects = [
  {
    title: 'eSWS — EAA Phytosanitary Integration',
    tech: 'Spring Boot, MyBatis, JSP, Oracle',
    desc: 'International system integration supporting phytosanitary-related workflows between the Ethiopian Single Window environment and external systems via API communication.'
  },
  {
    title: 'Import Permit Application',
    tech: 'Spring Boot, MyBatis, Oracle',
    desc: 'Digital application workflow developed for the Ministry of Transport and Logistics to support import permit processing, authentication, and form workflows.'
  },
  {
    title: 'EFDA Application & National ID Integration',
    tech: 'Spring Boot, OAuth 2.0, OIDC, PKCE',
    desc: 'Integrated National ID identity verification capabilities into government service workflows to improve secure digital identification and application processing.'
  },
  {
    title: 'Integrated Library Management System',
    tech: 'Next.js, Node.js, MySQL, Prisma, Tailwind CSS',
    desc: 'A complete library management platform supporting catalog management, user registration, role-based access, and borrowing workflows.'
  },
  {
    title: 'Business & Healthcare Websites',
    tech: 'Next.js, Tailwind CSS, Node.js',
    desc: 'Developed responsive, modern business portals including Michu Specialty Dental Clinic, EM Pharmaceutical, and Health Medical Trading.'
  },
  {
    title: 'Arifget Elearning',
    tech: 'Next.js, Tailwind CSS, Laravel, MySQL',
    desc: 'An innovative e-learning platform designed to provide educational resources and interactive online learning experiences.'
  }
];

projects.forEach(proj => {
  if (doc.y > 700) doc.addPage();
  
  doc.font('Helvetica-Bold').fontSize(11).fillColor(TEXT_COLOR).text(proj.title);
  doc.font('Helvetica-Oblique').fontSize(9).fillColor(ACCENT_COLOR).text(proj.tech);
  doc.moveDown(0.2);
  doc.font('Helvetica').fontSize(10).fillColor(TEXT_COLOR).text(proj.desc, { align: 'justify' });
  doc.moveDown(0.5);
});

// ---------------- EDUCATION ----------------
if (doc.y > 700) doc.addPage();
addSectionHeader('Education');
doc.font('Helvetica-Bold').fontSize(11).fillColor(TEXT_COLOR).text('Bachelor of Technology, Information Systems', { continued: true })
   .font('Helvetica').fillColor(LIGHT_TEXT).text('  |  Ambo University');
doc.font('Helvetica-Oblique').fontSize(10).fillColor(ACCENT_COLOR).text('Oct 2019 – Jul 2022');
doc.moveDown(0.2);
addBulletPoint('Grade: 3.86');
doc.moveDown(0.5);

// ---------------- CERTIFICATIONS ----------------
if (doc.y > 700) doc.addPage();
addSectionHeader('Certifications');

doc.font('Helvetica-Bold').fontSize(10).fillColor(TEXT_COLOR).text('• Certificate of Recognition (IEICS - ePhyto Integration)', { continued: true })
   .font('Helvetica').fillColor(LIGHT_TEXT).text(' - Ethiopian Agricultural Authority (Oct 2025)');
doc.font('Helvetica').fontSize(9).fillColor(LIGHT_TEXT).text('   Awarded for dedicated and professional support in successfully integrating the Integrated Export and Import Certification System with the Ethiopian Single Window System.');
doc.moveDown(0.4);

doc.font('Helvetica-Bold').fontSize(10).fillColor(TEXT_COLOR).text('• Certificate of Appreciation (Integrated Library Management System)', { continued: true })
   .font('Helvetica').fillColor(LIGHT_TEXT).text(' - Ethiopian Customs Commission (Jun 2026)');
doc.font('Helvetica').fontSize(9).fillColor(LIGHT_TEXT).text('   Awarded for outstanding contribution to the development of the Ethiopian Customs Commission Integrated Library Management System.');
doc.moveDown(0.4);

doc.font('Helvetica-Bold').fontSize(10).fillColor(TEXT_COLOR).text('• Certificate of Recognition (Arifget E-Learning Platform)', { continued: true })
   .font('Helvetica').fillColor(LIGHT_TEXT).text(' - Arifget');
doc.font('Helvetica').fontSize(9).fillColor(LIGHT_TEXT).text('   Recognized for exceptional effort, skill, and innovation in developing the Arifget E-Learning Platform.');

doc.end();
console.log('PDF generated successfully!');
