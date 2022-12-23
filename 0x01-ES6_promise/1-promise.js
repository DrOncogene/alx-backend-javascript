export default function getResponseFromAPI(success) {
  const promise = new Promise(() => {});
  if (success) {
    return promise.then({
      status: 200,
      body: 'Success',
    });
  }
  return promise.catch('The fake API is not working correctly');
}
