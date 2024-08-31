import { API_URL } from "../config";
import { groupModel } from "../models";

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

export const updateGroupById = async (group) => {
  return fetch(`${API_URL}/group`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: groupModel(group),
    method: "PUT",
  }).then((res) => res.json());
};
