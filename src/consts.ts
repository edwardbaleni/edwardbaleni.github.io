import type { Site, Metadata, Socials, Presentations } from "@types";

export const SITE: Site = {
  NAME: "Edward Baleni", // Site name
  EMAIL: "baleniedward@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_EDUCATION_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Edward Baleni — data scientist and statistician working across machine learning, anomaly detection and operational restructuring.",
  SKILLS: {
    "Languages": ["Java", "Netlogo", "Python", "R", "SQL"],
    "Software": ["Alteryx", "AWS S3", "AWS SageMaker", "Docker", "Git/Github", "Google Earth Engine API", "Flask", "MLFlow", "Optuna", "Simul8", "QGIS", "think-cell"],
    "Tools & Packages": [ "NumPy", "SciPy", "Pandas", "caret", "geopandas", "h2o", "keras", "mlr3", "networkx", "openCV", "pyOD", "pytorch", "scikit-learn", "tensorflow", "XGBoost"],
    "Soft Skills": ["Communication", "Flexibility", "Patience", "Problem Solving", "Time Management"]
  },
  CERTIFICATIONS: [
    "Alteryx Designer Core (86%)",
    "Microsoft Copilot",
    "think-cell"
  ],
  RESEARCH_INTERESTS: [
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Anomaly Detection",
    "Agent-Based Modeling",
    "Simulation",
    "Spatial Analysis",
    "Deep Learning",
    "Optimization"
  ],
};

export const EDUCATION: Metadata = {
  TITLE: "Education",
  DESCRIPTION: "Where and what I have learnt and what I have done.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const PUBLICATIONS: Metadata = {
  TITLE: "Publications",
  DESCRIPTION: "A collection of my academic publications.",
};

export const PRESENTATIONS: Presentations = [
  {
    TITLE: "Autonomous Anomaly Detection of Orchard Tree Crown Delineations",
    VENUE: "SAICSIT",
    YEAR: "2025",
    DETAIL: "Presented the peer-reviewed conference paper (Springer CCIS, vol. 2583).",
  },
  {
    TITLE: "Autonomous Anomaly Detection of Orchard Tree Crown Delineations",
    VENUE: "SASA",
    YEAR: "2024",
    DETAIL: "Poster and abstract presentation of the master's dissertation; awarded best abstract and best academic research poster.",
  },
];

export const SOCIALS: Socials = [
  // { 
  //   NAME: "twitter-x",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
  { 
    NAME: "github",
    HREF: "https://github.com/edwardbaleni"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/edward-baleni-eb1999",
  }
];
