import UrlPattern from 'url-pattern';
import { decodeAccessToken } from '../api/auth/jwt';
import { getUserById } from '../database/user';

export default defineEventHandler(async (event) => {
  const endpoints = ['/api/auth/user', '/api/user/posts'];

  const isHandledByThisMiddleware = endpoints.some((endpoints) => {
    const pattern = new UrlPattern(endpoints);

    return pattern.match(event.req.url!);
  });

  if (!isHandledByThisMiddleware) {
    return;
  }
  const token = event.req.headers['authorization']?.split(' ')[1];

  const decodedToken = decodeAccessToken(token as string);

  if (!decodedToken) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: 'Unauthorized' })
    );
  }

  try {
    //@ts-ignore
    const userId = decodedToken.userId;
    const user = await getUserById(userId);
    event.context.auth = { user };
  } catch (error) {
    return;
  }
});
