export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve('API response data');
    } else {
      reject(new Error('API call failed'));
    }
  });
}
