import { IUser } from '~~/types/IUser';
import { User } from '@prisma/client';
import { IPlant } from '~/types/IPlant';
import { createPlant } from '~~/server/database/repositories/plantRepository';
import { getUserById } from '~~/server/database/repositories/userRepository';
export default defineEventHandler(async (event) => {
  const body: IPlant = await readBody(event);
  const user = await getUserById(body.userId);
  //TODO: Research: should I get user from decoded token, or from state?
  //TODO: take userId from user and not from requestBody

  const plant = await createPlant(body, body.userId);

  return { body: plant };
});
