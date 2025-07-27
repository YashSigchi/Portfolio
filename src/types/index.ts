export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  badges: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  tags: string[];
  metrics?: string[];
  logo: string;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks' | 'Tools' | 'Databases';
  level: number;
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  logo: string;
  credentialUrl?: string;
}

export interface Stats {
  label: string;
  value: string;
  description: string;
  icon: string;
}