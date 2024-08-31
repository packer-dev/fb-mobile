import { getCurrentDateTime } from "./utils";

export const loginDTO = (obj) => ({
  email: obj?.email || "",
  password: obj?.password || "",
});

export const userModel = (obj) => ({
  id: obj?.id || "",
  name: obj?.name || "",
  email: obj?.email || "",
  password: obj?.password || "",
  avatar: obj?.avatar || "",
  cover: obj?.cover || getCurrentDateTime(),
  last_time_active: obj?.last_time_active || getCurrentDateTime(),
  time_created: obj?.time_created || getCurrentDateTime(),
  bio: obj?.bio || "",
});

export const memberModel = (obj) => ({
  id: obj?.id || "",
  nickname: obj?.nickname || "",
  user: userModel(obj?.user),
  is_owner: obj?.is_owner || false,
});

export const messageModel = (obj) => ({
  id: obj?.id || "",
  content: obj?.content || null,
  user: userModel(obj?.user),
  time_created: obj?.time_created || getCurrentDateTime(),
});

export const groupModel = (obj) => ({
  id: obj?.id || "",
  name: obj?.name || "",
  members: obj?.members
    ? obj?.members?.map((item) => ({ ...item, user: userModel(item?.user) }))
    : [],
  last_message: messageModel(obj?.last_message) || null,
  data: obj.data || {
    color: "",
    emoji: "",
  },
  time_created: obj?.time_created || getCurrentDateTime(),
  last_time_update: obj?.last_time_update || getCurrentDateTime(),
  image: obj?.image || "",
  seen: obj?.seen || {},
});

export const postModel = (obj) => ({
  id: obj?.id || "",
  user: userModel(obj?.user),
  content: obj?.content || { text: "", media: [] },
  time_created: obj?.time_created || getCurrentDateTime(),
  last_time_update: obj?.last_time_update || "",
  type: obj?.type || 0,
  tags: obj?.tags || [],
  feel: obj?.feel || "",
});

export const mediaModel = (obj) => ({
  id: obj?.id || "",
  url: obj?.url || "",
  status: obj?.status || 0,
  type: obj?.type || 0, // 1 for image, 2 for video
  folder: obj?.folder || "",
});

export const feelModel = (obj) => ({
  id: obj?.id || "",
  user: userModel(obj?.user),
  post: postModel(obj?.post),
  type: obj?.type || 0,
});

export const commentModel = (obj) => ({
  id: obj?.id || "",
  user: userModel(obj?.user),
  content: obj?.content || "",
  time_created: obj?.time_created || getCurrentDateTime(),
  last_time_update: obj?.last_time_update || getCurrentDateTime(),
  level: obj?.level || 0,
  parent: obj?.parent || "",
});

export const postResponseModel = ({ post, medias, feel }) => ({
  post: postModel(post),
  medias: [...medias].map((item) => mediaModel(item)),
  feel,
});
