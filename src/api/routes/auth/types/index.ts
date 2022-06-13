import { successResponse } from 'api/types';
import { AuthUser } from 'models/User';

type getUserResponse = successResponse<AuthUser>;

type registerRequest = {
  name: string,
  surname: string,
  email: string,
  password: string,
};

type registerResponse = {
  success: boolean,
}

type loginRequest = {
  email: string,
  password: string,
}

type loginResponse = successResponse<{accessToken: string}>;

export type {registerRequest, registerResponse, loginRequest, loginResponse, getUserResponse};