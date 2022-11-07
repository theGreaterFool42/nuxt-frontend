import prisma from './client';
import { ISession } from '~~/types/ISession';
export const createSession = (session: ISession) => {
  return prisma.session.create({
    data: session,
  });
};

export const getSessionByToken = (token: string) => {
  return prisma.session.findUnique({
    where: {
      authToken: token,
    },
  });
};
