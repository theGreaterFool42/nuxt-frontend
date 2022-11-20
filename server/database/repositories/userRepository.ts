import prisma from '~~/server/database/client';
import bcrypt from 'bcrypt';
import { IUser } from '~~/types/IUser';

export const createUser = (userData: IUser) => {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password!, 10),
  } as IUser;

  return prisma.user.create({
    data: finalUserData,
  });
};

export const getUserByUsername = (username: string) => {
  return prisma.user.findUnique({
    where: { username },
  });
};

export const getUserById = (userId: string) => {
  return prisma.user.findUnique({
    where: { id: userId },
  });
};
