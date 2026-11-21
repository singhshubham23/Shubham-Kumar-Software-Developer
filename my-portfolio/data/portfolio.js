// Single source of truth for all portfolio content.
// Edit this file to update the site. Content mirrors the resume.

export const profile = {
  firstName: "Shubham",
  lastName: "Kumar",
  fullName: "Shubham Kumar",
  role: "Software Development Engineer",
  tagline: "Backend-focused full stack engineer",
  availability: "Open to SDE opportunities",
  summary:
    "Software Development Engineer with hands-on experience designing and building scalable backend services, REST APIs, and database-driven applications using Node.js, Express.js, MySQL, and MongoDB. Strong in writing clean, modular, unit-tested code, optimizing database performance, and implementing secure authentication and authorization.",
  highlight: "National Finalist, Smart India Hackathon 2024",
  email: "iamkumarshubham17@gmail.com",
  phone: "+91 70910 01514",
  github: "https://github.com/singhshubham23",
  linkedin: "https://www.linkedin.com/in/shubham-kumar-85153b274",
  website: "https://portfolio-y9et.vercel.app",
  resumePath: "/resume.pdf",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

export const heroRoles = [
  "Backend Engineering",
  "REST API Design",
  "Full Stack Development",
  "Secure Systems",
];

export const services = [
  {
    id: "backend",
    title: "BACKEND ENGINEERING",
    description:
      "Scalable services in Node.js and Express.js, built with clean, modular, object-oriented architecture and unit-tested code.",
    image: "/images/projects/blood-bank.png",
    tags: ["Node.js", "Express.js", "OOP", "Modular Architecture"],
  },
  {
    id: "apis",
    title: "REST APIS & SECURITY",
    description:
      "Secure RESTful endpoints with JWT authentication, role-based access control, bcrypt, Helmet.js, rate limiting, and request validation.",
    image: "/images/projects/document-validator.png",
    tags: ["JWT", "RBAC", "Helmet.js", "Rate Limiting"],
  },
  {
    id: "databases",
    title: "DATABASE DESIGN",
    description:
      "Normalized schema design, strategic indexing, and query optimization in MySQL and MongoDB. Cut database search time by 35% in production.",
    image: "/images/projects/gohunger.png",
    tags: ["MySQL", "MongoDB", "Indexing", "Query Optimization"],
  },
  {
    id: "fullstack",
    title: "FULL STACK WEB APPS",
    description:
      "End-to-end applications with React.js and Tailwind CSS, real-time updates via Socket.io, and deployment on Vercel and Render.",
    image: "/images/projects/news-app.png",
    tags: ["React.js", "Tailwind CSS", "Socket.io", "Vercel"],
  },
];

export const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Heal Bharat Services",
    location: "Remote",
    date: "Feb 2026 – Apr 2026",
    points: [
      "Designed and built a three-tier Certificate Verification System with Node.js, Express.js, and MongoDB to validate documents securely.",
      "Improved database search speed by 35% through strategic indexing and query optimization.",
      "Built secure RESTful endpoints using JWT authentication, RBAC, and server-side caching to support anomaly detection.",
    ],
  },
  {
    role: "Cyber Security & Software Development Intern",
    company: "AICTE x Edunet Foundation",
    location: "Remote",
    date: "Jan 2025 – Feb 2025",
    points: [
      "Completed hands-on training in network security vulnerabilities, cryptography, and secure API design standards.",
      "Applied backend hardening practices including Helmet.js security headers, rate limiting, and request validation.",
    ],
  },
];

