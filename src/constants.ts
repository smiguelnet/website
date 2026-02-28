export const RESUME_DATA = {
  name: "Sérgio Barriviera Miguel",
  title: "Chief Troubleshooting Officer (CTO) & Software Architect",
  location: "Porto, Portugal",
  email: "sergio@smiguel.net",
  linkedin: "https://www.linkedin.com/in/smiguelnet",
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
      links: [],
      tech: ["React Native", "Serverless", "DynamoDB", "Kinesis", "SageMaker"]
    },
    {
      title: "Engage Platform",
      subtitle: "Gamification-as-a-Service",
      description: "Connects smaller tasks to larger goals with Gamification. A comprehensive API offering endpoints for user participation and motivation.",
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
      links: [
        { label: "Full Article", url: "https://smiguel.net/android-architecture.html" }
      ],
      tech: ["Android", "Reactive Programming", "Event-Driven"]
    },
    {
      title: "DevOps Lab",
      subtitle: "CI/CD Showcase",
      description: "A local environment setup and demo project showcasing comprehensive CI/CD implementation with Prometheus, Splunk, and Grafana monitoring.",
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
      description: "Designing a prize-linked savings platform. Gamifying finance because saving money should be as addictive as Candy Crush, but better for your bank account. Managed distributed teams and got FCA approval (which is harder than it sounds).",
      tech: ["React Native", "AWS", "Serverless", "Event-Driven Architecture"]
    },
    {
      company: "Animoca Brands",
      role: "Blockchain Engineer",
      period: "2019 – 2020",
      description: "Managing digital game assets with smart contracts. Making sure your digital sword is actually yours and not just a bunch of pixels someone else can delete. ERC-20, 721, 1155 expert.",
      tech: ["Solidity", "Truffle", "Hardhat", "Ethereum"]
    },
    {
      company: "SingularCK",
      role: "CTO, Hands-On Software Architect",
      period: "2018 – 2019",
      description: "Created a cloud-native architecture for a digital collectibles marketplace. Basically, I was into NFTs before they were cool (and before they were uncool, and cool again).",
      tech: ["Blockchain", "NFTs", "Cloud-Native", "Team Leadership"]
    },
    {
      company: "Setia Tecnologia",
      role: "Software Architect & Full-stack Developer",
      period: "2008 – 2018",
      description: "A decade of building everything from payment gateways to internet banking. If it involves moving money or data securely, I've probably built a version of it.",
      tech: ["Java", "WebSphere", "Mainframe Integration", "Android", "Docker"]
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
