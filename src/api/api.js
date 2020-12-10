import * as axios from 'axios';
let instance = axios.create({
  baseURL: ``,
});
let key = 'f4yQzYnbxNMKohKTB2Jv7Tr4zqHZ6YPrL3gC9Kb4';
export const newsApi = {
  getNews() {
    const key = 'e8cc23bcb83d4beba67f5864c366df0d';
    return (
      axios
        // .get(`https://newsapi.org/v2/top-headlines?country=ru&apiKey=${key}`)
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=f4yQzYnbxNMKohKTB2Jv7Tr4zqHZ6YPrL3gC9Kb4&start_date=2020-10-10&end_date=2020-12-10`
        )
        .then((data) => {
          return data.data;
        })
    );
  },
};
