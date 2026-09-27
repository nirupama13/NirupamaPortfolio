/* ==========================================================================
   PORTFOLIO CONTENT
   --------------------------------------------------------------------------
   Every section of the site reads its text from this file.
   To update the portfolio (new job, new project, new skill), edit it here —
   no HTML or CSS changes needed.
   ========================================================================== */

window.PORTFOLIO = {
  profile: {
    name: 'Nirupama Behera',
    initials: 'NB',
    headline: 'Senior Frontend Lead | Angular & React | Frontend Architecture | AI-Assisted Development',
    status: 'Delivery Module Lead @ Mphasis · Bengaluru',
    // Cycled by the typewriter in the hero: const role = "…";
    roles: [
      'Senior Frontend Lead',
      'Frontend Architect',
      'Angular & React Lead',
      'Micro-Frontend Engineer',
      'AI-Assisted Developer',
    ],
    tagline:
      '10+ years building and leading enterprise frontends for BFSI, education, telecom and e-commerce. Angular and React platforms, micro-frontend architecture and secure SSO, now accelerated with Claude, GitHub Copilot, MCP and Spec-Driven Development.',
    location: 'Bengaluru, India',
    email: 'nirupama13@gmail.com',
    linkedin: null, // e.g. 'https://www.linkedin.com/in/…' — the LinkedIn button appears once set
    linkedinLabel: null,
    resume: 'assets/Nirupama_Behera_Resume.pdf',
    resumeFileName: 'Nirupama_Behera_CV.pdf',
    photo: 'assets/photo.jpg', // portrait, 4:5 (880×1100)
  },

  // Terminal boot sequence shown once per browser session
  intro: [
    { cmd: 'whoami' },
    { out: 'nirupama behera — senior frontend lead · angular · react · ai' },
    { cmd: 'npm run build:career' },
    { out: '✔ 3 companies · 5 key projects · 10+ years', tone: 'ok' },
    { out: '✔ compiled with 0 errors', tone: 'ok' },
    { cmd: 'open portfolio' },
  ],

  stats: [
    { value: 10, suffix: '+', label: 'Years experience' },
    { value: 3, suffix: '', label: 'Companies' },
    { value: 5, suffix: '', label: 'Key enterprise projects' },
    { value: 3, suffix: '', label: 'Certifications' },
  ],

  hero: {
    // Floating chips around the code window
    badges: [
      { label: 'React 19', short: 'Re', color: '#149ECA' },
      { label: 'Angular 20', short: 'NG', color: '#DD0031' },
      { label: 'TypeScript', short: 'TS', color: '#3178C6' },
      { label: 'Claude AI', short: 'AI', color: '#D97757' },
      { label: 'Redux', short: 'Rx', color: '#764ABC' },
    ],
    // Rendered as a typed-out TypeScript object
    code: {
      comment: 'nirupama.ts · career v4.0 (AI-assisted)',
      variable: 'nirupama',
      type: 'FrontendLead',
      fields: [
        ['role', 'Senior Frontend Lead'],
        ['experience', '10+ years'],
        ['frameworks', ['React 19', 'Angular 9–20']],
        ['state', ['Redux', 'NgRx', 'RxJS']],
        ['architecture', ['Micro-frontends', 'Vite']],
        ['security', ['Keycloak', 'SSO', 'RBAC']],
        ['ai', ['Claude', 'Copilot', 'MCP', 'SDD']],
        ['basedIn', 'Bengaluru, IN'],
      ],
    },
  },

  // Heading for each section. `highlight` must match words in `title` exactly.
  sections: {
    about: {
      eyebrow: 'about',
      title: 'A decade of crafting enterprise frontends.',
      highlight: 'enterprise frontends.',
    },
    journey: {
      eyebrow: 'career journey',
      title: 'My career, as a release history.',
      highlight: 'release history.',
      lead: 'Three companies, from building client-facing Angular apps to leading frontend architecture and delivery for a multi-tenant BFSI platform.',
    },
    skills: {
      eyebrow: 'skills',
      title: 'The stack I build and lead with.',
      highlight: 'lead with.',
    },
    ai: {
      eyebrow: 'ai-assisted development · 2025 → now',
      title: 'Building with AI as a co-developer.',
      highlight: 'co-developer.',
      lead: 'Specs first, Claude and Copilot in the loop, MCP for design-to-code, and tests and review before anything merges.',
    },
    projects: {
      eyebrow: 'key projects',
      title: 'Selected enterprise work.',
      highlight: 'enterprise work.',
    },
    credentials: {
      eyebrow: 'credentials',
      title: 'Certifications, education & recognition.',
      highlight: 'recognition.',
    },
    contact: {
      eyebrow: 'contact',
      title: "Let's build something together.",
      highlight: 'together.',
      lead: 'Have a frontend architecture challenge, a role, or an Angular / React / AI problem to talk through? My inbox is open.',
    },
  },

  about: {
    facts: [
      { label: 'Currently', value: 'Delivery Module Lead, Mphasis' },
      { label: 'Based in', value: 'Bengaluru, India' },
      { label: 'Domains', value: 'BFSI · Education · Telecom · E-commerce' },
      { label: 'Focus', value: 'Frontend architecture · Micro-frontends · AI-assisted delivery' },
    ],
  },

  // The "how I ship with AI" panel in the AI section
  aiPipeline: [
    { name: 'spec.md', hint: 'spec-driven, design first' },
    { name: 'Claude', hint: 'design, generate, refactor' },
    { name: 'MCP servers', hint: 'design-to-code, APIs in context' },
    { name: 'Jest / Jasmine', hint: 'unit & integration tests' },
    { name: 'Pull request', hint: 'Copilot + peer code review' },
  ],

  // Filter labels for the projects grid, in display order
  projectDomains: {
    banking: 'Banking & Finance',
    insurance: 'Insurance',
    energy: 'Energy',
    telecom: 'Telecom',
  },

  summary:
    'Senior Frontend Lead with 10+ years of experience in frontend development, architecture and technical leadership across BFSI, education, telecom and e-commerce. I build with Angular, React, TypeScript, JavaScript, RxJS, NgRx, Redux, micro-frontends and REST APIs, and I drive technical design, code reviews, mentoring, delivery planning and engineering standards. I currently lead frontend development for RuleIQ, a multi-tenant BFSI platform, with React 19, Vite and Keycloak SSO/RBAC. I work hands-on with Claude AI, GitHub Copilot, MCP and Spec-Driven Development (SDD) for AI-assisted coding, testing and design-to-code workflows.',

  domains: ['BFSI', 'Education', 'Telecom', 'E-commerce'],

  competencies: [
    'Technical Leadership & Frontend Architecture',
    'Angular 9 → 20 · React 19',
    'TypeScript · JavaScript · RxJS',
    'State Management — NgRx, Redux',
    'Micro-Frontends & Modular UI',
    'AI-Assisted Development — Claude, Copilot, MCP, SDD',
    'REST APIs · Keycloak SSO · RBAC',
    'Responsive & Cross-Browser UI',
    'Unit & Integration Testing',
    'Technical Design & Code Reviews',
    'Mentoring · Agile / Scrum',
    'Azure App Service & Functions',
  ],

  skills: [
    { group: 'Frontend', items: ['React 19', 'Angular 9–20', 'TypeScript', 'JavaScript', 'RxJS', 'HTML5', 'CSS3', 'LESS'] },
    { group: 'State', items: ['Redux', 'NgRx/Store'] },
    { group: 'Architecture', items: ['Micro-frontends', 'Vite', 'Modular UI', 'Responsive UI'] },
    { group: 'UI Libraries', items: ['shadcn/ui', 'Material-UI', 'Bootstrap', 'Svelte', 'jQuery'] },
    { group: 'APIs & Security', items: ['REST APIs', 'Keycloak', 'Enterprise SSO', 'RBAC'] },
    { group: 'AI', items: ['Claude AI', 'GitHub Copilot', 'MCP', 'Spec-Driven Development'] },
    { group: 'Testing', items: ['Jest', 'Jasmine', 'Karma', 'Unit & Integration'] },
    { group: 'Tools & Cloud', items: ['Git', 'Bitbucket', 'Jira', 'CI/CD', 'VS Code', 'IntelliJ IDEA', 'Azure', 'SQL · Oracle · MySQL'] },
  ],

  aiPractices: [
    {
      icon: 'spark',
      title: 'Claude AI as a Co-Developer',
      text: 'Using Claude AI to design components, generate and refactor TypeScript, and write tests, keeping a human review on every change.',
    },
    {
      icon: 'plug',
      title: 'MCP & Design-to-Code',
      text: 'Connecting AI assistants to design files, APIs and project context through the Model Context Protocol, turning designs into working UI faster.',
    },
    {
      icon: 'spec',
      title: 'Spec-Driven Development (SDD)',
      text: 'Writing the spec first, then generating and validating implementation and tests against it, so AI output stays aligned to requirements.',
    },
    {
      icon: 'git',
      title: 'GitHub Copilot Practices',
      text: 'Using GitHub Copilot to speed up day-to-day development and promoting effective AI-assisted practices and review standards across the team.',
    },
  ],

  // Oldest first — the career journey reads as a release history
  experience: [
    {
      version: 'v1.0',
      role: 'Technology Lead',
      company: 'Cognizant Technology Solutions, Bengaluru',
      start: 'Jan 2014',
      end: 'Sep 2017',
      bullets: [
        'Developed and maintained client-facing web applications using Angular, JavaScript, HTML5, CSS3, Bootstrap and jQuery.',
        'Implemented frontend features from business and technical requirements while maintaining quality and usability.',
        'Participated in Agile/Scrum ceremonies and worked with cross-functional teams across the development lifecycle.',
        'Supported UI design, debugging, technical documentation and delivery coordination.',
      ],
    },
    {
      version: 'v2.0',
      role: 'Advisory System Analyst',
      company: 'IBM, Bengaluru',
      start: 'Sep 2017',
      end: 'Aug 2021',
      bullets: [
        'Developed and maintained enterprise web applications using Angular, React, TypeScript, JavaScript, HTML5 and CSS3.',
        'Translated UX wireframes and business requirements into responsive, cross-browser-compatible interfaces.',
        'Collaborated with UX, business, QA and development teams to deliver features and resolve technical issues.',
        'Wrote unit tests with Jasmine/Karma and supported defect analysis, compatibility testing, code reviews and onboarding.',
      ],
    },
    {
      version: 'v3.0',
      role: 'Delivery Module Lead',
      company: 'Mphasis, Bengaluru',
      start: 'Aug 2021',
      end: 'Present',
      bullets: [
        'Lead frontend development and delivery: UI analysis, technical design, implementation, code reviews, delivery planning and mentoring.',
        'Lead frontend development for RuleIQ using React 19, TypeScript, Redux, Vite, REST APIs, Keycloak SSO and micro-frontends.',
        'Drive micro-frontend architecture to modularize large applications, isolate builds and enable independent deployment.',
        'Design and integrate RESTful APIs and implement enterprise SSO and RBAC with Keycloak.',
        'Drive code quality through code reviews, unit testing, technical discussions and engineering standards.',
      ],
    },
    {
      version: 'v4.0',
      role: 'AI-Assisted Development',
      company: 'Within the Mphasis role',
      start: '2025',
      end: 'Present',
      milestone: true,
      bullets: [
        'Claude AI, GitHub Copilot, MCP and Spec-Driven Development for AI-assisted coding, testing and design-to-code workflows.',
      ],
    },
  ],

  projects: [
    {
      id: 'ruleiq',
      name: 'RuleIQ',
      client: 'BFSI / Financial Services',
      role: 'Frontend Lead',
      domain: 'banking',
      stack: ['React 19', 'TypeScript', 'Redux', 'Vite', 'Micro-frontends', 'REST APIs', 'Keycloak', 'shadcn/ui'],
      description:
        'Enterprise multi-tenant BFSI platform supporting loan-processing workflows for Bank of America and Wells Fargo. Built role-based dashboards and workflows with React 19, TypeScript, Redux, Vite and micro-frontends, implemented Keycloak SSO/RBAC, and optimized the UI architecture with shadcn/ui, reducing bundle size by approximately 95%.',
    },
    {
      id: 'schneider',
      name: 'Schneider Electric',
      client: 'Energy / Industrial',
      role: 'Frontend Developer',
      domain: 'energy',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Svelte'],
      description:
        'Designed and developed responsive frontend applications with JavaScript, TypeScript, HTML5, CSS3 and Svelte. Handled requirement analysis, bug fixing, code reviews, client delivery and cross-browser/device compatibility testing.',
    },
    {
      id: 'jpmc',
      name: 'JPMorgan Chase & Co.',
      client: 'Banking / Financial Services',
      role: 'Frontend Developer',
      domain: 'banking',
      stack: ['Angular 12', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Jasmine', 'Karma'],
      description:
        'Developed and enhanced enterprise frontend features with Angular 12, TypeScript and JavaScript. Worked with Product Owners and technical specialists, prepared test documentation and implemented unit tests with Jasmine/Karma.',
    },
    {
      id: 'att',
      name: 'Sales Express',
      client: 'AT&T',
      role: 'Frontend Developer',
      domain: 'telecom',
      stack: ['Angular 8', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'jQuery', 'Oracle SQL'],
      description:
        'Developed frontend applications with Angular 8, JavaScript, HTML5, CSS3, Node.js and jQuery. Supported information design, feature development, technical documentation, debugging, defect resolution and delivery.',
    },
    {
      id: 'metlife',
      name: 'MetLife',
      client: 'Insurance / Financial Services',
      role: 'Frontend Developer',
      domain: 'insurance',
      stack: ['AngularJS', 'JavaScript', 'HTML5', 'CSS3'],
      description:
        'Built responsive web applications with AngularJS, working with UX/VD teams to deliver user-focused interfaces. Performed cross-browser compatibility testing and supported defect analysis and resolution.',
    },
  ],

  certifications: [
    { code: 'AGENTIC AI', name: 'GitHub Agentic AI Developer Certification', issuer: 'GitHub' },
    { code: 'AIF-C01', name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services' },
    { code: 'AZ-900', name: 'Microsoft Azure Fundamentals', issuer: 'Microsoft' },
  ],

  education: [
    { degree: 'GNIIT', year: '2010', school: 'NIIT' },
    { degree: 'B.Sc. (IT)', year: '2009', school: 'Kuvempu University' },
    { degree: 'XII Science', year: '2006', school: 'CHSE' },
  ],

  accomplishments: [
    'Pinnacle Award for delivering a critical project with strong execution, quality and timely delivery.',
    'Star of the Month Award at IBM for outstanding performance, delivery excellence and contribution to project success.',
    'DYNAMO Quarterly Awards at Cognizant for outstanding overall performance and consistent delivery.',
    'Reduced RuleIQ bundle size by approximately 95% by re-architecting the UI with shadcn/ui.',
  ],
};
