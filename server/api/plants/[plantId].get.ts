import { H3Event } from 'h3';
import { getPlantById } from '~~/server/database/repositories/plantRepository';

export default defineEventHandler(async (event: H3Event) => {
  const { plantId } = event.context.params;
  const plants = await getPlantById(plantId);
  return { plants };
});
