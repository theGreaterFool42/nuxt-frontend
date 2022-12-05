import { IPlantData } from '~~/types/IPlantData';
import { createPlantData } from '~~/server/database/repositories/plantDataRepository';
export default defineEventHandler(async (event) => {
  const body: IPlantData = await readBody(event);
  //TODO: Research: should I get user from decoded token, or from state?
  const plantId: string = 'cla9j6may00026ncca68wu3e1';

  const plantData = await createPlantData(body, plantId);

  return { body: plantData };
});
