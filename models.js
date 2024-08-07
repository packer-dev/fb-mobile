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
  lastTimeActive: obj?.lastTimeActive || "",
});

export const memberModel = (obj) => ({
  id: obj?.id || "",
  nickname: obj?.nickname || "",
  user: obj?.user || null,
  isOwner: obj?.isOwner || false,
});
export const messageModel = (obj) => ({
  id: obj?.id || "",
  content: obj?.content || "",
  user: obj?.user || null,
  time: obj?.time || "",
});
export const groupModel = (obj) => ({
  id: obj?.id || "",
  name: obj?.name || "",
  members: obj?.members || [],
  lastMessage: obj?.lastMessage || null,
  data: obj.data || {},
  timeCreated: obj?.timeCreated || "",
  lastTimeUpdate: obj?.lastTimeUpdate || "",
});
