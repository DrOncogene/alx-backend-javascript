import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return {
    photo: await uploadPhoto()
      .then((res) => res)
      .catch(() => null),
    user: await createUser()
      .then((res) => res)
      .catch(() => null),
  };
}
