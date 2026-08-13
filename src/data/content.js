// ============================================================================
// SANDEEP BERWER — PORTFOLIO CONTENT
// Edit this file to update anything on the site. No component code needed.
// Anything marked [ADD YOUR INFORMATION] is a placeholder — fill it in.
// ============================================================================

export const profile = {
  name: "Sandeep Berwer",
  tagline: "B.Tech CSE (AI & ML) Student · Builder · AI/ML Intern",
  university: "Guru Jambheshwar University of Science & Technology (GJUST), Hisar",
  degree: "B.Tech, Computer Science & Engineering (AI & ML)",
  gradYear: "2028",
  location: "Bhiwani, Haryana, India",
  email: "[ADD YOUR INFORMATION]",
  github: "https://github.com/Sahilberwer",
  linkedin: "https://www.linkedin.com/in/sandeep-berwer/",
  githubPagesPortfolio: "https://sahilberwer.github.io",
  resumeUrl: "[ADD YOUR RESUME LINK OR FILE]",
  heroStatement:
    "I'm not just learning AI/ML from tutorials — I'm shipping it. Two production-grade systems, one live internship, and a running log of everything I broke and fixed along the way.",
};

// ----------------------------------------------------------------------------
// JOURNEY TIMELINE — the spine of the site
// ----------------------------------------------------------------------------
export const journey = [
  {
    id: "start",
    period: "2024 · 1st Year",
    title: "Starting B.Tech CSE (AI & ML)",
    summary:
      "Joined GJUST Hisar for B.Tech CSE with an AI & ML specialization — first real exposure to programming, data structures thinking, and what a CS degree actually demands.",
    learned: ["C/C++ fundamentals", "Problem-solving basics", "Academic rhythm of a CS degree"],
    tech: ["C++"],
    impact: "Foundation semester — learning how to learn.",
  },
  {
    id: "programming",
    period: "2024–25 · Early Semesters",
    title: "Learning Programming Seriously",
    summary:
      "Moved from syntax-level coding to actually reasoning about programs — Python became my primary language, alongside continued C++ for core CS coursework (DLCD, OS fundamentals).",
    learned: ["Python fundamentals", "OOP concepts", "Core CS theory (Digital Logic, early OS)"],
    tech: ["Python", "C++"],
    impact: "Python became the language I think in.",
  },
  {
    id: "webdev",
    period: "2025 · Sophomore Projects",
    title: "Learning Web Development",
    summary:
      "Built my first real user-facing things — a vanilla JS offline music player (Wavify), a Django social app clone, and an Instagram UI clone. This is where 'I built something' started to feel true.",
    learned: ["HTML/CSS/JS fundamentals", "DOM manipulation", "Basic backend with Django", "Git & GitHub workflow"],
    tech: ["HTML", "CSS", "JavaScript", "Django", "Git"],
    impact: "First projects on GitHub. First real debugging battles.",
  },
  {
    id: "early-projects",
    period: "2025 · Building Phase",
    title: "Building Practical Projects",
    summary:
      "Family Album website, a music player, and other front-end-first builds. Less about complexity, more about finishing things end-to-end — a habit that mattered more than any single project.",
    learned: ["Shipping over perfecting", "Basic deployment (Netlify/Vercel)", "UI thinking"],
    tech: ["HTML", "CSS", "JavaScript", "Netlify", "Vercel"],
    impact: "Learned to ship instead of endlessly polishing.",
  },
  {
    id: "ml-start",
    period: "2025–26 · ML Foundations",
    title: "Learning Machine Learning",
    summary:
      "Started formally learning ML — Scikit-learn, Pandas, NumPy, Matplotlib. Worked through classification problems with Logistic Regression, Decision Trees, and Random Forest, understanding data preprocessing and model evaluation, not just calling .fit().",
    learned: ["Data preprocessing", "Classification algorithms", "Model evaluation metrics", "EDA with Pandas/Matplotlib"],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    impact: "ML stopped being a black box and started being a toolset.",
  },
  {
    id: "codealpha",
    period: "2026 · Internship",
    title: "CodeAlpha Internship (Full Stack + ML)",
    summary:
      "Completed two CodeAlpha internship tracks. On Full Stack: built three MERN applications (E-commerce store, social media platform, project management tool). On ML: completed Credit Scoring (Logistic Regression / Decision Tree / Random Forest), Handwritten Character Recognition, and Disease Prediction — packaged and documented for GitHub.",
    learned: ["End-to-end MERN development", "Applied classification for credit scoring", "Structuring & documenting ML projects for a portfolio"],
    tech: ["MongoDB", "Express", "React", "Node.js", "Scikit-learn", "Random Forest"],
    impact: "First internship experience — real deadlines, real deliverables.",
    expandable: true,
  },
  {
    id: "honeywell",
    period: "2026–27 · Current Internship",
    title: "AI Intern @ Honeywell",
    summary:
      "Currently interning at Honeywell as an AI Intern, applying ML/AI concepts in a professional engineering environment alongside my coursework.",
    learned: ["[ADD YOUR INFORMATION — specific tools/workflows]", "Working within a professional engineering team"],
    tech: ["[ADD YOUR INFORMATION]"],
    impact: "Moved from self-directed projects to structured, team-based AI work.",
    expandable: true,
  },
  {
    id: "flagship-builds",
    period: "2026–27 · Production-Grade Builds",
    title: "AI/ML + Full-Stack Production Systems",
    summary:
      "Started building portfolio projects at production scale instead of tutorial scale: SkillVerse AI (an AI-powered learning platform, built as a full monorepo) and StockVision AI (a 10-model stock prediction system). This is the shift from 'student projects' to 'systems.'",
    learned: ["Monorepo architecture", "Deep learning (LSTM, Transformer, ensembles)", "Production API design", "Working across a full modern stack simultaneously"],
    tech: ["Next.js", "Express", "FastAPI", "Prisma", "PostgreSQL", "Redis", "PyTorch/TensorFlow"],
    impact: "Proof that I can own a system end-to-end, not just a feature.",
  },
  {
    id: "gate-dsa",
    period: "2026 · Ongoing",
    title: "DSA & GATE DA Preparation",
    summary:
      "Preparing for GATE DA 2026 while continuing project work — going through the paper question by question to strengthen fundamentals in data structures, algorithms, and the theory that underlies the ML I've been applying.",
    learned: ["Rigorous algorithmic thinking", "Data science theory depth", "Balancing exam prep with shipped work"],
    tech: ["DSA", "Probability & Statistics", "ML theory"],
    impact: "Ongoing — building the depth behind the practice.",
  },
  {
    id: "future",
    period: "What's Next",
    title: "AI/ML + Software Engineering Career",
    summary:
      "Working toward a career at the intersection of AI/ML and software engineering — going deeper into Generative AI, advanced ML, and building real-world AI applications people actually use.",
    learned: [],
    tech: [],
    impact: "In progress.",
    future: true,
  },
];

