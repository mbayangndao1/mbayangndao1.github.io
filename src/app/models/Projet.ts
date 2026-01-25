export interface Projet {
  titre: string;
  description: string;
  technologies: string[];
  fonctionnalites: string[];
  type: 'profesionnel' | 'personnel';
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}
