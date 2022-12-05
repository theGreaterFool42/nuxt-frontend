import { IPost } from '~~/types/IPost';

export const postTransformer = (post: IPost) => {
  return {
    id: post.id,
    text: post.text,
  };
};
