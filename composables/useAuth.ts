import { JwtPayload } from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';
import { ISignUp } from '~~/types/ISignUp';
import { IUser } from '~~/types/IUser';

export default () => {
  const useAuthToken = () => useState('auth_token');
  const useAuthUser = () => useState('auth_user');
  const useAuthLoading = () => useState('auth_loading', () => true);

  const setToken = (newToken: string) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };

  const setUser = (newUser: IUser) => {
    const authUser = useAuthUser();
    authUser.value = newUser;
  };

  const setIsAuthLoading = (isLoading: boolean) => {
    const authLoading = useAuthLoading();
    authLoading.value = isLoading;
  };

  const signIn = (username: string, password: string) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await $fetch('/api/auth/sign/in', {
          method: 'POST',
          body: { username, password },
        });
        setToken(response.access_token);
        setUser(response.user);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };
  const signUp = (signUpRequest: ISignUp) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await $fetch('/api/auth/sign/up', {
          method: 'POST',
          body: {
            name: signUpRequest.name,
            username: signUpRequest.username,
            email: signUpRequest.email,
            password: signUpRequest.password,
            repeatPassword: signUpRequest.repeatPassword,
          },
        });
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const refreshSessionToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await $fetch('/api/auth/refresh');

        setToken(response.access_token as string);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi('/api/auth/user');
        //@ts-ignore
        setUser(response!.user);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const refreshSession = () => {
    const authToken = useAuthToken();
    if (!authToken.value) {
      return;
    }
    const jwt = jwt_decode(authToken.value as string) as JwtPayload;
    const newRefreshTime = jwt.exp! - 60000;

    //if session token still valid and the user is logged in, send a new one
    setTimeout(async () => {
      await refreshSessionToken();
      refreshSession();
    }, 300000);
  };

  const initAuth = () => {
    return new Promise(async (resolve, reject) => {
      setIsAuthLoading(true);
      try {
        await refreshSessionToken();
        await getUser();
        refreshSession();
        resolve(true);
      } catch (error) {
        reject(error);
      } finally {
        setIsAuthLoading(false);
      }
    });
  };

  return {
    signIn,
    signUp,
    useAuthUser,
    useAuthToken,
    useAuthLoading,
    initAuth,
  };
};
