import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nc-news-jm.onrender.com/api',
});

export const getArticles = (topic, order, sort_by, author = 'all') => {
  let topicQuery = topic === 'all' ? '' : `&topic=${topic}`;

  const queries = {
    params: { limit: 500, order: order, sort_by: sort_by, author: author },
  };
  if (topic !== 'all') {
    queries.params.topic = topic;
  }

  return instance.get(`/articles`, queries).then(({ data }) => {
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
