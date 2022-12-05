import { H3Event } from 'h3';
import { getPlantsByCategory } from '~~/server/database/repositories/plantRepository';

export default defineEventHandler(async (event: H3Event) => {
  const { category } = event.context.params;
  const plants = await getPlantsByCategory(category);
  return { plants };
});
