export const RESUME_DATA = {
  name: "Sérgio Barriviera Miguel",
  title: "Chief Troubleshooting Officer (CTO) & Software Architect",
  location: "Porto, Portugal",
  email: "sergio@smiguel.net",
  linkedin: "https://www.linkedin.com/in/smiguelnet",
  github: "https://github.com/smiguelnet",
  resumePdf: "/assets/pdf/sergiomiguel-resume.pdf",
  website: "www.smiguel.net",
  photo: "assets/images/photo.jpg", // Placeholder - user can update if path is different
  about: "IT professional with 20+ years of hands-on experience. I specialize in Accelerating Software Development by bridging the gap between deep architectural foundations (DDD) and the future of engineering: AI-driven Agentic Coding and Spec-Driven Development (SDD). An eternal learner who builds robust, scalable systems that evolve with the tech landscape.",
  quote: {
    text: "Without right requirements and a good design, programming is the art of adding bugs to an empty text file.",
    author: "Louis Srygley"
  },
  interests: [
    "AI-Driven Agentic Coding & Automation",
    "Spec-Driven Development (SDD)",
    "Domain-Driven Design (DDD)",
    "Cloud-Native & Serverless Architectures",
    "Blockchain and Decentralized Applications",
    "Machine Learning & Robotic Process Automation"
  ],
  research: {
    title: "Accelerating Software Development with AI",
    description: "A practical framework to increase delivery speed while preserving architecture, quality, and scalability.",
    phases: [
      {
        name: "Build an AI-Ready Foundation",
        details: "Acceleration starts with clear architecture and business alignment. By combining Domain-Driven Design, modern architectural patterns, and intelligent starter templates, teams avoid reinventing the wheel. AI supports this foundation by generating architecture drafts, validating design decisions, and identifying risks early before they become costly."
      },
      {
        name: "Augment the Development Lifecycle",
        details: "AI enhances every phase of delivery - from requirements and design to coding, testing, and deployment. Specifications can evolve into structured artifacts, code scaffolds, and automated tests. This shifts development from manual effort to AI-assisted engineering, increasing speed while preserving quality and architectural integrity."
      },
      {
        name: "Reuse, Optimize, and Scale",
        details: "Sustainable acceleration depends on reusable assets and continuous feedback. APIs, microservices, and shared components evolve as strategic building blocks. With DevOps automation and AI-driven insights, teams reduce redundancy, prevent recurring errors, and achieve predictable, scalable software delivery."
      }
    ]
  },
  achievements: [
    { label: "Production Systems Delivered", value: 50, suffix: "+", goal: 60 },
    { label: "Enterprise Systems Re-Architected", value: 10, suffix: "+", goal: 15 },
    { label: "Legacy Systems Modernized", value: 15, suffix: "+", goal: 20 },
    { label: "Features Delivered to Production", value: 200, suffix: "+", goal: 250 }
  ],
  stats: [
    { label: "Years of Experience", value: "20+" },
    { label: "Bugs Squashed", value: "1.2M (Estimated)" },
    { label: "Coffees Consumed", value: "∞" },
    { label: "Cloud Architectures", value: "Dozens" }
  ],
  projects: [
    {
      title: "BrandConnect",
      subtitle: "Mobile White Label Platform",
      description: "Empowering businesses with customizable mobile engagement. A hybrid React Native approach with a serverless event-driven backend on AWS.",
      note: "Designed for rapid white-label onboarding with reusable mobile modules and event-driven backend workflows.",
      links: [],
      tech: ["React Native", "Serverless", "DynamoDB", "Kinesis", "SageMaker"]
    },
    {
      title: "Engage Platform",
      subtitle: "Gamification-as-a-Service",
      description: "Connects smaller tasks to larger goals with Gamification. A comprehensive API offering endpoints for user participation and motivation.",
      note: "API-first platform focused on extensible gamification mechanics and high engagement loops for product teams.",
      links: [
        { label: "Platform", url: "https://github.com/smiguelnet/setia-engage" },
        { label: "SDK", url: "https://github.com/smiguelnet/engage-api-java-sdk" }
      ],
      tech: ["Java", "API Design", "Gamification"]
    },
    {
      title: "Android Starter App",
      subtitle: "Architecture Accelerator",
      description: "Comprehensive Android Starter Kit offering data synchronization (Server-First or Local-First) and pre-configured common features.",
      note: "Built to accelerate delivery with tested architectural patterns and ready-to-use cross-cutting capabilities.",
      links: [
        { label: "Full Article", url: "https://smiguel.net/android-architecture.html" }
      ],
      tech: ["Android", "Reactive Programming", "Event-Driven"]
    },
    {
      title: "DevOps Lab",
      subtitle: "CI/CD Showcase",
      description: "A local environment setup and demo project showcasing comprehensive CI/CD implementation with Prometheus, Splunk, and Grafana monitoring.",
      note: "Demonstrates production-like observability and delivery pipelines for faster feedback and safer releases.",
      links: [
        { label: "View Lab", url: "https://github.com/smiguelnet/engage-ci-cd-setup" }
      ],
      tech: ["CI/CD", "Prometheus", "Grafana", "Monitoring"]
    }
  ],
  experience: [
    {
      company: "Everup",
      role: "CTO, Hands-On Software Architect",
      period: "2020 – Current",
      location: "London, United Kingdom",
      description: "Leading architecture and product engineering for a prize-linked savings platform in a regulated fintech context. Responsible for platform strategy, delivery acceleration, and technical leadership across distributed teams.",
      highlights: [
        "Designed and evolved a resilient, event-driven architecture for financial products.",
        "Coordinated engineering execution across distributed teams with strong delivery discipline.",
        "Supported platform growth under regulatory and operational constraints."
      ],
      tech: ["React Native", "AWS", "Serverless", "Event-Driven Architecture"]
    },
    {
      company: "Animoca Brands",
      role: "Blockchain Engineer",
      period: "2019 – 2020",
      location: "Hong Kong",
      description: "Built and maintained blockchain solutions for digital game assets and tokenized ecosystems, with a focus on secure smart contract engineering and NFT standards.",
      highlights: [
        "Implemented and integrated smart contracts for digital asset ownership.",
        "Worked with ERC-20, ERC-721, and ERC-1155 standards in production workflows.",
        "Supported secure asset lifecycle management for gaming products."
      ],
      tech: ["Solidity", "Truffle", "Hardhat", "Ethereum"]
    },
    {
      company: "SingularCK",
      role: "CTO, Hands-On Software Architect",
      period: "2018 – 2019",
      location: "Sao Paulo, Brazil",
      description: "Defined and led the architecture of a cloud-native digital collectibles marketplace, aligning product growth with scalable engineering foundations.",
      highlights: [
        "Designed a modern cloud-native architecture for marketplace operations.",
        "Guided technical direction across product and engineering teams.",
        "Delivered foundations for digital asset and NFT marketplace capabilities."
      ],
      tech: ["Blockchain", "NFTs", "Cloud-Native", "Team Leadership"]
    },
    {
      company: "Setia Tecnologia",
      role: "Software Architect & Full-stack Developer",
      period: "2008 – 2018",
      location: "Sao Paulo, Brazil",
      description: "Delivered enterprise solutions across banking, payments, and digital channels, covering architecture, integration, and full-stack implementation.",
      highlights: [
        "Built internet banking and payment solutions for enterprise clients.",
        "Integrated modern applications with legacy and mainframe environments.",
        "Led architecture and implementation across web, backend, and mobile initiatives."
      ],
      tech: ["Java", "WebSphere", "Mainframe Integration", "Android", "Docker"]
    },
    {
      company: "Safra National Bank",
      role: "Senior Software Engineer",
      period: "August 2, 2008 – December 12, 2008",
      location: "Sao Paulo, Brazil",
      description: "Cared for and evolved Safra Home Broker, the bank's online stock trading platform.",
      highlights: [
        "Maintained and improved critical online trading workflows.",
        "Supported platform reliability in a time-sensitive financial environment."
      ],
      tech: ["Online Trading", "Banking Systems", "Java", "Web Applications"]
    },
    {
      company: "Compugraf Telecom",
      role: "System Analyst and Software Development Team Leader",
      period: "August 30, 2001 – July 31, 2008",
      location: "Sao Paulo, Brazil",
      description: "Developed CRM software integrated with Telco and CTI solutions for enterprise clients.",
      highlights: [
        "Delivered CRM and telco solutions for Carrefour, Citroen, Peugeot, Axial, Telefonica, and Casas Bahia.",
        "Integrated Alcatel, Avaya, and Aspect systems into customer service workflows.",
        "Connected enterprise platforms with CRMs such as Siebel and Clarify."
      ],
      tech: ["CRM", "CTI", "Alcatel", "Avaya", "Aspect", "Siebel", "Clarify"]
    },
    {
      company: "Sebrae",
      role: "System Analyst",
      period: "October 2, 2000 – August 27, 2001",
      location: "Sao Paulo, Brazil",
      description: "Built a financial product simulation tool focused on loans and investment scenarios.",
      highlights: [
        "Implemented calculation and simulation modules for financial planning use cases.",
        "Supported decision-making with structured loan and investment comparisons."
      ],
      tech: ["Financial Systems", "Simulation", "System Analysis"]
    },
    {
      company: "3D Brasil Advertising",
      role: "Designer, WebDesigner and Developer",
      period: "March 2, 1998 – September 29, 2000",
      location: "Sao Paulo, Brazil",
      description: "Created brands, logos, websites, and e-commerce platforms for client campaigns.",
      highlights: [
        "Designed and implemented digital experiences from brand identity to web delivery.",
        "Worked with CGI, Perl, and ASP in early web application stacks."
      ],
      tech: ["Brand Design", "Web Design", "E-commerce", "CGI", "Perl", "ASP"]
    }
  ],
  skills: {
    languages: ["Java (1.3 to 11)", "NodeJS", "TypeScript", "Solidity", "Python", "C++"],
    frontend: ["React", "React Native", "AngularJS", "JQuery"],
    cloud: ["AWS (ECS, SQS, Lambda, etc.)", "Heroku", "Docker", "Kubernetes"],
    databases: ["SQL Server", "Postgres", "MongoDB", "DynamoDB", "Neo4j"],
    special: ["Blockchain", "Fintech", "Gamification", "RPA", "Machine Learning"]
  },
  certifications: [
    "Oracle Certified Master, Java EE 5 Enterprise Architect (OCMJEA)",
    "Oracle Certified Master, Java EE 6 Enterprise Architect (OCMJEA)",
    "Oracle Certified Professional, Java EE 5 Business Component Developer",
    "Sun Certified Web Component Developer for the Java Platform, EE 5",
    "Sun Certified Programmer for the Java Platform, SE 6",
    "Oracle Certified Associate, Java SE 5/SE 6",
    "Certified Scrum Master (CSM)",
    "IBM Certified Solution Designer",
    "AWS Certified Solutions Architect Associate",
    "Automation Anywhere Certified Advanced RPA Professional",
    "Member of IEEE"
  ],
  education: [
    {
      degree: "Master's degree, Computer Software Engineering",
      institution: "Instituto de Pesquisas Tecnológicas - IPT (USP)",
      period: "2012 – 2016",
      location: "Sao Paulo, Brazil"
    },
    {
      degree: "Postgraduate Education, Software Engineering",
      institution: "Instituto Tecnológico de Aeronáutica - ITA",
      period: "2008 – 2010",
      location: "Sao Paulo, Brazil"
    },
    {
      degree: "Specialization, Project Management",
      institution: "Fundação Getulio Vargas - FGV",
      period: "2006 – 2007",
      location: "Sao Paulo, Brazil"
    },
    {
      degree: "Bachelor's degree, Social Communication (Advertising & Publicity)",
      institution: "Faculdades Oswaldo Cruz",
      period: "1997 – 2001",
      location: "Sao Paulo, Brazil"
    }
  ]
};
