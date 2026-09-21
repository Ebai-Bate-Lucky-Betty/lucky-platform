/*
 * =========================================================
 * RICH TEXT
 * =========================================================
 *
 * Any descriptive field typed as RichText can hold either:
 *   - a single string (renders as one paragraph), or
 *   - an array of strings (renders as multiple paragraphs)
 *
 * Existing string values keep working with zero changes.
 */

export type RichText = string | string[];


/*
 * =========================================================
 * PROJECT IMAGE
 * =========================================================
 */

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};


/*
 * =========================================================
 * PROJECT CHALLENGE
 * =========================================================
 */

export type ProjectChallenge = {
  challenge: string;
  solution: string;
};


/*
 * =========================================================
 * PROJECT ARCHITECTURE SECTION
 * =========================================================
 *
 * `addGridUnder` contains the TITLES of other architecture
 * sections that should be displayed as 3-grid cards directly
 * underneath this section.
 *
 * Example:
 *
 * addGridUnder: [
 *   "Communication",
 *   "API Design",
 *   "Database Architecture",
 * ]
 *
 * The referenced sections remain normal architecture data.
 * Their title and description are automatically used to
 * create the cards.
 */

export type ProjectArchitectureSection = {
  title: string;
  description: RichText;

  image?: string;
  imageAlt?: string;

  addGridUnder?: string[];
};


/*
 * =========================================================
 * PROJECT TECHNOLOGY
 * =========================================================
 */

export type ProjectTechnology = {
  name: string;
  purpose: string;
};


