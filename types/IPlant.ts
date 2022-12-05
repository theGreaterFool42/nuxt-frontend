import { IUser } from '~~/types/IUser';
import { IPlantData } from '~/types/IPlantData';

export interface IPlant {
  id?: string;
  title: string;
  category: string;
  image?: string;
  plantedAt: Date;
  // createdAt: Date;
  userId: string;
  postId?: string;
  data?: IPlantData[];
}
