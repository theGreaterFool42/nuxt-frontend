import { getSessionByToken } from '~~/server/database/session';
import { getUserById } from '~~/server/database/user';
import { IUser } from '~~/types/IUser';
import { decodeRefreshToken, generateTokens } from './jwt';

export default defineEventHandler(async (event) => {
  const cookies = useCookies(event);

  const refreshToken = cookies.refresh_token;

  if (!refreshToken) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: 'Refresh token is invalid',
      })
    );
  }

  const session = await getSessionByToken(refreshToken);

  if (!session) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: 'Refresh token is invalid',
      })
    );
  }

  const decodedToken = decodeRefreshToken(refreshToken);
  try {
    //TODO: Why does the hitler-lint say, that userId does not exist on decodedToken?
    //@ts-ignore
    const user = (await getUserById(decodedToken!.userId)) as IUser;
    const { accessToken } = generateTokens(user);
    return { access_token: accessToken };
  } catch (error) {
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: 'Something went wrong',
      })
    );
  }
});
