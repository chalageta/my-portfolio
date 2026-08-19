export type Experience = {
  title: string;
  role: string;
  description: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    title: "Senior Full Stack Developer",
    role: "Ethiopian Customs Commission | Dec 2023 - Present",
    description: "I specialize in designing and developing scalable, secure, and high-performance web applications using modern technologies such as React, Next.js, TypeScript, Spring Boot, PHP, and MySQL. At the Commission, I have contributed to several national digital transformation projects, including the ECC-Integrated Library System (ECC-ILS), the Ministry of Revenue and Customs Commission Alumni System, and the Ethiopian Single Window (inECC).",
    responsibilities: [
      "Backend architecture and database design",
      "API integration and frontend implementation",
      "Building systems that improve government service delivery",
      "Maintaining clean code, security, and performance optimization"
    ]
  },
  {
    title: "Junior Software Developer",
    role: "Ethiopian Customs Commission | Dec 2024 - Present",
    description: "Developed and maintained components of the Ethiopian Electronic Single Window (EESW) system, improving efficiency in customs processing.",
    responsibilities: [
      "Participated in testing, debugging, and deploying software modules",
      "Ensured high-quality and reliable system performance",
      "Contributed to digital transformation initiatives to modernize customs operations",
      "Improved overall user experience"
    ]
  },
  {
    title: "Internship Practitioner",
    role: "DAN Energy R&D | Aug 2022 - Aug 2023",
    description: "Full-time internship gaining practical experience in software development and applied learning.",
    responsibilities: [
      "Full-Stack Development",
      "Front-End Development using HTML5 and PHP",
      "Hands-on technical implementation"
    ]
  }
];
