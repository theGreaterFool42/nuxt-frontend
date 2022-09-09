export interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  role: string;
  isLoggedIn: boolean;
}
