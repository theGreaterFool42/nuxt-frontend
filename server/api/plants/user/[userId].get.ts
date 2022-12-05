import { H3Event } from 'h3';
import { getPlantsByUserId } from '~~/server/database/repositories/plantRepository';

export default defineEventHandler(async (event: H3Event) => {
  const { userId } = event.context.params;
  const plants = await getPlantsByUserId(userId);
  return { plants };
});
