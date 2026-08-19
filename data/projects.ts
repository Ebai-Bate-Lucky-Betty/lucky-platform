export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectChallenge = {
  challenge: string;
  solution: string;
};

export type ProjectArchitectureSection = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export type ProjectTechnology = {
  name: string;
  purpose: string;
};

export type Project = {
  /*
   * =====================================================
   * IDENTITY
   * =====================================================
   */

  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;

  /*
   * =====================================================
   * PROJECT OVERVIEW
   * =====================================================
   */

  description: string;
  technologies: ProjectTechnology[];

  image?: string;
  featured?: boolean;

  /*
   * Determines whether this project appears
   * in the Selected Work section on the homepage.
   */

  selectedWork?: boolean;

  /*
   * =====================================================
   * CASE STUDY
   * =====================================================
   */

  overview: string;

  problem: string;

  whyIChoseIt: string;

  research: string;

  designProcess: string;

  /*
   * =====================================================
   * ARCHITECTURE
   * =====================================================
   */

  architecture: ProjectArchitectureSection[];

  /*
   * =====================================================
   * CHALLENGES
   * =====================================================
   */

  challenges: ProjectChallenge[];

  /*
   * =====================================================
   * RESULTS
   * =====================================================
   */

  results: string;

  /*
   * =====================================================
   * LEARNING
   * =====================================================
   */

  whatILearned: string;

  futureImprovements: string[];

  /*
   * =====================================================
   * VISUALS
   * =====================================================
   */

  screenshots: ProjectImage[];

  videoDemo?: string;

  /*
   * =====================================================
   * LINKS
   * =====================================================
   */

  links: {
    github?: string;
    liveDemo?: string;
  };

  /*
   * =====================================================
   * REFLECTION
   * =====================================================
   */

  reflection: string;
};


/*
 * =========================================================
 * PROJECTS
 * =========================================================
 */

export const projects: Project[] = [

  /*
   * =====================================================
   * DREAMHOUSE237
   * =====================================================
   */

  {
    slug: "dreamhouse237",

    number: "01",

    title: "DreamHouse237",

    category: "Software Engineering",

    year: "2026",

    description:
      "A modular real-estate platform designed around scalable backend architecture, distributed services, and a clear user experience.",

    technologies: [
      {
        name: "Django",
        purpose:
          "Backend development, business logic, and core application services.",
      },

      {
        name: "React",
        purpose:
          "Building the frontend interface and interactive user experience.",
      },

      {
        name: "Docker",
        purpose:
          "Containerizing services and creating consistent development environments.",
      },

      {
        name: "Microservices",
        purpose:
          "Separating major system responsibilities into focused and independently manageable services.",
      },
    ],

    image:
      "/images/projects/dreamhouse237/dreamhouse237.png",

    featured: true,

    selectedWork: false,


    /*
     * =====================================================
     * CASE STUDY
     * =====================================================
     */

    overview:
      "A full-stack real-estate platform designed to bring property discovery, management, and transaction workflows into a structured digital experience.",


    problem:
      "Property discovery and management can become fragmented when information, users, transactions, and supporting services are handled through disconnected systems. I wanted to explore how these responsibilities could be brought together through a coherent software architecture.",


    whyIChoseIt:
      "I chose this project because it allowed me to work on a problem that was large enough to explore real software architecture rather than simply building another isolated CRUD application. It gave me an opportunity to think about services, communication, data, infrastructure, and user experience as parts of one system.",


    research:
      "The research phase focused on identifying the main actors within a real-estate platform, understanding their workflows, identifying the core entities involved, and determining how the different parts of the system would communicate.",


    designProcess:
      "I started by breaking the problem into its major domains and user journeys. From there, I translated the requirements into data models, service boundaries, APIs, frontend flows, and infrastructure decisions. The implementation was then developed incrementally, validating architectural decisions as the system evolved.",


    /*
     * =====================================================
     * ARCHITECTURE
     * =====================================================
     */

    architecture: [

      {
        title: "System Architecture",

        description:
          "The platform follows a modular architecture in which different responsibilities can be isolated into dedicated services. Communication between components is handled through explicit APIs and messaging infrastructure where appropriate.",

        image:
          "/images/projects/dreamhouse237/architecture.png",

        imageAlt:
          "DreamHouse237 system architecture diagram",
      },


      {
        title: "Database Architecture",

        description:
          "The data layer is structured around the core entities and relationships required by the real-estate platform. The database design supports property information, users, transactions, and the relationships between the different domains of the system.",

        image:
          "/images/projects/dreamhouse237/database.png",

        imageAlt:
          "DreamHouse237 database architecture diagram",
      },


      {
        title: "API Design",

        description:
          "The API layer provides structured communication between the frontend and backend services. Endpoints are organized around clearly defined responsibilities so that individual components can evolve without creating unnecessary dependencies across the system.",

        image:
          "/images/projects/dreamhouse237/api.png",

        imageAlt:
          "DreamHouse237 API design diagram",
      },

    ],


    /*
     * =====================================================
     * CHALLENGES
     * =====================================================
     */

    challenges: [

      {
        challenge:
          "Determining appropriate boundaries between the different responsibilities of the platform.",

        solution:
          "I separated the system into focused domains and designed communication between them around clearly defined interfaces rather than allowing every component to directly depend on every other component.",
      },


      {
        challenge:
          "Keeping the architecture flexible enough to support future services and features.",

        solution:
          "I approached the system as a collection of modular responsibilities instead of treating the application as one large codebase.",
      },

    ],


    /*
     * =====================================================
     * RESULTS
     * =====================================================
     */

    results:
      "The project established a foundation for a modular real-estate platform while giving me practical experience with service-oriented thinking, API design, containerization, and the trade-offs involved in building distributed systems.",


    /*
     * =====================================================
     * LEARNING
     * =====================================================
     */

    whatILearned:
      "The project taught me that architecture is not simply about choosing technologies. It is about deciding where responsibilities belong, how components communicate, how data flows through the system, and how today's decisions affect tomorrow's ability to change the product.",


    futureImprovements: [

      "Complete production-grade PostgreSQL deployment.",

      "Expand authentication and authorization.",

      "Complete payment integration.",

      "Introduce broader automated testing.",

      "Set up continuous integration and deployment.",

      "Deploy the complete platform to a production environment.",

    ],


    /*
     * =====================================================
     * SCREENSHOTS
     * =====================================================
     */

    screenshots: [

      {
        src: "/images/projects/dreamhouse237/screenshot-01.png",
        alt: "DreamHouse237 interface",
        caption:
          "Login",
      },

      {
        src: "/images/projects/dreamhouse237/screenshot-02.png",
        alt: "DreamHouse237 property interface",
        caption:
          "Property publishing",
      },

      {
        src: "/images/projects/dreamhouse237/screenshot-03.png",
        alt: "DreamHouse237 dashboard",
        caption:
          "Property discovery and presentation.",
      },

      {
        src: "/images/projects/dreamhouse237/screenshot-03.png",
        alt: "DreamHouse237 dashboard",
        caption:
          "Application dashboard.",
      },

    ],


    videoDemo:
      undefined,


    /*
     * =====================================================
     * LINKS
     * =====================================================
     */

    links: {

      github:
        "https://github.com/DREAMHOUSE-237",

      liveDemo:
        undefined,

    },


    /*
     * =====================================================
     * REFLECTION
     * =====================================================
     */

    reflection:
      "If I were rebuilding the project, I would spend more time defining service boundaries and infrastructure conventions before implementation. This would reduce architectural changes later and make the system easier to evolve.",

  },

];