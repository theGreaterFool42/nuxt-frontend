import { IPlant } from '~/types/IPlant';

export interface IUser {
  id?: string;
  username: string;
  name?: string;
  password?: string;
  email?: string;
  profileImage?: string;
  plants?: IPlant[];
}
