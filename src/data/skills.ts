export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
      "React Router",
      "Shadcn/UI",
      "Material UI",
      "Syncfusion",
      "React Quill"
    ]
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Java",
      "Node.js",
      "Express.js",
      "REST APIs",
      "SOAP APIs",
      "JWT",
      "OAuth 2.0",
      "OpenID Connect",
      "PKCE"
    ]
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "Oracle Database",
      "Prisma",
      "JPA / Hibernate"
    ]
  },
  {
    title: "Integration",
    skills: [
      "REST API Integration",
      "SOAP Integration",
      "Enterprise System Integration",
      "OAuth / OIDC",
      "Fayda / National ID integration",
      "API Gateway",
      "Middleware integration",
      "Message-based integration",
      "XML",
      "JSON"
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Docker Compose",
      "Linux",
      "WSL",
      "Maven",
      "npm",
      "VS Code",
      "IntelliJ IDEA"
    ]
  }
];
