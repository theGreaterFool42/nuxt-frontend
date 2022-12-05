import { IUser } from '~/types/IUser';
import prisma from '~/server/database/client';
import { ISession } from '~~/types/ISession';
import { User, Session } from '@prisma/client';

export async function createSession(sessionData: ISession): Promise<ISession> {
  if (!sessionData.authToken) {
    throw Error('missing auth token for session');
  }
  // console.log('user: ', sessionData.user);
  return (await prisma.session.create({
    data: {
      userId: sessionData.user!.id,
      authToken: sessionData.authToken,
    },
  })) as ISession;
}

export async function getSessionByAuthToken(
  authToken: string
): Promise<ISession> {
  const user: User = (await getUserByAuthToken(authToken)) as unknown as User;

  return { authToken, user };
}

async function getUserByAuthToken(authToken: string): Promise<User | null> {
  return prisma.session
    .findUnique({
      where: {
        authToken: authToken,
      },
    })
    .user();
}
