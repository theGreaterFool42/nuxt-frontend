import formidable from 'formidable';
import { createPost } from '~~/server/database/post';
import { postTransformer } from '~~/server/transformers/post';
import { IPost } from '~~/types/IPost';

export default defineEventHandler(async (event) => {
  const form = formidable({});

  const response = await new Promise((resolve, reject) => {
    form.parse(event.req, (error, fields, files) => {
      if (error) {
        reject(error);
      }
      resolve({ fields, files });
    });
  });

  //TODO: get type of response
  //@ts-ignore
  const { fields, files } = response;

  const userId = event.context?.auth?.user?.id;

  const postData: IPost = {
    text: fields.text,
    userId: userId,
  };

  const post = await createPost(postData);
  return {
    post: postTransformer(post),
  };
});
