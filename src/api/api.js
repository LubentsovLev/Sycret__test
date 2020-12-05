import * as axios from 'axios';
let instance = axios.create({
  baseURL: ``,
});

export const newsApi = {
  getNews() {
    const key = 'e8cc23bcb83d4beba67f5864c366df0d';
    return axios
      .get(`https://newsapi.org/v2/top-headlines?country=ru&apiKey=${key}`)
      .then((data) => {
        console.log('api');
        return data.data.articles;
      });
  },
};