// ----------------------------------------------------------------------------
// SKILLS — realistic levels, no fake percentages
// ----------------------------------------------------------------------------
export const skillLevels = ["Currently Learning", "Beginner", "Intermediate", "Strong"];

export const skillCategories = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: "Strong" },
      { name: "C++", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
    ],
  },
  {
    category: "AI / Machine Learning",
    skills: [
      { name: "Scikit-learn", level: "Strong" },
      { name: "Pandas", level: "Strong" },
      { name: "NumPy", level: "Strong" },
      { name: "Matplotlib", level: "Intermediate" },
      { name: "Classification (LogReg, DT, RF)", level: "Strong" },
      { name: "Deep Learning (LSTM, Transformers)", level: "Currently Learning" },
      { name: "Model Evaluation & SHAP", level: "Intermediate" },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML / CSS", level: "Strong" },
      { name: "JavaScript (DOM)", level: "Intermediate" },
      { name: "React / Next.js", level: "Intermediate" },
      { name: "Flask", level: "Intermediate" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "Streamlit", level: "Strong" },
      { name: "Node.js / Express", level: "Intermediate" },
    ],
  },
  {
    category: "Data & Infra",
    skills: [
      { name: "PostgreSQL / Prisma", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Redis", level: "Beginner" },
      { name: "Cloudinary", level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: "Strong" },
      { name: "VS Code", level: "Strong" },
      { name: "Jupyter", level: "Strong" },
      { name: "Claude Code / AI dev tools", level: "Currently Learning" },
    ],
  },
  {
    category: "Deployment",
    skills: [
      { name: "Vercel", level: "Intermediate" },
      { name: "Render", level: "Intermediate" },
      { name: "Netlify", level: "Intermediate" },
      { name: "Streamlit Cloud", level: "Strong" },
    ],
  },
];

