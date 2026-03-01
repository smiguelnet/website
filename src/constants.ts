export const RESUME_DATA = {
  name: 'Sérgio Barriviera Miguel',
  title: 'Chief Troubleshooting Officer (CTO) & Software Architect',
  location: 'Porto, Portugal',
  email: 'sergio@smiguel.net',
  linkedin: 'https://www.linkedin.com/in/smiguelnet',
  github: 'https://github.com/smiguelnet',
  resumePdf: '/assets/pdf/sergiomiguel-resume.pdf',
  website: 'www.smiguel.net',
  photo: 'assets/images/photo.jpg', // Placeholder - user can update if path is different
  about:
    'Software architect and researcher with 20+ years of experience designing and evolving complex systems. My work focuses on accelerating software engineering through AI, specification-driven development, and agentic systems — bridging classical architectural rigor with the next generation of intelligent development. I build scalable, resilient systems designed to continuously evolve with technology.',
  quote: {
    text: 'Without right requirements and a good design, programming is the art of adding bugs to an empty text file.',
    author: 'Louis Srygley',
  },
  interests: [
    'AI-Driven Agentic Engineering & Automation',
    'Spec-Driven Development (SDD)',
    'Cloud-Native & Serverless Architectures',
    'Blockchain & Decentralized Systems',
    'Machine Learning & Intelligent Automation',
    'Gamification in Finance and Banking',
  ],
  research: {
    title: 'From Process-Driven Acceleration to Agentic, Spec-Driven Engineering',
    description:
      'A practical framework that shifts software development from code-centric execution to specification-centric engineering. By orchestrating AI agents through high-quality specifications, it enables predictable software delivery and rapid business experimentation. As specification maturity increases, manual coding effort decreases — preserving architectural integrity while accelerating safe experimentation at scale with reduced delivery risk.',
    phases: [
      {
        name: 'Design High-Quality Specifications',
        details:
          'Acceleration begins with specification maturity. Instead of concentrating effort on manual coding, the focus shifts to precise domain modeling, explicit architectural boundaries, structured non-functional requirements, and deterministic acceptance criteria. When 70-80% of engineering effort is invested in specification design, AI agents operate with clarity, consistency, and reduced ambiguity.',
      },
      {
        name: 'Orchestrate Agentic Execution',
        details:
          'With well-defined specifications, AI agents become structured execution engines. They generate architectural scaffolds, consistent implementations, automated test suites, and documentation with minimal iterative prompting. Human involvement shifts from manual coding to validation, architectural oversight, and strategic refinement, restoring engineering rigor to AI-assisted development.',
      },
      {
        name: 'Validate, Govern, and Evolve',
        details:
          'Agentic systems require structured governance. Automated validation pipelines ensure generated artifacts remain aligned with specifications, architectural constraints, and non-functional requirements. Humans act as architectural guardians, reviewing outputs at defined checkpoints while enabling agents to iterate within controlled boundaries. This governance layer preserves quality, prevents architectural drift, and enables safe, continuous system evolution.',
      },
    ],
    expectedResult: {
      title: 'Enable Rapid Experimentation at Scale',
      details:
        'As specification maturity increases, manual coding effort decreases. Organizations gain the ability to prototype multiple strategies, test business variations, and target different customer segments in parallel. Agentic development preserves architectural integrity while dramatically reducing time-to-experiment and delivery risk.',
      formula: 'Controlled autonomy -> Faster experimentation -> Reduced delivery risk',
    },
  },
  homeResearch: {
    title: 'From Process-Driven Acceleration to Agentic, Spec-Driven Engineering',
    description:
      'A high-level view of how specification maturity enables faster, more predictable, and architecturally consistent delivery with AI agents.',
    phases: [
      {
        name: 'Design High-Quality Specifications',
        details:
          'Define clear domains, architecture boundaries, and acceptance criteria to remove ambiguity before execution.',
      },
      {
        name: 'Orchestrate Agentic Execution',
        details:
          'Use specifications to drive scaffolds, implementation, tests, and docs while humans steer validation.',
      },
      {
        name: 'Validate, Govern, and Evolve',
        details:
          'Apply governance checkpoints to keep outputs aligned, prevent drift, and evolve safely.',
      },
    ],
  },
  achievements: [
    {
      label: 'Production Systems Delivered Across Multiple Domains',
      value: 50,
      suffix: '+',
      goal: 60,
    },
    { label: 'Enterprise Architecture Transformations', value: 10, suffix: '+', goal: 15 },
    { label: 'Legacy Platform Modernizations', value: 15, suffix: '+', goal: 20 },
    { label: 'Business Capabilities Engineered', value: 200, suffix: '+', goal: 250 },
  ],
  stats: [
    { label: 'Years of Experience', value: '20+' },
    { label: 'Bugs Squashed', value: '1.2M (Estimated)' },
    { label: 'Coffees Consumed', value: '∞' },
    { label: 'Cloud Architectures', value: 'Dozens' },
  ],
  projects: [
    {
      title: 'BrandConnect',
      subtitle: 'Mobile White Label Platform',
      description:
        'Empowering businesses with customizable mobile engagement. A hybrid React Native approach with a serverless event-driven backend on AWS.',
      note: 'Designed for rapid white-label onboarding with reusable mobile modules and event-driven backend workflows.',
      links: [],
      tech: ['React Native', 'Serverless', 'DynamoDB', 'Kinesis', 'SageMaker'],
    },
    {
      title: 'Engage Platform',
      subtitle: 'Gamification-as-a-Service',
      description:
        'Connects smaller tasks to larger goals with Gamification. A comprehensive API offering endpoints for user participation and motivation.',
      note: 'API-first platform focused on extensible gamification mechanics and high engagement loops for product teams.',
      links: [
        { label: 'Platform', url: 'https://github.com/smiguelnet/setia-engage' },
        { label: 'SDK', url: 'https://github.com/smiguelnet/engage-api-java-sdk' },
      ],
      tech: ['Java', 'API Design', 'Gamification'],
    },
    {
      title: 'Android Starter App',
      subtitle: 'Architecture Accelerator',
      description:
        'Comprehensive Android Starter Kit offering data synchronization (Server-First or Local-First) and pre-configured common features.',
      note: 'Built to accelerate delivery with tested architectural patterns and ready-to-use cross-cutting capabilities.',
      links: [{ label: 'Full Article', url: '/research/android-architecture' }],
      tech: ['Android', 'Reactive Programming', 'Event-Driven'],
    },
    {
      title: 'DevOps Lab',
      subtitle: 'CI/CD Showcase',
      description:
        'A local environment setup and demo project showcasing comprehensive CI/CD implementation with Prometheus, Splunk, and Grafana monitoring.',
      note: 'Demonstrates production-like observability and delivery pipelines for faster feedback and safer releases.',
      links: [{ label: 'View Lab', url: 'https://github.com/smiguelnet/engage-ci-cd-setup' }],
      tech: ['CI/CD', 'Prometheus', 'Grafana', 'Monitoring'],
    },
  ],
  experience: [
    {
      company: 'Everup',
      role: 'Shareholder & CTO, Hands-On Software Architect',
      period: '2020 – Current',
      location: 'London, United Kingdom',
      description:
        'Leading architecture and product engineering for a prize-linked savings platform in a regulated fintech context. Responsible for platform strategy, delivery acceleration, and technical leadership across distributed teams.',
      highlights: [
        'Designed and evolved a resilient, event-driven architecture for financial products.',
        'Coordinated engineering execution across distributed teams with strong delivery discipline.',
        'Supported platform growth under regulatory and operational constraints.',
      ],
      tech: [
        'Cloud-Native',
        'AWS Serverless',
        'Event-Driven Architecture',
        'Payments & Integrations',
        'React Native',
        'Next.js',
      ],
    },
    {
      company: 'Animoca Brands',
      role: 'Senior Blockchain Engineer – MotoGP NFT Platform',
      period: '2019 – 2020',
      location: 'Hong Kong',
      description:
        'Transitioned to Animoca Brands following the acquisition of SingularCK to continue leading the development and scaling of the NinjaStickers platform and MotoGP NFT initiatives within Animoca’s global digital asset ecosystem.',
      highlights: [
        'Led smart contract engineering and production deployment for MotoGP NFT collections.',
        'Implemented ERC-20, ERC-721, and ERC-1155 standards in live production environments.',
        'Ensured secure digital asset lifecycle management and blockchain scalability for licensed collectibles.',
      ],
      tech: ['Blockchain', 'Ethereum', 'Solidity', 'Smart Contracts', 'Truffle', 'Hardhat'],
    },
    {
      company: 'SingularCK',
      role: 'Shareholder & CTO, Hands-On Software Architect',
      period: '2018 – 2019',
      location: 'Sao Paulo, Brazil',
      description:
        'Served as Shareholder and CTO at SingularCK, leading the architecture and delivery of NinjaStickers — a cloud-native NFT marketplace for licensed digital collectibles, including the MotoGP NFT collection.',
      highlights: [
        'Architected and delivered the blockchain infrastructure and marketplace platform for NinjaStickers.',
        'Led smart contract design, cloud-native system architecture, and product engineering strategy.',
        'Played a key technical leadership role during the company’s acquisition by Animoca Brands.',
      ],
      tech: ['Cloud-Native', 'Blockchain', 'Ethereum', 'Stellar', 'NFT Infrastructure'],
    },
    {
      company: 'Setia Tecnologia',
      role: 'Founder & CEO, Hands-On Software Architect',
      period: '2008 – 2018',
      location: 'Sao Paulo, Brazil',
      description:
        'Founded and led a technology consulting company delivering enterprise-grade solutions across banking, payments, and digital platforms. Responsible for business strategy, architecture design, and end-to-end solution delivery.',
      highlights: [
        'Designed and delivered internet banking and payment platforms for enterprise clients.',
        'Led modernization and integration of modern applications with legacy and mainframe environments.',
        'Directed architecture and full-stack implementation across web, backend, and mobile initiatives.',
        'Managed client relationships, technical teams, and strategic technology decisions.',
      ],
      tech: [
        'Java',
        'C++',
        '.NET / C#',
        'IBM WebSphere',
        'IBM MQ (MQSeries)',
        'IBM DB2',
        'Mainframe Integration',
        'Docker',
      ],
    },
    {
      company: 'Safra National Bank',
      role: 'Senior Software Engineer – Home Broker Platform',
      period: 'August 2008 – December 2008',
      location: 'Sao Paulo, Brazil',
      description:
        "Owned and evolved Safra's Home Broker platform — a mission-critical online trading system responsible for real-time stock order processing and execution.",
      highlights: [
        'Led enhancements and stability improvements for a high-availability trading platform.',
        'Ensured reliability and performance in a time-sensitive, market-driven financial environment.',
        'Supported secure order routing and integration with core banking and market infrastructure systems.',
      ],
      tech: [
        'Java',
        'High-Availability Platform',
        'Online Trading Systems',
        'Banking Infrastructure Integration',
      ],
    },
    {
      company: 'Compugraf Telecom',
      role: 'System Analyst → Technical Team Lead',
      period: 'August 30, 2001 – July 31, 2008',
      location: 'Sao Paulo, Brazil',
      description:
        'Progressed from System Analyst to Technical Team Lead, delivering enterprise CRM and CTI-integrated solutions for large-scale telecom and retail clients.',
      highlights: [
        'Led design and delivery of CRM and telco-integrated platforms for Carrefour, Citroen, Peugeot, Axial, Telefonica, and Casas Bahia.',
        'Architected and integrated Alcatel, Avaya, and Aspect CTI systems into high-volume customer service operations.',
        'Connected enterprise platforms with major CRM systems including Siebel and Clarify.',
        'Coordinated development teams and technical decisions across multi-system integration projects.',
      ],
      tech: [
        'CRM Platforms',
        'CTI Integration',
        'Alcatel, Avaya, Aspect',
        'Siebel & Clarify',
        'Enterprise Systems Integration',
      ],
    },
    {
      company: 'Sebrae',
      role: 'System Analyst',
      period: 'October 2000 – August 2001',
      location: 'Sao Paulo, Brazil',
      description:
        'Designed and implemented a financial simulation and investment management platform focused on optimizing loan and investment scenarios based on rates, terms, and market conditions.',
      highlights: [
        'Developed financial modeling and calculation engines to compare loan and investment alternatives.',
        'Implemented optimization logic to identify best-return scenarios under varying financial conditions.',
        'Built a multi-tier architecture using ASP, COM+, C++, and Java for scalable financial processing.',
      ],
      tech: ['Financial Modeling & Simulation', 'ASP', 'COM+', 'C++', 'Java'],
    },
    {
      company: '3D Brasil Advertising',
      role: 'Designer → Web Developer',
      period: 'March 1998 – September 2000',
      location: 'Sao Paulo, Brazil',
      description:
        'Began as a designer during the early expansion of the internet in Brazil, evolving into web development and building some of the company’s first interactive and e-commerce platforms.',
      highlights: [
        'Designed brand identities, digital campaigns, and early web experiences for enterprise clients.',
        'Developed dynamic websites using CGI, Perl, and ASP during the early web application era.',
        'Built one of the company’s first e-commerce platforms, delivering an online commerce solution for Ericsson.',
        'Bridged design and engineering to deliver full-cycle digital products from concept to deployment.',
      ],
      tech: [
        'Brand & Digital Design',
        'Web Development (CGI, Perl, ASP)',
        'Early E-commerce Platforms',
      ],
    },
  ],
  technicalSkills: [
    {
      title: 'Software Architecture',
      items: [
        { name: 'Distributed Systems Design', proficiency: 97 },
        { name: 'Event-Driven Architecture', proficiency: 92 },
        { name: 'Security & Financial Compliance', proficiency: 90 },
        { name: 'Spec-Driven Development (SDD)', proficiency: 45 },
        { name: 'AI-Assisted & Agentic Coding', proficiency: 40 },
      ],
    },
    {
      title: 'Core Languages',
      items: [
        { name: 'Java', proficiency: 96 },
        { name: 'JavaScript', proficiency: 94 },
        { name: 'TypeScript', proficiency: 92 },
        { name: 'Shell Scripting', proficiency: 80 },
        { name: 'Python', proficiency: 60 },
        { name: 'Rust', proficiency: 45 },
        { name: 'Solidity', proficiency: 40 },
        { name: 'C++', proficiency: 35 },
      ],
    },

    {
      title: 'Cloud & DevOps',
      items: [
        { name: 'AWS', proficiency: 95 },
        { name: 'Docker', proficiency: 90 },
        { name: 'Kubernetes', proficiency: 70 },
        { name: 'Heroku', proficiency: 60 },
        { name: 'Ansible', proficiency: 50 },
      ],
    },
    {
      title: 'AI & Agentic Systems',
      items: [
        { name: 'OpenAI Codex', proficiency: 92 },
        { name: 'Claude Code', proficiency: 90 },
        { name: 'Copilot (Orchestra)', proficiency: 90 },
        { name: 'LangChain', proficiency: 70 },
        { name: 'Multi-Agent Orchestration Tools', proficiency: 60 },
      ],
    },
    {
      title: 'Frontend & Mobile',
      items: [
        { name: 'React', proficiency: 92 },
        { name: 'React Native', proficiency: 90 },
        { name: 'Tailwind CSS', proficiency: 88 },
        { name: 'Shadcn/UI', proficiency: 40 },
      ],
    },
    {
      title: 'Special Ops',
      items: [
        { name: 'Fintech & Payment Systems', proficiency: 95 },
        { name: 'Gamification', proficiency: 92 },
        { name: 'OWASP, WAF, PCI-DSS', proficiency: 90 },
        { name: 'Blockchain', proficiency: 80 },
        { name: 'Smart Contracts', proficiency: 70 },
      ],
    },
  ],
  certifications: [
    {
      title: 'Cloud & Architecture',
      items: [
        'AWS Certified Solutions Architect',
        'Oracle Certified Master, Java EE Enterprise Architect (JEE5, JEE6)',
        'IBM Certified Solution Designer',
      ],
    },
    {
      title: 'Platform & Enterprise Java',
      items: [
        'Oracle Certified Professional, Java EE Business Component Developer',
        'Sun Certified Web Component Developer (Java EE)',
        'Sun Certified Programmer (Java SE)',
        'Oracle Certified Associate (Java SE)',
      ],
    },
    {
      title: 'Automation & Process',
      items: [
        'Automation Anywhere Certified Advanced RPA Professional',
        'Certified Scrum Master (CSM)',
      ],
    },
    {
      title: 'Professional Membership',
      items: ['Member of IEEE'],
    },
  ],
  education: [
    {
      degree: "Master's degree, Computer Software Engineering",
      institution: 'Instituto de Pesquisas Tecnológicas - IPT (USP)',
      period: '2012 – 2016',
      location: 'Sao Paulo, Brazil',
    },
    {
      degree: 'Postgraduate Education, Software Engineering',
      institution: 'Instituto Tecnológico de Aeronáutica - ITA',
      period: '2008 – 2010',
      location: 'Sao Paulo, Brazil',
    },
    {
      degree: 'Specialization, Project Management',
      institution: 'Fundação Getulio Vargas - FGV',
      period: '2006 – 2007',
      location: 'Sao Paulo, Brazil',
    },
    {
      degree: "Bachelor's degree, Social Communication",
      institution: 'Faculdades Oswaldo Cruz',
      period: '1997 – 2001',
      location: 'Sao Paulo, Brazil',
    },
  ],
};
