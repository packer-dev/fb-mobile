import { API_URL } from "../config";

export const getGroupById = async (groupId) => {
  return fetch(`${API_URL}/group/id?group_id=${groupId}`).then((res) =>
    res.json()
  );
};

export const getListGroupByUserId = async (userId) => {
  return fetch(`${API_URL}/message/list?user_id=${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const updateInforGroupByGroup = async (formData) => {
  return fetch(`${API_URL}/group/image`, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
    method: "POST",
  }).then((res) => res.json());
};