// ----------------------------------------------------------------------------
// PROJECTS
// ----------------------------------------------------------------------------
export const projects = [
  {
    id: "skillverse",
    name: "SkillVerse AI",
    category: "AI/ML",
    tags: ["AI/ML", "Full Stack"],
    flagship: true,
    problem: "Indian students often lack a single, structured, AI-guided path through learning a new skill — content is scattered and generic.",
    solution:
      "An AI-powered learning & mentoring platform built as a production-grade monorepo, combining a Next.js frontend, an Express API layer, and a FastAPI service for AI/ML logic — designed to actually scale, not just demo.",
    tech: ["Next.js", "Express", "FastAPI", "Prisma", "PostgreSQL", "Redis"],
    features: [
      "Monorepo architecture separating web, API, and ML services",
      "AI-guided mentoring/learning flow for Indian students",
      "Relational data modeling with Prisma + PostgreSQL",
      "Redis-backed caching/session layer",
    ],
    learned: "How to architect a system where a Node API and a Python ML service actually cooperate cleanly, and what production data modeling looks like beyond a single Flask app.",
    github: "[ADD YOUR REPO LINK]",
    demo: "[ADD YOUR LIVE DEMO LINK]",
    status: "In active development",
  },
  {
    id: "stockvision",
    name: "StockVision AI",
    category: "AI/ML",
    tags: ["AI/ML", "Full Stack"],
    flagship: true,
    problem: "Most beginner stock-prediction projects use a single model and call it done — there's no honest comparison of how different approaches actually perform.",
    solution:
      "A full-stack stock prediction platform pulling live data via yfinance and comparing ten different ML/DL models — including LSTM, Transformer, and ensemble methods — behind a FastAPI backend.",
    tech: ["FastAPI", "yfinance", "LSTM", "Transformer", "Ensemble Models", "Python"],
    features: [
      "10 ML/DL models benchmarked side by side",
      "Live market data via yfinance",
      "FastAPI backend serving predictions",
      "Deep learning (LSTM, Transformer) alongside classical ensembles",
    ],
    learned: "How different model families actually compare on the same real-world data, and what it takes to serve multiple models reliably through one API.",
    github: "[ADD YOUR REPO LINK]",
    demo: "[ADD YOUR LIVE DEMO LINK]",
    status: "In active development",
  },
  {
    id: "credit-scoring",
    name: "Credit Scoring Classifier",
    category: "AI/ML",
    tags: ["AI/ML"],
    problem: "Predicting creditworthiness from financial data using classical ML — a core, high-signal ML use case.",
    solution:
      "Built and compared Logistic Regression, Decision Tree, and Random Forest classifiers for credit scoring as part of the CodeAlpha ML internship, with proper preprocessing and evaluation.",
    tech: ["Python", "Scikit-learn", "Pandas", "Logistic Regression", "Random Forest"],
    features: ["Multiple model comparison", "Data preprocessing pipeline", "Evaluation metrics (accuracy, precision/recall)"],
    learned: "How classification model choice and preprocessing quality directly affect real predictive performance.",
    github: "https://github.com/Sahilberwer",
    demo: null,
    status: "Completed",
  },
  {
    id: "stellar-classification",
    name: "Stellar Classification (SDSS17)",
    category: "AI/ML",
    tags: ["AI/ML"],
    problem: "Classifying astronomical objects (stars, galaxies, quasars) from Sloan Digital Sky Survey data.",
    solution:
      "A Random Forest classifier trained on the SDSS17 dataset, reaching ~97% accuracy, submitted as a complete ML assignment.",
    tech: ["Python", "Random Forest", "Scikit-learn", "Pandas"],
    features: ["~97% classification accuracy", "Full EDA and preprocessing", "Packaged, submission-ready notebook"],
    learned: "How far a well-tuned classical model can go on a clean, well-labeled dataset.",
    github: "[ADD YOUR REPO LINK]",
    demo: null,
    status: "Completed",
  },
  {
    id: "burnout-risk",
    name: "Burnout Risk Prediction",
    category: "AI/ML",
    tags: ["AI/ML"],
    problem: "Predicting student burnout risk from behavioral/academic data — a 3-class prediction problem.",
    solution:
      "A Streamlit app wrapping Decision Tree and Random Forest models trained on 50,000 student records, deployed as an interactive tool.",
    tech: ["Python", "Streamlit", "Decision Tree", "Random Forest", "Pandas"],
    features: ["Interactive Streamlit interface", "3-class burnout risk prediction", "Trained on 50K student records"],
    learned: "Turning a notebook model into something a non-technical user could actually interact with.",
    github: "[ADD YOUR REPO LINK]",
    demo: "[ADD YOUR LIVE DEMO LINK]",
    status: "Completed",
  },
  {
    id: "pm-tool",
    name: "Full-Stack Project Management Tool",
    category: "Full Stack",
    tags: ["Full Stack", "Web"],
    problem: "Teams need a lightweight way to track projects and tasks without heavyweight enterprise tools.",
    solution: "A MERN-stack project management tool built during the CodeAlpha Full Stack internship.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    features: ["Task and project tracking", "Full CRUD across the MERN stack", "Deployed and GitHub-documented"],
    learned: "End-to-end MERN development — connecting a React frontend to an Express/MongoDB backend cleanly.",
    github: "https://github.com/Sahilberwer",
    demo: "[ADD YOUR LIVE DEMO LINK]",
    status: "Completed",
  },
  {
    id: "snapinsta",
    name: "SnapInsta (Social Media App)",
    category: "Full Stack",
    tags: ["Full Stack", "Web"],
    problem: "Understanding what it actually takes to build a social platform's core mechanics from scratch.",
    solution:
      "A Flask-based social media concept with feeds, image/video upload via Cloudinary, follow/unfollow, likes, and comments.",
    tech: ["Flask", "Python", "Cloudinary", "SQL"],
    features: ["User feeds", "Media upload via Cloudinary", "Follow/unfollow system", "Likes & comments"],
    learned: "How social-platform data models (relationships, feeds) get complex fast, and how to manage media at scale with Cloudinary.",
    github: "[ADD YOUR REPO LINK]",
    demo: null,
    status: "Completed",
  },
  {
    id: "music-player",
    name: "Music Website / Player",
    category: "Web",
    tags: ["Web"],
    problem: "Building a practical, user-facing web app beyond static pages.",
    solution: "A browser-based music player focused on clean UI and playback controls.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Custom playback controls", "Responsive player UI"],
    learned: "Working with the browser's audio APIs and building interactive (not just static) UI.",
    github: "https://github.com/Sahilberwer",
    demo: "[ADD YOUR LIVE DEMO LINK]",
    status: "Completed",
  },
  {
    id: "family-album",
    name: "Family Album Website",
    category: "Web",
    tags: ["Web"],
    problem: "An early, personal project to practice front-end fundamentals.",
    solution: "A simple, structured photo/album website — one of my first practical web builds.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Gallery layout", "Responsive design basics"],
    learned: "The fundamentals — layout, structure, responsiveness — before adding any complexity.",
    github: "https://github.com/Sahilberwer",
    demo: null,
    status: "Completed",
  },
];

