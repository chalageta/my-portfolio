export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  highlights?: string[];
  features?: string[];
  technologies: string[];
  website?: string;
  image?: string;
};

export const featuredProjects: Project[] = [

  {
    id: "esws-eaa",
    number: "01",
    image: "/images/projects/1.jpg",
    title: "eSWS — EAA Phytosanitary Integration",
    category: "Government / International Integration",
    description:
      "Integration work supporting phytosanitary-related workflows between the Ethiopian Single Window environment and external/international systems.",
    highlights: [
      "International system integration",
      "API communication",
      "Enterprise workflows",
      "Data exchange",
      "Authentication",
      "XML/JSON processing",
      "Error handling",
      "Integration monitoring"
    ],
    technologies: ["Spring Boot", "MyBatis", "JSP", "Oracle"],
  },
  {
    id: "import-permit",
    number: "02",
    image: "/images/projects/2.jpg",
    title: "Import Permit Application — Ministry of Transport and Logistics",
    category: "Government Digital Service",
    description:
      "A digital application workflow developed to support import permit processing and government service delivery.",
    highlights: [
      "Online application",
      "Form workflows",
      "Authentication",
      "Validation",
      "Backend APIs",
      "Document processing",
      "Government integration",
      "Application tracking"
    ],
    technologies: ["Spring Boot", "MyBatis", "JSP", "Oracle"],
  },
  {
    id: "efda-fayda",
    number: "03",
    image: "/images/projects/3.jpg",
    title: "EFDA Application & National ID Integration",
    category: "Government / Identity Integration",
    description:
      "Integrated National ID identity verification capabilities into government service workflows to improve secure digital identification and application processing.",
    highlights: [
      "National ID integration",
      "Identity verification",
      "OAuth/OIDC",
      "PKCE",
      "Authentication callback flow",
      "User information retrieval",
      "Secure application workflow"
    ],
    technologies: ["Spring Boot", "OIDC", "OAuth 2.0", "PKCE", "REST APIs", "Oracle"],
  },
  {
    id: "ilms",
    number: "04",
    image: "/images/projects/4.jpg",
    title: "Integrated Library Management System",
    category: "Enterprise / Library Platform",
    description:
      "A complete library management platform supporting library operations, catalog management, user management, circulation, reservations, digital resources and reporting.",
    features: [
      "User registration",
      "Authentication",
      "Role-based access",
      "Book management",
      "OPAC",
      "Advanced search",
      "Book reservation",
      "Borrowing and returning",
      "Digital library",
      "Notifications",
      "Reports",
      "Administration"
    ],
    technologies: ["Next.js", "Node.js", "MySQL", "Prisma", "Tailwind CSS", "JWT"],
  },

  {
    id: "michu-dental",
    number: "05",
    image: "/images/projects/5.jpg",
    title: "Michu Specialty Dental Clinic",
    website: "https://michudentalclinic.com/",
    category: "Business Website",
    description:
      "Modern responsive healthcare website designed to present clinical services, patient information, contact details and appointment-focused user journeys.",
    features: [
      "Responsive design",
      "Service presentation",
      "Appointment CTA",
      "About section",
      "Testimonials",
      "Contact information",
      "Gallery",
      "Modern healthcare UI"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MySQL"],
  },
  {
    id: "em-pharma",
    number: "06",
    image: "/images/projects/6.jpg",
    title: "EM Pharmaceutical",
    website: "https://empharmaceutical.com/",
    category: "Business / Healthcare Website",
    description:
      "Professional healthcare business website for presenting pharmaceutical and medical equipment services, products and support capabilities.",
    highlights: [
      "Medical equipment",
      "Pharmaceutical services",
      "Product presentation",
      "Installation",
      "Maintenance",
      "Technical support",
      "Responsive design",
      "Business-focused UX"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MySQL"],
  },
  {
    id: "health-trading",
    number: "07",
    image: "/images/projects/7.jpg",
    title: "Health Medical Trading",
    website: "https://healthmedicaltrading.com/",
    category: "Business Website",
    description:
      "Modern business website for a healthcare and medical trading organization.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MySQL"],
  },
  {
    id: "arifget-elearning",
    number: "08",
    image: "/images/projects/8.jpg",
    title: "Arifget Elearning",
    website: "https://arifget.com/",
    category: "E-Learning Platform",
    description:
      "An innovative e-learning platform designed to provide educational resources and interactive online learning experiences.",
    technologies: ["Next.js", "Tailwind CSS", "Laravel", "MySQL"],
  }
];

export const additionalWork = [
  "Corporate websites",
  "Healthcare websites",
  "Trading company websites",
  "Business portals",
  "Internal enterprise applications",
  "Government service applications",
  "API integrations",
  "Authentication integrations",
  "Database-driven systems"
];
