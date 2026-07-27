/**
 * Central content file for the portfolio.
 *
 * This is the ONLY place you should need to edit to personalize the site
 * with real copy, links, images and dates. Every section pulls its content
 * from here. Items marked "TODO" are placeholders written to match the
 * brief -- replace them with your real details before publishing.
 */

export const siteConfig = {
  name: "Stephanie Onwuagbaizu",
  role: "Backend Software Engineer",
  tagline: "AI Enthusiast",
  description:
    "Building scalable backend systems and intelligent software that solve real-world problems.",
  // The hero subheading is built from these two: the prefix stays fixed, and
  // the phrase after it rotates through the list below. Edit freely -- keep
  // each phrase lowercase and self-contained (with trailing punctuation) so
  // it reads naturally after "...intelligent software that ".
  heroDescriptionPrefix:
    "Building scalable backend systems and intelligent software that ",
  heroRotatingPhrases: [
    "solve real-world problems.",
    "connect people.",
    "scale with confidence.",
    "turn complexity into clarity.",
  ],
  location: "Nigeria",
  availability: "Open to software engineering roles",
  email: "stephanieonwuagbaizu@gmail.com",
  phone: "+234 708 904 9675",
  github: "https://github.com/steph2502",
  linkedin: "https://www.linkedin.com/in/stephanieonwuagbaizu",
  resumeUrl: "/resume.pdf", // TODO: replace public/resume.pdf with your real resume
  portraitSrc: "/images/portrait.png",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export type Project = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  // Only projects with a caseStudy show a "Read Case Study" button/modal.
  caseStudy?: {
    overview: string;
    problem: string;
    solution: string;
    architecture: string;
    features: string[];
    challenges: string;
    lessons: string;
    screenshots: string[];
  };
};

// TODO: swap in real screenshots, real live/github links, and confirm copy.
export const projects: Project[] = [
  {
    slug: "pacepard",
    title: "Pacepard",
    summary:
      "The learning and growth platform for AI-native product teams: team training, AI agent workflows, and structured skill-building with human feedback.",
    image: "/images/projects/pacepard.png",
    tech: ["TypeScript", "REST APIs", "Git"],
    liveUrl: "https://pacepard.com/",
    caseStudy: {
      overview:
        "Pacepard is a learning and growth platform where AI-native product teams train through structured hackathons, product sprints, and quests, backed by AI agent workflows and human feedback.",
      problem:
        "Running hackathons, apprenticeship sprints, and skill-building quests at scale needed dedicated systems for organizing events, managing projects, curating resources, and tracking tasks, all shipped quickly by a small engineering team.",
      solution:
        "As part of a 4-engineer team, built and scaled the hackathon, project, resource, and task modules in TypeScript, delivering the core API functionality that powers how learners join hackathons, work through projects, access resources, and track tasks.",
      architecture:
        "Each of the four modules (hackathon, project, resource, task) owns its own data model and REST API endpoints, consumed by the Pacepard web app, with shared conventions kept consistent across the codebase as multiple engineers shipped into it in parallel.",
      features: [
        "Hackathon module for organizing and running structured hackathons",
        "Project module for product-sprint style tasks and outcomes",
        "Resource module for curating learning material and quests",
        "Task module for tracking progress and deliverables across teams",
      ],
      challenges:
        "Keeping four actively-developed modules consistent across a team of engineers required strong conventions, driven through structured GitHub workflows, pull requests, and code reviews to keep the codebase maintainable as it grew.",
      lessons:
        "Learned how much collaborative discipline, code review, and shared architectural standards matter as much as the code itself when several engineers are shipping into the same modules at once.",
      screenshots: ["/images/projects/pacepard.png"],
    },
  },
  {
    slug: "oohlalaa-fragrances-bot",
    title: "Oohlalaa 🌸 Bot",
    summary:
      "A Telegram ecommerce bot for a perfume store, letting customers browse fragrance collections, manage their cart, and pay securely, all inside chat.",
    image: "/images/projects/oohlalaa-bot.png",
    tech: ["Node.js", "Express", "MongoDB", "Korapay", "Telegram API"],
    liveUrl: "https://t.me/Oohlalaa_bot",
    githubUrl: "https://github.com/steph2502/Oohlalaa-bot",
  },
  {
    slug: "fertile-moms",
    title: "Fertile Moms",
    summary:
      "A marketing website for a gestational surrogacy agency, guiding intended parents and surrogates through every step of the journey.",
    image: "/images/projects/fertile-moms.png",
    tech: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://fertilemoms.vercel.app/",
    githubUrl: "https://github.com/steph2502/fertilemoms_",
  },
  {
    slug: "timetable-optimization-system",
    title: "Timetable Optimization System",
    summary:
      "An intelligent university timetabling system using a hyper-heuristic framework that dynamically selects between ACO and PSO to generate high-quality, conflict-free schedules.",
    image: "/images/projects/timetable-optimizer.png",
    tech: ["Python", "FastAPI", "React", "ACO", "PSO"],
    liveUrl: "https://hyper-heuristic-selector-framework2.vercel.app/",
    githubUrl: "https://github.com/steph2502/hyper-heuristic-selector-framework1",
  },
];

