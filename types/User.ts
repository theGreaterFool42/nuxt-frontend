import { IPlant } from './Plant';
export interface IUser {
  id?: string;
  username: string;
  name?: string;
  loginType?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  profileImage?: String;
  role?: string;
  palnts?: IPlant[];
}
