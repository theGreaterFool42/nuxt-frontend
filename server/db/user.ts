import bcrypt from 'bcrypt';
import prisma from '.';

export const createUser = (userData: any) => {
  // const finalUserData = {
  //   ...userData,
  //   password: bcrypt.hashSync(userData.password, 10),
  // };
  // return prisma.user.create({
  //   data: finalUserData,
  // });
};

export const register = async (username: string) => {
  console.log(username);
  try {
    const res = await $fetch<unknown>('url', {
      method: 'POST',
      body: { username },
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