// ----------------------------------------------------------------------------
// EXPERIENCE
// ----------------------------------------------------------------------------
export const experience = [
  {
    id: "honeywell",
    role: "AI Intern",
    org: "Honeywell",
    period: "2026 — Present",
    current: true,
    summary:
      "Currently interning as an AI Intern at Honeywell, applying AI/ML concepts in a professional engineering setting.",
    details: ["[ADD YOUR INFORMATION — responsibilities, tools, team]"],
  },
  {
    id: "codealpha-ml",
    role: "Machine Learning Intern",
    org: "CodeAlpha",
    period: "2026",
    current: false,
    summary:
      "Completed the ML internship track: Credit Scoring, Handwritten Character Recognition, and Disease Prediction, packaged with individual READMEs for GitHub.",
    details: [
      "Applied Logistic Regression, Decision Tree, and Random Forest for credit scoring",
      "Built a handwritten character recognition model",
      "Built a disease prediction classifier",
      "Documented and packaged all three tasks for public GitHub upload",
    ],
  },
  {
    id: "codealpha-fullstack",
    role: "Full Stack Development Intern",
    org: "CodeAlpha",
    period: "2026",
    current: false,
    summary:
      "Completed the Full Stack track: three MERN applications built and deployed, with a full Git/GitHub workflow.",
    details: [
      "Built an E-commerce store, a social media platform, and a project management tool (MERN)",
      "Followed a structured Git/GitHub workflow for each project",
      "Deployed and documented projects for portfolio use",
    ],
  },
];

