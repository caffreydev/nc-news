import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nc-news-jm.onrender.com/api',
});

export const getArticles = () => {
  return instance.get('/articles?limit=500').then(({ data }) => {
    return data.articles;
  });
};

export const getArticle = (articleId) => {
  return instance.get(`/articles/${articleId}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (articleId) => {
  return instance
    .get(`/articles/${articleId}/comments?limit=500`)
    .then(({ data }) => {
      return data.comments;
    });
};
