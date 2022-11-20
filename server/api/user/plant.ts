import { IPlant } from '~/types/IPlant';
import { createPlant } from '~~/server/database/repositories/plantRepository';
export default defineEventHandler(async (event) => {
  const body: IPlant = await readBody(event);
  //TODO: Research: should I get user from decoded token, or from state?
  const userId: string = event.context.auth.user.id;

  const plant = await createPlant(body, userId);

  return { body: plant };
});
