export type ResumeEducation = {
  degree: string;
  institution: string;
  period: string;
  description?: string;
};

export type ResumeExperience = {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
};

export type ResumeLanguage = {
  name: string;
  level: string;
};

export const resume = {
  personal: {
    name: "Lucky Betty",
    title: "Software Engineer & Creative Technologist",
    positioning:
      "Application Development · Backend Engineering · System Architecture · Interactive & Immersive Technology · Gaming",
  },

  education: [
    {
      degree: "M2 — Software Engineering and Information Systems",
      institution: "University of Yaoundé I",
      period: "2026 — 2027",
      description:
        "Ongoing",
    },
    {
      degree: "M1 — Software Engineering and Information Systems",
      institution: "University of Yaoundé I",
      period: "2025 — 2026",
    },
    {
      degree: "Bachelor's Degree — Software Engineering and Information Systems",
      institution: "University of Yaoundé I",
      period: "2022 — 2025",
    },
  ] satisfies ResumeEducation[],

  experience: [
    {
      role: "Software Developer Intern",
      organization: "KBGroup",
      period: "3 Months",
      description:
        "Contributed to backend and full-stack development in a production environment, working with REST APIs, application architecture, and agile development practices.",
      highlights: [
        "PHP",
        "HTML",
        "CSS",
        "REST APIs",
        "TOGAF",
        "ArchiMate",
        "SCRUM",

      ],
    },
    {
      role: "Creator & Developer",
      organization: "DreamHouse237 · Academic Team Project",
      period: "4 Months",
      description:
        "Designed and developed a modular real-estate platform as part of a collaborative engineering project, implementing independently deployed services for authentication, identity verification, property listings, and payments.",
      highlights: [
        "Django, Spring Boot, React, Flutter",
        "RabbitMQ inter-service messaging",
        "AWS EC2 deployment & Eureka service registry",
      ],
    },
  ] satisfies ResumeExperience[],

  skills: {
  technical: [
    "Python",
    "JavaScript / TypeScript",
    "Django / DRF",
    "Java / Spring Boot",
    "React / Next.js",
    "PHP",
    "HTML",
    "CSS",
    "SQL",
    "PostgreSQL / MariaDB",
    "RESTful APIs",
    "Microservices Architecture",
    "System Architecture",
    "Docker",
    "RabbitMQ",
    "Git / GitHub",
    "Prompt Engineering",
    "AI-Assisted Development",
  ],

  creative: [
    "Blender",
    "Storytelling",
  ],

  soft: [
    "Systems Thinking",
    "Problem Solving",
    "Analytical Thinking",
    "Creative Thinking",
    "Curiosity",
    "Adaptability",
    "Collaboration",
    "Communication",
    "Attention to Detail",
    "Continuous Learning",
  ],
},

  languages: [
    { name: "English", level: "Native" },
    { name: "French", level: "Professional working proficiency" },
  ] satisfies ResumeLanguage[],

  pdf: {
    downloadUrl: "/resume.pdf",
  },

  contact: {
    label: "Contact Me",
    href: "/contact",
  },
} as const;