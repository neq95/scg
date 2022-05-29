export type Task = {
  createdAt: number;
  description?: string;
  id: string;
  priorityID: string;
  projectID: string;
  stageID: string;
  subprojectID: string;
  title: string;
  updatedAt?: number;
}