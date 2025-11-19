export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string; // Markdown content
}

export interface NavItem {
  label: string;
  href: string;
}

