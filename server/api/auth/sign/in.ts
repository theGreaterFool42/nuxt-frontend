import { IUser } from '~~/types/IUser';
import { getUserByUsername } from '~~/server/database/user';
import bcrypt from 'bcrypt';
import { generateTokens, sendRefreshToken } from '../jwt';
import { createSession } from '~~/server/database/session';
import { userTransformer } from '~~/server/transformers/user';

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Invalid params' })
    );
  }

  const user: IUser = (await getUserByUsername(username)) as IUser;

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Username or password is invalid',
      })
    );
  }

  const doesThePasswordMatch = await bcrypt.compare(password, user.password!);

  const { accessToken, refreshToken } = generateTokens(user);

  await createSession({ authToken: refreshToken, userId: user.id! });

  sendRefreshToken(event, refreshToken);

  return {
    user: userTransformer(user),
    doesThePasswordMatch,
    access_token: accessToken,
  };
});
