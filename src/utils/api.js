import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nc-news-jm.onrender.com/api',
});

export const getArticles = () => {
  return instance.get('/articles?limit=500').then(({ data }) => {
    return data.articles;
  });
};
