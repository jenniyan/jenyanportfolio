export const projects = [
  {
    title: "Envoy: AI Postgres Client",
    time: "mar 2026 · IrvineHacks submission",
    description:
      "AI-powered Postgres client that lets you query any PostgreSQL database using natural language. Translates to SQL, shows affected rows, assigns risk level, and requests approval before touching any data.",
    tech: ["TypeScript", "Next.js", "Claude API", "Postgres MCP", "shadcn", "Tailwind", "AI SDK"],
    demo: "https://youtu.be/aV2i10SZUNM",
    repo: "https://github.com/Satchel05/IrvineHacks2026",
    devpost: "https://devpost.com/software/envoy-ai-postgres-client",
  },
  {
    title: "Personal Portfolio",
    time: "dec 2025 – present",
    description:
      "Interactive Minecraft-themed portfolio built as a 3D-style room scene with clickable objects that open modals.",
    tech: ["React", "HTML/CSS"],
    repo: "https://github.com/jenniyan/jenyanportfolio",
  },
  {
    title: "Saucynator",
    time: "jun – aug 2024",
    description:
      "Recipe chatbot built with GPT-3.5 that suggests dishes from ingredients you already have. Designed around prompt engineering and long-term memory for beginner-friendly cooking.",
    tech: ["Python", "Flask", "OpenAI API", "HTML/CSS/JS"],
    demo: "https://www.loom.com/share/1c8b9a0e7c5b4d9f8e1c3a2b6f4e5a6",
    repo: "https://github.com/jenniyan/saucynator",
  },
  {
    title: "ML for Pediatric Pneumonia Detection",
    time: "apr – jul 2024",
    description:
      "Research paper comparing three ML models (custom scikit-learn, OpenAI zero-shot, pretrained CNN) for classifying lung X-rays as healthy or pneumonia-positive.",
    tech: ["Python", "NumPy", "Matplotlib", "scikit-learn", "TensorFlow"],
    demo: "https://docs.google.com/document/d/1lzkesxp3Uh44X8hECLNe2RMTWxz470mHqzMn6l8UUuo/edit",
    repo: "https://github.com/jenniyan/machine_learning",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer Intern ",
    company: "Avision",
    date: "Apr 2026 – Present",
    description:
      "Migrating legacy website to Typescript-based React app with React Router.",
    tech: ["React", "Tailwind CSS", "Headless UI", "TypeScript", "Express", "NeonDB"],
    repo: "https://github.com/avisionlabs/website",
  },
  {
    title: "Full Stack Developer",
    company: "Commit the Change",
    date: "Oct 2025 – Present",
    description:
      "Building a centralized appointment management platform for CLCHC — a non-profit providing affordable healthcare to 22,000+ Orange County patients. Features daily quota creation, live progress tracking, version logs, and tiered permission portals.",
    tech: ["React", "Chakra UI", "Node.js", "Express", "PostgreSQL", "Firebase"],
    repo: "https://github.com/ctc-uci/clchc",
  },
];

export const skillCategories = [
  { label: "Languages",   items: ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL", "Java"] },
  { label: "Web Dev",     items: ["React", "Node.js", "Express", "Tailwind CSS", "PostgreSQL", "Firebase", "Next.js"] },
  { label: "Tools",       items: ["Git", "GitHub", "VS Code", "Docker", "Postman", "PgAdmin", "npm/yarn"] },
  { label: "Python Libs", items: ["NumPy", "Pandas", "Matplotlib", "scikit-learn", "PyTorch", "Flask", "TensorFlow"] },
];