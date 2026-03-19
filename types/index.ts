export type ProjectContributor = {
  name: string;
  url?: string;
};

export type Project = {
  id: number;
  title: string;
  summary: string;
  image: string;
  deploymentUrl?: string;
  githubUrl?: string;
  techStack: string[];
  builtBy: ProjectContributor[];
  role?: string;
};
