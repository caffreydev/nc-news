import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nc-news-jm.onrender.com/api',
});

export const getArticles = (topic, order, sort_by) => {
  let topicQuery = topic === 'all' ? '' : `&topic=${topic}`;
  const orderQuery = `&order=${order}`;
  const sortQuery = `&sort_by=${sort_by}`;
  return instance
    .get(`/articles?limit=500${topicQuery}${orderQuery}${sortQuery}`)
    .then(({ data }) => {
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

export const changeArticleVote = (articleId, value) => {
  return instance.patch(`/articles/${articleId}`, {
    inc_votes: value,
  });
};

export const getTopics = () => {
  return instance.get('/topics').then(({ data }) => data.topics);
};

export const postComment = (articleId, commentBody) => {
  return instance.post(`/articles/${articleId}/comments`, commentBody);
};

export const deleteComment = (commentId) => {
  return instance.delete(`/comments/${commentId}`);
};

export const getUsers = () => {
  return instance.get('/users').then(({ data }) => {
    return data.users;
  });
};
