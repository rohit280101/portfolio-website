export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
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