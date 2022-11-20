import UrlPattern from 'url-pattern';
import { decodeAccessToken } from '../api/auth/jwt';
import { getUserById } from '../database/repositories/userRepository';

export default defineEventHandler(async (event) => {
  const endpoints = ['/api/auth/user', '/api/user/posts', '/api/user/plant'];

  const isHandledByThisMiddleware = endpoints.some((endpoints) => {
    const pattern = new UrlPattern(endpoints);

    return pattern.match(event.node.req.url!);
  });

  if (!isHandledByThisMiddleware) {
    return;
  }
  console.log('######################');
  console.log('######################');
  console.log('######################');
  console.log('######################');
  console.log('######################');
  console.log(
    'token',
    event.node.req.headers['cookie']?.split('refresh_token=')[1]
  );
  console.log(
    'decodedToken',
    decodeAccessToken(
      event.node.req.headers['cookie']?.split('refresh_token=')[1]
    )
  );
  const token = event.node.req.headers['cookie']?.split('refresh_token=')[1];

  const decodedToken = decodeAccessToken(token as string);
  if (decodedToken) console.log('decodedToken', decodedToken);

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
