import { API_URL } from "../config";

export const getMessageMain = async (userId, currentId) => {
  return fetch(
    `${API_URL}/message/get-child?user_id=${userId}&current_id=${currentId}`
  ).then((res) => res.json());
};

export const getMessageListByIdUser = async (userId) => {
  return fetch(`${API_URL}/message/list?user_id=${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getAmountMessage = async (userId) => {
  return fetch(`${API_URL}/message/status?user_id=${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const updateStatusMessage = async (groupId, userId) => {
  return fetch(
    `${API_URL}/message/update?group_id=${groupId}&user_id=${userId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};
