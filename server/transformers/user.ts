import { IUser } from '~~/types/IUser';
export const userTransformer = (user: IUser) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    username: user.username,
    profileImage: user.profileImage,
    handle: '@' + user.username,
  };
};
