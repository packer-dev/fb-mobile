import { API_URL } from '../config';

export const sendComment = async (formData) => {
  return fetch(`${API_URL}/comment`, {
    headers: {
      'content-type': 'multipart/form-data',
    },
    body: formData,
    method: 'POST',
  }).then((res) => res.json());
};

export const deleteComment = async (postId, commentId) => {
  return fetch(
    `${API_URL}/comment?post_id=${postId}&comment_id=${commentId}`,
    {
      method: 'DELETE',
    }
  ).then((res) => res.json());
};

export const getCommentByPost = async (postId) => {
  return fetch(
    `${API_URL}/comment/id?post_id=${postId}`
  ).then((res) => res.json());
};
