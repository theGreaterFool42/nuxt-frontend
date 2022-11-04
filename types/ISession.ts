import { IUser } from './User';

export interface ISession {
  authToken?: string;
  user?: IUser;
}
