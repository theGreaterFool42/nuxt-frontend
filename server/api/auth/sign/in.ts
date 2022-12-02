import bcrypt from 'bcrypt';
import { getUserByEmail } from '~/server/database/repositories/userRepository';
import { sendError, H3Event } from 'h3';
import { ZodError } from 'zod';
import loginRequest from '~~/server/formRequests/LoginRequest';
import sendDefaultErrorResponse from '~~/server/errors/responses/DefaultErrorsResponse';
import { getMappedError } from '~~/server/errors/errorMapper';
import { makeSession } from '~~/server/services/sessionService';
import { sanitizeUserForFrontend } from '~~/server/services/userService';
import sendZodErrorResponse from '~~/server/errors/responses/ZodErrorsResponse';

const standardAuthError = getMappedError(
  'Authentication',
  'Invalid Credentials'
);

export default eventHandler(async (event: H3Event) => {
  try {
    const data = await loginRequest(event);
    const user = await getUserByEmail(data.usernameOrEmail);

    if (user === null) {
      return sendError(
        event,
        createError({ statusCode: 401, data: standardAuthError })
      );
    }

    if (user.password == undefined) {
      return sendError(
        event,
        createError({ statusCode: 401, data: standardAuthError })
      );
    }

    const isPasswordCorrect = await bcrypt.compare(
      data.password,
      user.password
    );

    if (!isPasswordCorrect) {
      console.log('data', data.password);
      console.log('user', user.password);
      console.log(data);
      sendError(
        event,
        createError({ statusCode: 401, data: standardAuthError })
      );
    }

    await makeSession(user, event);
    return sanitizeUserForFrontend(user);
  } catch (error: any) {
    if (error.data instanceof ZodError) {
      return await sendZodErrorResponse(event, error.data);
    }

    return await sendDefaultErrorResponse(event, 'Unauthenticated', 401, error);
  }
});
