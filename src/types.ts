export type Site = {
  NAME: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  NUM_EDUCATION_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
  SKILLS?: { [category: string]: string[] };
  RESEARCH_INTERESTS?: string[];
  CERTIFICATIONS?: string[];
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type Presentations = {
  TITLE: string;
  VENUE: string;
  YEAR: string;
  DETAIL: string;
}[];
