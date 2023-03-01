const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = `https://api.unsplash.com/search/photos?query=music&page=1&client_id=${API_KEY}`;

export const getImage = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json.results.map((result) => result.urls.full);
};

const unsplashApi = {
  getImage
};

export default unsplashApi;
