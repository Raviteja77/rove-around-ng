import { Iuser } from './user.model';

export interface UserAuthentication {
  token: string;
  isAuthorized: boolean;
  errorMessage: string;
  user?: Iuser;
}
