export type NormalizedItems<T> = {
  byId: Record<string, T>;
  allIds: string[];
}

export type Pagination = {
  from: number;
  to: number;
  total: number;
};