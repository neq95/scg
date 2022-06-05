export type Project = {
  createdAt: number;
  description?: string;
  id: string;
  title: string;
  updatedAt?: number;
}

export type ProjectPriority = {
  color: string;
  id: string;
  name: string;
  projectID: string;
  sort: number;
}