/*
 * =========================================================
 * PROJECT
 * =========================================================
 */

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

  overview: RichText;

  problem: RichText;

  whyIChoseIt: RichText;

  research: RichText;

  designProcess: RichText;


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

  results: RichText;


  /*
   * =====================================================
   * LEARNING
   * =====================================================
   */

  whatILearned: RichText;

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

  reflection: RichText;
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
        "Foundation of the User and Identification Services. Multi-table inheritance models four user roles on one identity core, signals create profiles automatically, and management commands run as RabbitMQ consumers.",
    },
    {
      name: "Django REST Framework",
      purpose:
        "Defines each service's API contract: per-role registration serializers, whitelisted profile updates, paginated admin listings, and lookups by internal ID or auth-service UUID.",
    },
    {
      name: "Tesseract OCR",
      purpose:
        "Reads Cameroonian ID cards (French and English models) and extracts surname, given name, and card number. A successful read verifies the user automatically; a failed one drops into an admin review queue.",
    },
    {
      name: "RabbitMQ (Pika)",
      purpose:
        "Carries account, identity, and payment events between services over durable queues with persistent messages, manual acknowledgements, and a publisher that reconnects and retries on failure.",
    },
    {
      name: "Spring Cloud Gateway",
      purpose:
        "The single API entry point. It routes by service prefix through Eureka, validates JWTs, balances load, and centralises CORS, so clients only ever see one base URL.",
    },
    {
      name: "Netflix Eureka",
      purpose:
        "Service discovery. Python services register themselves, send heartbeats, and re-register automatically if evicted, so no address is ever hard-coded.",
    },
    {
      name: "Spring Cloud Config",
      purpose:
        "Externalised configuration served from GitHub. Services fetch it at startup with retry and backoff, and fall back to environment variables if it's unreachable.",
    },
    {
      name: "Traefik",
      purpose:
        "The public edge: TLS termination with automatic Let's Encrypt certificates and HTTP-to-HTTPS redirects, making it the only publicly exposed entry point.",
    },
    {
      name: "Docker & Docker Compose",
      purpose:
        "One image per service, published to Docker Hub under the commit SHA and run with strict CPU and memory limits on EC2. The identity image bundles Tesseract and the French language pack.",
    },
    {
      name: "GitHub Actions",
      purpose:
        "Per-service CI/CD. It builds and pushes the image, opens a dev-to-main pull request automatically, then triggers a deploy workflow that updates only the affected service over SSH.",
    },
    {
      name: "Gunicorn",
      purpose:
        "Production server for the Django services. Preload mode plus master-process gating make background workers (Eureka, RabbitMQ consumers) start once, which fixed a startup deadlock and runaway memory use.",
    },
    {
      name: "MySQL on AWS RDS",
      purpose:
        "Database per service: six isolated schemas on one RDS instance, each with a dedicated user whose grants stop at its own schema. Logical isolation today, physical separation planned.",
    },
    {
      name: "AWS EC2",
      purpose:
        "Two-instance topology that keeps infrastructure (gateway, registry, config, broker) apart from business services, locked down with least-privilege security groups.",
    },
    {
      name: "React 19 + Vite",
      purpose:
        "The web client, which talks only to the gateway through Axios, with JWT interceptors and protected routes.",
    },
  ],

    image:
      "/images/projects/dreamhouse237/dreamhouse237.png",

    featured: true,

    selectedWork: true,


    /*
     * =====================================================
     * CASE STUDY
     * =====================================================
     */

    overview:
      "DreamHouse237 is a team-built real-estate platform created to explore how a property-focused application could be designed as a structured, distributed software system. Rather than treating the platform as one large application, the project was approached through separate responsibilities, service boundaries, APIs, communication mechanisms, and infrastructure. My contribution focused particularly on establishing the system architecture and implementing the User Service and Identification Service.",


    problem:
      "Real-estate platforms bring together several different responsibilities: users and their identities, property information, discovery, transactions, and the services that support these workflows. When these concerns are tightly coupled inside one application, changes in one area can easily affect unrelated parts of the system. The project therefore focused on exploring how these responsibilities could be separated into coherent services while still functioning as one platform.",


    whyIChoseIt:
      "I chose this project because it gave me the opportunity to move beyond building isolated CRUD applications and think about software as a system of interacting parts. The scale of the problem required decisions about service boundaries, communication, data ownership, authentication and identification, infrastructure, and API design. It also gave me the opportunity to work as part of a team while taking responsibility for important architectural decisions and core services.",


    research:
      "The research phase began by identifying the main actors, responsibilities, and workflows within a real-estate platform. We examined the relationships between users, properties, and the different operations the platform would need to support. These requirements were then translated into technical responsibilities and potential service boundaries. A major part of the reasoning was determining which responsibilities should remain independent and how those services could communicate without becoming tightly coupled.",


    designProcess:
      "The system was designed incrementally. We first broke the platform into its major domains and identified the responsibilities that belonged to each part of the system. From there, I contributed to establishing the overall architecture and defining how the services would interact. I was responsible for the User Service and Identification Service, which required thinking carefully about user-related data, identity, authentication flows, API boundaries, and communication with the rest of the platform. The team then implemented the different services and progressively connected them through the defined architecture.",


    /*
     * =====================================================
     * ARCHITECTURE
     * =====================================================
     *
     * `addGridUnder` controls which other architecture
     * sections become 3-grid cards underneath a section.
     *
     * The referenced sections do NOT need another flag.
     *
     * The main architecture section itself remains in the
     * normal alternating image/text layout.
     * =====================================================
     */

    architecture: [

      {
        title: "System Architecture",

        description: [

          "The architecture of DreamHouse237 is based on a distributed microservices approach, designed to ensure modularity, resilience, scalability, and technological independence among the different system components. The Web React and Mobile Flutter clients communicate exclusively with the API Gateway over HTTPS, with no direct access to the internal microservices.",

          "The infrastructure is organized into three main functional layers:",

        ],

        image:
          "/images/projects/dreamhouse237/architecture.png",

        imageAlt:
          "DreamHouse237 system architecture diagram",

        addGridUnder: [
          "Gateway Layer",
          "Business Services Layer",
          "Infrastructure Layer",
        ],

      },


      {
        title: "Gateway Layer",

        description:
          "Traefik v3.3 handles TLS/HTTPS termination through Let’s Encrypt as well as HTTP→HTTPS redirection. All requests are then forwarded to the API Gateway (Spring Cloud Gateway), which is responsible for dynamic routing through Eureka, Round-Robin load balancing, JWT validation, and centralized CORS management.",

      },


      {
        title: "Infrastructure Layer",

        description:
          "This layer contains the cross-cutting services required to support the distributed system: Config Service for centralized configuration, Registry Service (Netflix Eureka) for service discovery, RabbitMQ for asynchronous communication between services, and AWS RDS MySQL for hosting isolated databases.",

      },



      {
        title: "Business Services Layer",

        description:
          "Six independent microservices implement the platform’s core functionalities: Auth Service (JWT-based authentication), User Service (user management), Publication Service (real-estate listings), Commentary Service (comments and social interactions), Payment Service (mobile money payments), and Identity Verification Service (CNI verification using OCR).",

      },


      {
        title: "User Service",

        description: [
          "I designed and built the User Service, the system of record for every person on DreamHouse237: property owners, agencies, clients, and admins. It models four distinct roles on a single identity core using Django multi-table inheritance. The rest of the platform reaches that data through explicit REST and event contracts, never through its database or internals. Records can be looked up by internal ID or by the auth service's UUID, so other services never need to know how users are stored here.",
          "Registration is role-aware and least-privilege by default. Owners and agencies start in a pending state, with their intended role preserved, and are promoted only once identity is confirmed. Email verification uses single-use rotating tokens, and the resend flow never reveals whether an address is registered. Profile updates are whitelisted per role, and a password change requires the old password.",
          "The service is event-driven. It hands new accounts to the auth service over RabbitMQ and links the returned auth identifier back to the user. It also consumes identity results, upgrading roles in atomic transactions with a processed-event ledger for deduplication. The publisher holds a thread-safe persistent connection with automatic reconnection, retries, and durable messages. On the ops side, I diagnosed and fixed a startup deadlock caused by background workers racing Django's app loading, using Gunicorn preloading and master-process gating. The service self-registers with Eureka, pulls its config from Spring Cloud Config, and ships through a CI/CD pipeline that builds a Docker image and triggers deployment. That makes it a Python service running natively inside a Spring ecosystem.",
        ]
      },


      {
        title: "Identification Service",

        description: [
          "I built the Identification Service as a standalone bounded context, so identity verification never leaks into the rest of the platform. It knows users only by email, with no shared database and no foreign keys into the User Service. It reports its outcome as an event, so each service can evolve, deploy, and scale independently.",
          "At its core is an OCR pipeline for Cameroonian national ID cards. Tesseract (French and English) reads the front and back, and a parser extracts the holder's surname, given name, and card number. When the number is extracted, the record is verified automatically and the User Service is notified over RabbitMQ. When it isn't, the case drops into an admin review queue instead of failing. The review flow is a strict state machine (pending → verified or rejected). A decision can't be made twice, approvals require all three identity fields, and rejections require a reason. Submissions are idempotent, and raw OCR output is retained for auditing.",
          "The service is containerised with Tesseract and the French language pack baked into the image. It registers itself with Eureka, loads config from Spring Cloud Config, and deploys through the same automated pipeline as the rest of the platform.",
        
        ]

      },


      {
        title: "Communication",

        description:
          "Services talk in two deliberate ways. Synchronous REST goes through a single gateway layer, with Traefik handling TLS and Spring Cloud Gateway handling routing and load balancing. Services are located through Eureka rather than hard-coded addresses, so a caller never needs to know where a service runs. Anything that doesn't need an immediate answer travels over RabbitMQ instead: account creation, identity results, payment confirmations, and clean-up when a listing is deleted. Consumers acknowledge messages manually and record processed event IDs, so a redelivered message can't be applied twice. The User Service never waits on the Identification Service. It reacts when the verification result arrives. New capabilities can be added as new services with their own contracts, without modifying existing ones.",

        image:
          "/images/projects/dreamhouse237/communication.png",

        imageAlt:
          "DreamHouse237 communication diagram",

      },


      {
        title: "Database Architecture",

        description:
          "Every service owns its data. Following the database-per-service pattern, each one has its own MySQL schema on AWS RDS and a dedicated database user whose grants stop at that schema, so no service can read another's tables, even through a bug. Services refer to each other by identifier (email, auth UUID), never by foreign key. Each model follows its domain. The User Service uses multi-table inheritance to give owners, agencies, clients, and admins one shared identity core plus role-specific fields. The Identification Service models the verification lifecycle (pending → verified or rejected) with UUID keys and retained raw OCR output for auditing. The six schemas share one RDS instance, a deliberate cost-versus-complexity trade-off. Logical isolation is enforced today, with physical separation planned for a production-grade deployment. Development runs on lightweight local databases.",

      },


      {
        title: "API Design",

        description:
          "The platform was built API-first: contracts came before code. The team defined endpoints, request and response shapes, error codes, and RabbitMQ message formats in shared .rest files on GitHub. That let services written in four different stacks (Django, Spring Boot, NestJS, Flask) be built in parallel and still integrate cleanly. Clients see one base URL, and the gateway routes by service prefix. In the User Service, serializers are the contract boundary. Registration is validated per role, and each role has a whitelist of editable fields. Listings are paginated with a capped page size. Lookups accept either an internal ID or the auth service's UUID, so other services can reference a user by the identifier they already hold. The Identification Service exposes a deliberately small surface (submit a card, check status, admin review), so nothing about its OCR internals leaks to its consumers.",

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
        "Cameroonian ID cards are visually busy: multicoloured backgrounds, security patterns, and text printed over texture. They weren't designed with OCR in mind, and Tesseract's output on them was noisy enough that reading every printed field reliably wasn't realistic.",
      solution:
        "I stopped trying to read the whole card. I narrowed extraction to three fields that are both essential and legible (surname, given name, and ID number) and parsed them with targeted patterns for the card's French and English labels. Reading less, but more dependably, gave me a better foundation than reading everything unreliably.",
    },
    {
      challenge:
        "Users photograph their cards on phones, so uploads arrive blurry, glared, skewed, or poorly lit. Sometimes OCR returned nothing usable, and a flow that depended on it alone would have locked out legitimate users.",
      solution:
        "I made OCR an accelerator, not a gatekeeper. If the ID number is extracted, the record is verified automatically. If not, it drops into an admin queue where a reviewer sees the card images next to the raw OCR text and either enters the three fields or rejects with a reason. If Tesseract itself is unavailable, the service falls back to the same manual path instead of failing.",
    },
    {
      challenge:
        "Deciding how far to trust OCR. A recognised number isn't proof of a valid identity, but reviewing every submission by hand wouldn't scale either.",
      solution:
        "I set an explicit boundary: automation handles only the clear-cut case (a successfully extracted card number), and everything else goes to a human. The review flow is a strict state machine (pending → verified or rejected), so a decision can't be applied twice. Raw OCR text is stored for every submission as an audit trail and a way to improve the parser.",
    },
    {
      challenge:
        "The User, Auth, and Identification services each own part of a user, with no shared database or distributed transaction. They had to agree on state through messages that can arrive late, twice, or out of order.",
      solution:
        "I designed the handshake as events. The User Service publishes an account-created event, the Auth Service replies with an acknowledgement carrying its own identifier, and the User Service links it back, updating only records that aren't linked yet so a replay is harmless. Identity results arrive as a separate event and promote the user from a pending role. Consumers acknowledge manually, process each event in a transaction, and keep a processed-event ledger against redelivery.",
    },
    
  ],

    /*
     * =====================================================
     * RESULTS
     * =====================================================
     */

    results:
      "The project established a foundation for a modular real-estate platform and gave the team practical experience designing and integrating distributed services. My main contributions were establishing the system architecture and implementing the User Service and Identification Service. Beyond the individual features, the project strengthened my understanding of how service boundaries, APIs, communication, configuration, infrastructure, and data responsibilities fit together to form a larger software system.",


    /*
     * =====================================================
     * LEARNING
     * =====================================================
     */

    whatILearned: [
      "This project taught me that architecture is mostly a series of decisions about ownership: who holds which data, what one service is allowed to know about another, and what happens when a message arrives late, twice, or not at all. Building the User and Identification Services showed me how small domains become foundations once the rest of the platform depends on them.",
      "",
      "The OCR work taught me to design for the input I'll actually get, not the input I'd like. Cameroonian ID cards and phone photos defeated full-card reading, so I narrowed the scope, added human review, and let automation handle only the clear cases. Reliability came from knowing where the automation should stop.",
      "",
      "It also taught me the difference between a system that works in a demo and one that is ready for production. Access control, testing, and secrets handling are architecture too, and they are the next things I would strengthen.",
    ],

    futureImprovements: [
      "Enforce role-based access on admin and identity-review endpoints inside the services themselves, as defence in depth behind the gateway's JWT validation.",
      "Make event delivery fully reliable: a transactional outbox, dead-letter queues, and an event ID on every message so consumers can deduplicate end to end.",
      "Improve OCR accuracy with image preprocessing, evaluate it on a labelled set of real Cameroonian ID cards, and base auto-approval on confidence scores rather than a single match.",
      "Rebuild the automated test suite (parsers, registration, message contracts) and make it a hard gate in the CI/CD pipeline before deployment.",
      "Add distributed tracing and centralised monitoring (OpenTelemetry, Prometheus, Grafana) with correlation IDs across REST and RabbitMQ, which would also feed real execution-trace data into my thesis research.",
      "Add timeouts, retries, and circuit breakers between services, and move from single-host Compose to Kubernetes for autoscaling and self-healing.",
      "Split the six schemas on one RDS instance into physically separate databases per service.",
      "Move all credentials into a managed secrets store with rotation.",
      "Push verification results and notifications to clients in real time with WebSockets instead of relying on polling.",
    ],

    /*
     * =====================================================
     * SCREENSHOTS
     * =====================================================
     */

    screenshots: [

      {
        src:
          "/images/projects/dreamhouse237/screenshot-01.png",

        alt:
          "DreamHouse237 interface",

        caption:
          "Login",

      },

      {
        src:
          "/images/projects/dreamhouse237/screenshot-02.png",

        alt:
          "DreamHouse237 property interface",

        caption:
          "Property publishing",

      },

      {
        src:
          "/images/projects/dreamhouse237/screenshot-03.png",

        alt:
          "DreamHouse237 dashboard",

        caption:
          "Property discovery and presentation.",

      },

      {
        src:
          "/images/projects/dreamhouse237/screenshot-03.png",

        alt:
          "DreamHouse237 dashboard",

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
        "https://dreamhouse237.onrender.com/",

    },


    /*
     * =====================================================
     * REFLECTION
     * =====================================================
     */

    reflection: [
      "If I started DreamHouse237 again, I would write down the cross-cutting conventions before any service code: one format and identifier scheme for every RabbitMQ event, one naming and registration convention for Eureka, and a shared standard for errors and configuration. Several of the problems we hit, like a service the gateway couldn't resolve, traced back to a convention nobody had written down yet, not to complicated code.",
      "I would also treat testing and observability as part of the first sprint, not a later phase. When a single sign-up crosses three services and a message broker, being able to trace a request and trust an automated test is what makes change safe.",
      "The project was also valuable because its constraints were real. A student budget meant six schemas on one database instance, small EC2 containers, and an OCR feature that had to degrade gracefully. Those limits forced me to decide what to build now, what to defer, and to be explicit about the difference.",
    ],
  },

];