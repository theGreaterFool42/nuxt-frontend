import prisma from './client';
import { IPlantData } from '~~/types/IPlantData';

export const createPlantData = (plantData: IPlantData, plantId: string) => {
  const finalPlantData = {
    ...plantData,
    plantId: plantId,
  } as IPlantData;
  return prisma.plantData.create({
    data: finalPlantData,
  });
};

//getPlantDataById

//getAllPlantDataByPlantId (fromDate-toDate)
