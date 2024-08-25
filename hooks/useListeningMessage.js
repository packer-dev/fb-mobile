import React from 'react';
import { AppContext } from '../contexts/index';
import useSound from './useSound';

const useListeningMessage = (groupId) => {
  const {
    state: { user, socket, messages },
    updateData,
  } = React.useContext(AppContext);
  const { playSound } = useSound();
  const listenChat = (data) => {
    data = JSON.parse(data);
    if (user?.id === data?.message?.user?.id) return;
    playSound();
    updateData('messages', [...messages, data?.message]);
  };
  React.useEffect(() => {
    if (socket && groupId) {
      socket.off(`receive-message-${groupId}`, listenChat);
      socket.on(`receive-message-${groupId}`, listenChat);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, groupId]);
};

export default useListeningMessage;
