import * as React from 'react';
import { getFriendUser, getSuggestFriendByUserId } from '../apis/userAPIs';
import { AppContext } from '../contexts/index';

const useFriend = (status) => {
  const {
    state: { user },
  } = React.useContext(AppContext);
  const [listFriend, setListFriend] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const handleUpdate = (id) => {
    setListFriend([...listFriend].filter((item) => item?.user?.id !== id));
  };
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setListFriend([]);
      let result;
      if (status === 4) {
        result = await getSuggestFriendByUserId(user?.id);
      } else {
        result = await getFriendUser(user?.id, status);
      }
      setListFriend(result);
      setLoading(false);
    };
    user && fetchData();
  }, [user, status]);

  return { listFriend, loading, handleUpdate };
};
export default useFriend;