// ----------------------------------------------------------------------------
// CERTIFICATIONS / ACHIEVEMENTS — placeholders where exact names aren't confirmed
// ----------------------------------------------------------------------------
export const certifications = [
  {
    id: "cert-1",
    name: "CodeAlpha Full Stack Development — Internship Certificate",
    org: "CodeAlpha",
    date: "2026",
    link: "[ADD VERIFICATION LINK]",
  },
  {
    id: "cert-2",
    name: "CodeAlpha Machine Learning — Internship Certificate",
    org: "CodeAlpha",
    date: "2026",
    link: "[ADD VERIFICATION LINK]",
  },
  {
    id: "cert-3",
    name: "[ADD YOUR INFORMATION — certificate name]",
    org: "Honeywel",
    date: "2026",
    link: "[ADD VERIFICATION LINK]",
  },
  {
    id: "cert-4",
    name: "[ADD YOUR INFORMATION — any course/technical certification]",
    org: "[BharatCare]",
    date: "2026",
    link: "[ADD VERIFICATION LINK]",
  },
];

// ----------------------------------------------------------------------------
// CURRENTLY BUILDING TOWARD
// ----------------------------------------------------------------------------
export const buildingToward = [
  { title: "GATE DA 2026 Preparation", note: "Working through the paper question by question, strengthening DSA and DS theory." },
  { title: "Deep Learning (LSTM, Transformers)", note: "Applying these directly inside StockVision AI's model comparison." },
  { title: "Production System Design", note: "Monorepo architecture, API design, and full-stack ownership via SkillVerse AI." },
  { title: "Generative AI", note: "Exploring how to use and build with modern AI tooling — including Claude Code and MCP — inside my own dev workflows." },
  { title: "Data Structures & Algorithms", note: "Ongoing, alongside GATE prep." },
];

export const nav = [
  { id: "story", label: "Story" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certs" },
  { id: "building", label: "Building" },
  { id: "vision", label: "Vision" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