// A flat pool of skills rendered as a single floating cloud of pills, no
// category labels, in the order they should visually appear.
export const skills: string[] = [
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "HTML",
  "CSS",
  "Django",
  "FastAPI",
  "Flask",
  "Node.js",
  "Express.js",
  "Git",
  "GitHub",
  "Postman",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "Redis",
];

export type ExperienceItem = {
  company: string;
  logo: string;
  role: string;
  date: string;
  location?: string;
  tech: string[];
  achievements: string[];
  link?: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "Google Developer Groups",
    logo: "/images/logos/gdg.png",
    role: "Community Manager",
    date: "Oct 2025 to Present",
    location: "Covenant University",
    tech: ["Community Building", "Event Management"],
    achievements: [
      "Organized and executed 5+ flagship community events, including DevFest, TechFest, Demo Day, and workshops, growing event participation and visibility across campus",
      "Strengthened community engagement and collaboration, fostering a more inclusive developer ecosystem and driving measurable growth in active participation within 5 months",
    ],
  },
  {
    company: "Pacepard",
    logo: "/images/logos/pacepard.png",
    role: "Software Engineer",
    date: "Sep 2025 to Present",
    location: "Remote",
    tech: ["TypeScript", "REST APIs", "Git"],
    achievements: [
      "Built and scaled 4 core application modules (hackathon, project, resource, and task) in TypeScript, delivering robust API functionality within a team of 4 engineers",
      "Drove code quality through structured GitHub workflows, pull requests, and code reviews, maintaining consistency across a collaborative codebase",
      "Introduced architectural improvements and best practices, leading to cleaner, more maintainable code across the team",
    ],
    link: "https://pacepard.com/",
  },
  {
    company: "Huawei Technologies",
    logo: "/images/logos/huawei.png",
    role: "Radio Frequency Engineer Intern",
    date: "March 2025 to Aug 2025",
    location: "Lagos Island, Nigeria",
    tech: ["Telecom Networks", "RF Engineering"],
    achievements: [
      "Coordinated remote support and issue resolution across 100+ live telecom sites, ensuring network performance consistently met SLA targets",
      "Led cross-functional collaboration with field engineers and client teams across 3 major carriers (MTN, Airtel, Glo) to troubleshoot and resolve network issues within agreed timelines",
    ],
  },
  {
    company: "Norak Technologies",
    logo: "/images/logos/norak.png",
    role: "Software Development Intern",
    date: "Dec 2024",
    location: "Anthony, Lagos, Nigeria",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    achievements: [
      "Built and documented REST APIs with Node.js and Express.js powering core application features",
      "Modeled and managed application data using Mongoose and MongoDB for efficient querying and structured storage",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Stephanie is an exceptional backend engineer, meticulous about API design and always thinking two steps ahead about scale and reliability.",
    name: "Damola Oladipo",
    position: "Founder",
    company: "Pacepard",
  },
  {
    quote:
      "Reliable, communicative, and genuinely curious about the 'why' behind every technical decision. A pleasure to collaborate with on any backend-heavy project.",
    name: "Harry",
    position: "Software Engineer",
    company: "Pacepard",
  },
  {
    quote:
      "Her grasp of both the theory and practical engineering behind optimization algorithms stood out immediately.",
    name: "Ibidapo Dada",
    position: "Project Supervisor",
    company: "Covenant University",
  },
  {
    quote:
      "Stephanie brings the same rigor to community building as she does to engineering, organized, consistent, and genuinely invested in helping people grow.",
    name: "Testament Onafowokan",
    position: "AI Engineer",
    company: "Google Developer Groups",
  },
];

export const aboutHighlights = [
  {
    title: "Backend Engineering",
    description:
      "Designing and shipping backend applications with Node.js, FastAPI, TypeScript, and MongoDB, built to be reliable, maintainable, and ready to grow with real users.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Applying AI, algorithms, and machine learning tools to build practical, intelligent systems, from smart scheduling to computer vision.",
  },
  {
    title: "Community Development",
    description:
      "I care about growing communities as much as growing systems, mentoring others and creating spaces where people can learn and grow.",
  },
] as const;

export const aboutStory = [
  "I believe in leverage, the idea that a single piece of work can create value far beyond the moment it's finished. That's what drew me to backend engineering and AI, where I build reliable, scalable systems designed to solve meaningful problems.",
  "I learned by building. From Django to FastAPI, every project has sharpened the way I think about architecture, trade-offs, and writing software that lasts.",
  "Beyond engineering, I'm passionate about creating opportunities for others, especially young women in technology. Through my podcast, The Unpopular Opinion, I explore the intersection of technology, culture, faith, and life.",
] as const;

export type EngineeringQuote = {
  quote: string;
  author: string;
  source?: string;
};

// Ideas and principles from books and developers that shape how I build,
// rotated on the "How I Think" section.
export const engineeringQuotes: EngineeringQuote[] = [
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    source: "Refactoring",
  },
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    source: "Structure and Interpretation of Computer Programs",
  },
  {
    quote: "Simplicity is a prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
  },
  {
    quote: "Premature optimization is the root of all evil.",
    author: "Donald Knuth",
  },
  {
    quote: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
  },
  {
    quote:
      "The most important property of a program is whether it accomplishes the intention of its user.",
    author: "C.A.R. Hoare",
  },
];
