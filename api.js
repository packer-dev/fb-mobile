import { messageModel, groupModel } from './models';

export const registerAPI = async (param) =>
  fetch('https://api-packer-ui.onrender.com/api/messenger/v1/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(param),
  }).then((res) => res.json());

export const loginAPI = async (param) =>
  fetch('https://api-packer-ui.onrender.com/api/messenger/v1/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
    method: 'POST',
  }).then((res) => res.json());

export const sendMessageAPI = async ({ group, message }) => {
  const body = {
    group: groupModel(group),
    message: messageModel(message),
  };
  fetch('https://api-packer-ui.onrender.com/api/messenger/v1/message/send', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    method: 'POST',
  }).then((res) => res.json());
};
