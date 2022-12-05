// import { IUser } from './../types/IUser';
// import { getUserById } from '~~/server/database/repositories/userRepository';
// // import { defineStore } from 'pinia';
// import { User } from '@prisma/client';

// const baseUrl = `${import.meta.env.API_URL}/auth/sign`;
// export type UserState = {
//   user: IUser;
//   users: IUser[];
// };
// export const useUserStore = defineStore({
//   id: 'users',
//   state: () =>
//     ({
//       user: {} as IUser,
//       users: [],
//     } as UserState),
//   actions: {
//     // async getAll() {
//     //   this.user = { loading: true };
//     //   try {
//     //     this.users = await getAllUsers();
//     //   } catch (error) {
//     //     this.users = { error };
//     //   }
//     // },
//     async getById(id: string) {
//       try {
//         this.user = (await getUserById(id)) as IUser;
//       } catch (error) {
//         //show alert with error
//       }
//     },
//   },
// });
