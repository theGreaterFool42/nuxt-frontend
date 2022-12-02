import { User } from '@prisma/client';
import prisma from '~~/server/database/client';
import bcrypt from 'bcrypt';
import { IUser } from '~~/types/IUser';

export async function createUser(data: IUser) {
  const user = await prisma.user.create({
    data: data,
  });
  return user;
}

export async function getUserByEmail(
  emailOrEmail: string
): Promise<User | null> {
  return await prisma.user.findFirst({
    where: {
      OR: [{ email: emailOrEmail }, { username: emailOrEmail }],
    },
  });
}
export async function getUserByUserName(username: string) {
  return prisma.user.findUnique({
    where: { username },
  });
}

export async function getUserById(userId: string) {
  return prisma.user.findUnique({
    where: { id: userId },
  });
}
