import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(fName, lName, fileName) {
  // const res = Promise.all([signUpUser(fName, lName), uploadPhoto(fileName).catch((err) => err)])
  //   .then((res) => res);
  const res1 = signUpUser(fName, lName).then((res) => ({ status: 'fulfilled', value: res }));
  const res2 = uploadPhoto(fileName).catch((err) => ({ status: 'rejected', value: `Error: ${err.message}` }));
  const prom = Promise.all([res1, res2]);

  return prom;
}
