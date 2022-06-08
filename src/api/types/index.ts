type successResponse<T> = {
  status: string;
  success: boolean;
  content: T;
};

export type {successResponse};