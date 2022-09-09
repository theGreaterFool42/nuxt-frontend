import { IPlant } from './../types/Plant';
import { defineStore } from 'pinia';

export interface PlantState {
  plants: IPlant[] | undefined[];
}

const state = (): PlantState => ({
  plants: [],
});

const getters = {
  getById: (state: PlantState) => (id: string) => {
    return state.plants.find((item) => item.id === id);
  },
};

const actions = {};

export const usePlantStore = defineStore('plantStore', {
  state,
  getters,
  actions,
});
