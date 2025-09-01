import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Edward Baleni", // Site name
  EMAIL: "baleniedward@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_EDUCATION_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Nano is a minimal and lightweight publications and portfolio.",
  SKILLS: {
    "Languages": ["Java", "Netlogo", "Python", "R", "SQL"],
    "Software": ["AWS S3", "AWS EC2", "AWS SageMaker", "Git/Github", "Google Earth Engine API", "Flask", "Optuna", "Simul8", "QGIS"],
    "Tools & Packages": ["caret", "geopandas", "h2o", "keras", "mlr3", "networkx", "openCV", "pyOD", "pytorch", "scikit-learn", "tensorflow"],
    "Soft Skills": ["Communication", "Flexibility", "Patience", "Problem Solving", "Time Management"]
  },
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
