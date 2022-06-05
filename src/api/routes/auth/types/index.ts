import { successResponse } from 'api/types';
import { AuthUser } from 'models/User';

type getUserResponse = successResponse<AuthUser>;

export type {getUserResponse};