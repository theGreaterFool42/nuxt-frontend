import prisma from './client';
import { IPost } from '~~/types/IPost';

export const createPost = (postData: IPost) => {
  return prisma.post.create({
    data: postData,
  });
};
