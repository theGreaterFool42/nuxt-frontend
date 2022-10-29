import { IPlantData } from 'types/PlantData';

export interface IPlant {
  id: string;
  title: string;
  category: string;
  plantedAt: Date;
  createdAt: Date;
  data: IPlantData[];
}

export interface IPlantToAdd {
  title: string;
  category: string;
  plantedAt: Date;
}