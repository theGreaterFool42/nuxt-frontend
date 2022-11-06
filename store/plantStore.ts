// import { IPlantData } from '~/types/IPlantData';
// import { IPlant, IPlantToAdd } from '~/types/IPlant';
// import { defineStore } from 'pinia';
// import { v4 as uuid } from 'uuid';

// export interface PlantState {
//   plants: IPlant[] | undefined[];
// }

// const state = (): PlantState => ({
//   plants: [],
// });

// const getters = {
//   getById: (state: PlantState) => (id: string) => {
//     return state.plants.find((item: IPlant | undefined) => item.id === id);
//   },
//   getOrderedPlants: (state: PlantState) =>
//     state.plants.sort(
//       (a: IPlant, b: IPlant) =>
//         a.createdAt.getMilliseconds() - b.createdAt.getMilliseconds()
//     ),
// };

// const actions = {
//   add(plantToAdd: IPlantToAdd) {
//     const plant: IPlant = {
//       id: uuid(),
//       ...plantToAdd,
//       createdAt: new Date(),
//       data: [] as IPlantData[],
//     };
//     this.plants.push(plant);
//   },
// };

// export const usePlantStore = defineStore('plantStore', {
//   state,
//   getters,
//   actions,
// });
