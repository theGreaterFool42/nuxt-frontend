// import { IUser } from '~~/types/IUser';
// import { defineStore } from 'pinia';
// export const useAuthStore = defineStore({
//   id: 'auth',
//   state: () => ({
//     // TODO: check if I want SSR. If so, I need to change this
//     user: JSON.parse(localStorage.getItem('user')!) as IUser | null,
//   }),
//   actions: {
//     async signIn(user: IUser) {
//       try {
//         this.user = user;
//         localStorage.setItem('user', JSON.stringify(user));
//       } catch (error) {
//         //show alert with error
//       }
//     },
//     signOut() {
//       this.user = null;
//       localStorage.removeItem('user');
//       useRouter().push('/sign/authPage');
//     },
//   },
// });