export const projects = [
  {
    slug: "blood-bank-management-system",
    title: "Blood Bank Management System",
    year: "2024",
    category: "Backend",
    image: "/images/projects/blood-bank.png",
    description:
      "A real-time blood bank platform that keeps inventory live across connected clients and finds nearby donors and facilities.",
    points: [
      "Built a real-time, bi-directional messaging layer with Socket.io to push live inventory updates, addressing data race conditions in concurrent updates.",
      "Implemented geospatial search using MongoDB 2dsphere indexes and the $near operator to find donors and facilities within a given radius.",
      "Designed backend middleware combining JWT authentication, RBAC permissions, and Helmet.js security headers. Moved PDF generation to the client to reduce server latency.",
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "RBAC", "Helmet.js"],
    live: "https://bloodbank-flame.vercel.app/",
    github: "https://github.com/singhshubham23/bloodbankfrontend",
  },
  {
    slug: "aqua-veda-water-knowledge-platform",
    title: "Aqua Veda Water Knowledge Platform",
    year: "2024",
    category: "Full Stack",
    image: null,
    description:
      "A nationwide water knowledge platform built as a National Finalist entry for Smart India Hackathon 2024 (Govt. of India / AICTE).",
    points: [
      "Built a nationwide water knowledge platform with a normalized database schema.",
      "Applied object-oriented application structure, separating data processing logic from application routing in maintainable backend services.",
      "Built and shipped a full-stack, unit-tested platform within a 36-hour hackathon window, with clean state management and reusable components.",
    ],
    tags: ["React.js", "Tailwind CSS", "JavaScript", "OOP", "Normalized Schemas"],
    live: "https://aquaveda.vercel.app/",
    github: "https://github.com/singhshubham23",
  },
  {
    slug: "document-validator",
    title: "Document Validator",
    year: "2026",
    category: "Full Stack",
    image: "/images/projects/document-validator.png",
    description:
      "A document verification platform that uses NVIDIA OCR for automated data extraction and validation, with bulk uploads and a secure API for institutions.",
    points: [
      "Automated data extraction from uploaded documents using NVIDIA OCR.",
      "Supports bulk uploading and secure programmatic API publishing for institutions.",
    ],
    tags: ["React", "Node.js", "Firebase", "Tailwind CSS", "NVIDIA OCR"],
    live: "https://document-verification-nvidia-ocr.vercel.app/",
    github: "https://github.com/singhshubham23/document-verification-nvidia-ocr",
  },
  {
    slug: "gohunger",
    title: "GoHunger",
    year: "2024",
    category: "Frontend",
    image: "/images/projects/gohunger.png",
    description:
      "A food-services web app that connects users with food services, focused on performance, clean UI, and scalable frontend architecture.",
    points: [
      "Built a responsive interface consuming REST APIs with a scalable frontend structure.",
    ],
    tags: ["React", "JavaScript", "REST API", "CSS"],
    live: null,
    github: "https://github.com/singhshubham23/GoHunger-Frontend",
  },
];

export const otherProjects = [
  { title: "News App", detail: "Real-time news browsing with category filters and API integration", github: "https://github.com/singhshubham23/News-App" },
  { title: "Swap App", detail: "Item exchange app with reusable components and a clean UX", github: "https://github.com/singhshubham23/SwapApp" },
  { title: "Paste App", detail: "Secure text-snippet sharing with state management", github: "https://github.com/singhshubham23/PasteApp" },
  { title: "Steganography App", detail: "Hides secret messages inside images", github: "https://github.com/singhshubham23/Stegnography" },
];

export const skillGroups = [
  { title: "Languages", items: ["JavaScript", "Java", "Python"] },
  { title: "Frameworks", items: ["Node.js", "Express.js", "React.js", "Socket.io", "Tailwind CSS", "Vite"] },
  { title: "Databases", items: ["MySQL", "MongoDB", "Mongoose", "Query Optimization", "Indexing", "Normalized Schemas"] },
  { title: "Software Design", items: ["OOP", "Modular Architecture", "Clean Code", "Server-side Caching"] },
  { title: "Security", items: ["JWT", "RBAC", "bcrypt", "Helmet.js", "Rate Limiting", "Request Validation"] },
  { title: "Testing & Tools", items: ["Unit Testing", "Integration Testing", "Git", "GitHub", "Vercel", "Render"] },
];

export const education = [
  {
    school: "Bengal College of Engineering & Technology",
    degree: "B.Tech in Computer Science & Engineering",
    date: "2022 – 2026",
    image: "/images/education/bcet.png",
  },
  {
    school: "Vardhman Mahavir College, Pawapuri",
    degree: "Class XII (Science)",
    date: "2021",
    image: "/images/education/vm.png",
  },
  {
    school: "SKP Vidya Vihar, Deoghar",
    degree: "Class X",
    date: "2019",
    image: "/images/education/skp.png",
  },
];

export const achievements = [
  { title: "Smart India Hackathon 2024", detail: "National Finalist, Govt. of India / AICTE" },
  { title: "Cyber Security", detail: "AICTE x Edunet Foundation: API Security & Network Defense" },
  { title: "SQL", detail: "GeeksforGeeks" },
  { title: "Java: Solving Problems with Software", detail: "Duke University, Coursera" },
];
