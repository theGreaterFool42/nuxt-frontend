import prisma from '~~/server/database/client';
import { IPlantData } from '~/types/IPlantData';
import { IPlant } from '~/types/IPlant';

export const createPlant = (plant: IPlant, userId: string) => {
  const finalPlant = {
    ...plant,
    userId: userId,
  };
  return prisma.plant.create({
    data: finalPlant,
  });
};

//TODO: test this
export const getPlantById = (plantId: string) => {
  return prisma.plant.findUnique({
    where: {
      id: plantId,
    },
  });
};

//TODO: test this
export const getPlantsByCategory = (category: string) => {
  return prisma.plant.findMany({
    where: { category: category },
  });
};

//TODO: test this
export const getPlantsByUserId = (userId: string) => {
  return prisma.plant.findMany({
    where: { userId: userId },
  });
};
