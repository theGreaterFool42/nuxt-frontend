import { Ref } from 'vue';
import { IUser } from '~~/types/IUser';
import { IPlant } from '~~/types/IPlant';
import useErrorMapper from './useErrorMapper';

export default () => {
  async function getPlants(): Promise<IPlant[]> {
    const useAuthCookie = () => useCookie('auth_token');
    const authCookie = useAuthCookie().value;
    const user = useState('user') as Ref<IUser>;
    // const params = user.value.id;
    const params = 'Recreational';
    let plants: IPlant[] = [];
    // if (authCookie) {
    const cookieHeaders = useRequestHeaders(['cookie']);
    const { data } = await useFetch<IPlant[]>(
      `/api/plants/category/${params}`,
      {
        headers: cookieHeaders as HeadersInit,
      }
    );
    plants = data.value!;
    // }
    return plants;
  }

  async function getPlantsByUserId(userId: string): Promise<IPlant[]> {
    const cookieHeaders = useRequestHeaders(['cookie']);
    const { data } = await useFetch<IPlant[]>(`/api/plants/user/${userId}`, {
      headers: cookieHeaders as HeadersInit,
    });
    return data.value!;
  }

  async function getPlantsByCategory(category: string): Promise<IPlant[]> {
    const cookieHeaders = useRequestHeaders(['cookie']);
    const { data } = await useFetch<IPlant[]>(
      `/api/plants/category/${category}`,
      {
        headers: cookieHeaders as HeadersInit,
      }
    );
    return data.value!;
  }
  return { getPlants, getPlantsByUserId, getPlantsByCategory };
};
