import prisma from '.';
import { ISession } from '~~/types/ISession';
export const createSession = (session: ISession) => {
  return prisma.session.create({
    data: session,
  });
};
