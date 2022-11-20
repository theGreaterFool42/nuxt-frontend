import { sendError } from 'h3';
import { createUser } from '~~/server/database/repositories/userRepository';
import { userTransformer } from '~~/server/transformers/user';
import { IUser } from '~~/types/IUser';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, email, password, repeatPassword, name } = body;

  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Invalid params' })
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: 'Passwords do not match' })
    );
  }

  const userData: IUser = {
    username,
    email,
    password,
    name,
    //TODO: replace with default image
    profileImage: 'https://picsum.photos/200/200',
  };

  const user = await createUser(userData);

  return {
    body: userTransformer(user as IUser),
  };
});
