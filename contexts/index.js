import { node } from "prop-types";
import * as React from "react";
import io from "socket.io-client";

const init = {
  showKeyboard: false,
  messages: [],
  socket: io.connect("http://192.168.1.11:4444/").connect(),
  popup: [],
  panel: {
    ui: null,
    payload: {},
  },
  user: null,
  groups: [],
  loading: false,
  friends: [],
  groupCurrent: null,
  list_post: [],
  visit: null,
  trigger: {
    suggestFriend: null,
    cancelRelationship: null,
    profileRelationship: null,
    postHome: null,
    postProfile: null,
  },
  peerConnection: null,
  isCalling: {
    status: false,
    groupId: null,
  },
};

const AppContext = React.createContext(init);

const reducer = (state, { key, type, value }) => {
  switch (type) {
    case "UPDATE_DATA":
      return { ...state, [key]: value };
    case "UPDATE_DATA1":
      return { ...state, [key]: value };
    case "UPDATE_DATA2":
      return { ...state, [key]: value };
    default:
      return { ...state };
  }
};

const AppProvider = ({ children }) => {
  //
  const [state, dispatch] = React.useReducer(reducer, init);
  const value = React.useMemo(
    () => ({
      state,
      updateData: (key, value) => dispatch(updateData(key, value)),
    }),
    [state]
  );
  //
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: node,
};

const updateData = (key, value) => {
  return {
    type: "UPDATE_DATA",
    key,
    value,
  };
};

export { AppContext, AppProvider };
