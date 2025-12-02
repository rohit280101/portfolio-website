export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  summary: string;
  experience: WorkExperience[];
  education: Education[];
  skills: SkillCategory[];
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}