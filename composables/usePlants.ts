export default () => {
  const useAuthCookie = () => useCookie('refresh_token');
  const getPlants = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const authCookie = useAuthCookie().value;
        const cookieHeaders = useRequestHeaders(['refresh_token']);
        const response = await useFetch('/api/user/plant', {
          // headers: cookieHeaders as HeadersInit,
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };
  return { getPlants };
};
