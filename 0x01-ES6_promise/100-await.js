/* eslint-disable no-unused-vars */
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let obj;
  try {
    obj = {
      photo: await uploadPhoto().then((res) => res),
      user: await createUser().then((res) => res),
    };
  } catch (err) {
    obj = { photo: null, user: null };
  }
  if (!obj.photo || !obj.user) return { photo: null, user: null };

  return obj;
}
