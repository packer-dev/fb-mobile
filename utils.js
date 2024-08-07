export const validateEmail = ({ value }) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(value) ? '' : 'Email invalid.';
};

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const formatDate = (date: Date) => {
  let day = String(date.getDate()).padStart(2, '0');
  let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  let year = date.getFullYear();
  let hours = String(date.getHours()).padStart(2, '0');
  let minutes = String(date.getMinutes()).padStart(2, '0');
  let seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

const getRandomName = () => {
  const firstNames = ['Lâm', 'Anh', 'Khoa', 'Minh', 'Tú', 'Vy', 'Huy', 'Linh'];
  const lastNames = [
    'Nguyễn',
    'Trần',
    'Lê',
    'Phạm',
    'Huỳnh',
    'Hoàng',
    'Vũ',
    'Đặng',
  ];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${firstName} ${lastName}`;
};

const removeAccents = (str) => {
  var AccentsMap = [
    'aàảãáạăằẳẵắặâầẩẫấậ',
    'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
    'dđ',
    'DĐ',
    'eèẻẽéẹêềểễếệ',
    'EÈẺẼÉẸÊỀỂỄẾỆ',
    'iìỉĩíị',
    'IÌỈĨÍỊ',
    'oòỏõóọôồổỗốộơờởỡớợ',
    'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
    'uùủũúụưừửữứự',
    'UÙỦŨÚỤƯỪỬỮỨỰ',
    'yỳỷỹýỵ',
    'YỲỶỸÝỴ',
  ];
  for (var i = 0; i < AccentsMap.length; i++) {
    var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
    var char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
};

const getRandomEmail = (name) => {
  const emailProviders = ['example.com', 'mail.com', 'inbox.com', 'email.com'];
  const provider =
    emailProviders[Math.floor(Math.random() * emailProviders.length)];
  const cleanName = removeAccents(name.toLowerCase().replace(' ', '.'));
  const email = cleanName + '@' + provider;
  return email;
};

export const ramdomUser = () => {
  const randomName = getRandomName();
  const randomEmail = getRandomEmail(randomName);
  return {
    email: randomEmail,
    name: randomName,
  };
};

export const emojiList = [
  '💌',
  '💘',
  '💝',
  '💖',
  '💗',
  '💓',
  '💞',
  '💕',
  '💟',
  '❣️',
  '💔',
  '❤️‍🔥',
  '❤️‍🩹',
  '❤️',
  '🩷',
  '🧡',
  '💛',
  '💚',
  '💙',
  '🩵',
  '💜',
  '🤎',
  '🖤',
  '🩶',
  '🤍',
  '💋',
  '💯',
  '💢',
  '💥',
  '💦',
  '💨',
  '🕳️',
  '💬',
  '👁️‍🗨️',
  '🗨️',
  '🗯️',
  '💭',
  '💤',
  '🔴',
  '🟠',
  '🟡',
  '🟢',
  '🔵',
  '🟣',
  '🟤',
  '⚫',
  '⚪',
  '🟥',
  '🟧',
  '🟨',
  '🟩',
  '🟦',
  '🟪',
  '🟫',
  '⬛',
  '⬜',
  '◼️',
  '◻️',
  '◾',
  '◽',
  '▪️',
  '▫️',
  '🔶',
  '🔷',
  '🔸',
  '🔹',
  '🔺',
  '🔻',
  '💠',
  '🔘',
  '🔳',
  '🔲',
];
