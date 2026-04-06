export interface Article {
  id: string;
  title: string;
  description: string;
  cover_image: string | null;
  url: string;
  page_views_count: number;
  public_reactions_count: number;
  comments_count: number;
}

export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  fork: boolean;
  language: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
}

export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}

export interface ContactItem {
  social: string;
  link: string;
  href: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company?: string;
  description?: string;
  bullets?: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface WritingLink {
  label: string;
  href: string;
}
