import { API_URL } from '../config';

export const getUserById = async (userId) => {
  return fetch(`${API_URL}/user/id?user_id=${userId}`).then((res) =>
    res.json()
  );
};

export const registerAPI = async (param) =>
  fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(param),
  }).then((res) => res.json());

export const loginAPI = async (param) =>
  fetch(`${API_URL}/login`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
    method: 'POST',
  }).then((res) => res.json());

export const updateUser = async (user) => {
  return fetch(`${API_URL}/user`, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(user),
  }).then((res) => res.json());
};

export const getFriendsByUserId = async (userId) => {
  return fetch(`${API_URL}/friends?user_id=${userId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

export const getSuggestFriendByUserId = async (userId) => {
  return fetch(`${API_URL}/suggest-friend?user_id=${userId}`).then((res) =>
    res.json()
  );
};

export const sendRelationship = async (body) => {
  return fetch(`${API_URL}/relationship`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    method: 'POST',
  }).then((res) => res.json());
};

export const checkRelationship = async (user1, user2) => {
  return fetch(`${API_URL}/relationship?user1=${user1}&user2=${user2}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

export const getFriendUser = async (userId, status) => {
  return fetch(`${API_URL}/users?user_id=${userId}&status=${status}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

export const updateProfileUser = async (formData) => {
  return fetch(`${API_URL}/upload-profile`, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
    method: 'POST',
  }).then((res) => res.json());
};
