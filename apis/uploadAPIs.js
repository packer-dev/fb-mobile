import { API_URL } from '../config';

export const uploadMedia = async (formData) => {
  return fetch(
    `${API_URL}/upload/media`,
    {
      headers: {
        'content-type': 'multipart/form-data',
      },
      method: 'POST',
      body: formData,
    }
  ).then((res) => res.json());
};
