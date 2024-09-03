import { API_URL } from "../config";
import { sendXmlHttpRequest } from "../utils";

export const createPost = async (formData) => {
  return sendXmlHttpRequest(`${API_URL}/post`, "POST", formData).then(
    (res) => res
  );
};

export const editPost = async (formData) => {
  return sendXmlHttpRequest(`${API_URL}/post`, "PUT", formData).then(
    (res) => res
  );
};

export const deletePost = async (postId) => {
  return fetch(`${API_URL}/post?post_id=${postId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  }).then((res) => res.json());
};

export const getPostByIdUser = async (userId, isProfile = "true") => {
  return fetch(
    `${API_URL}/post?user_id=${userId}&is_profile=${isProfile}&offset=0&limit=20`
  ).then((res) => res.json());
};

export const getPostById = async (postId) => {
  return fetch(`${API_URL}/post/id?post_id=${postId}`).then((res) =>
    res.json()
  );
};

export const sendFeelPost = async (postId, userId) => {
  return fetch(`${API_URL}/feel?post_id=${postId}&user_id=${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  }).then((res) => res.json());
};

export const getMediaByUserId = async (userId, type, offset = 0, limit = 9) => {
  return fetch(
    `${API_URL}/post/media?user_id=${userId}&type=${type}&offset=${offset}&limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};
