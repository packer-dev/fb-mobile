import * as React from 'react';
import { View } from 'react-native';
import tailwind from '../../tailwind';
import { AppContext } from '../../contexts/index';
import Sender from './Sender';
import CurrentUser from './CurrentUser';

const Content = () => {
  const {
    state: { messages, user },
  } = React.useContext(AppContext);
  return (
    <View style={tailwind(`flex-col gap-3 py-3`)}>
      {messages?.map((message) =>
        message?.user?.id === user?.id ? (
          <CurrentUser message={message} key={message?.id} />
        ) : (
          <Sender message={message} key={message?.id} />
        )
      )}
    </View>
  );
};

export default Content;
