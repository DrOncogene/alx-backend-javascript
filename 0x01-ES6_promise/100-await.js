/* eslint-disable no-unused-vars */
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return {
    photo: await uploadPhoto()
      .then((res) => res)
      .catch((err) => null),
    user: await createUser()
      .then((res) => res)
      .catch((err) => null),
  };
}
