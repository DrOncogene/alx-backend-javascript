import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(fName, lName, fileName) {
  return Promise.all([signUpUser(fName, lName), uploadPhoto(fileName).catch((err) => err)]);
}
