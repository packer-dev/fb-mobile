import React from 'react';
import { generateUUID } from '../utils';
import { AppContext } from '../contexts/index';

const useListeningMessage = () => {
  const {
    state: { socket, messages },
    updateData,
  } = React.useContext(AppContext);
  const listenChat = (data) => {
    updateData('messages', [
      ...messages,
      {
        id: generateUUID(),
        content: "This is auto message. Please don't reply again.",
        user: {
          avatar: '',
          email: 'lion.pham@gmail.com',
          id: '6d89945b-60ac-41af-a3fa-17e977038f19',
          lastTimeActive: '',
          name: 'Lion Pham',
          password: 'd5077bcc9cf4851ac86ea4fccbc66c9a',
        },
        type: 'sender',
      },
    ]);
  };
  React.useEffect(() => {
    if (socket) {
      socket.off('receive', listenChat);
      socket.on(`receive`, listenChat);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);
};

export default useListeningMessage;
