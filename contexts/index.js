import * as React from "react";
import io from "socket.io-client";

const init = {
  showKeyboard: false,
  messages: [],
  socket: io.connect("https://server-socket-zrlh.onrender.com/").connect(),
  popup: {
    ui: null,
    payload: {},
  },
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
};

const AppContext = React.createContext(init);

const reducer = (state, { key, type, value }) => {
  switch (type) {
    case "UPDATE_DATA":
      return { ...state, [key]: value };
    default:
      return { ...state };
  }
};

const AppProvider = ({ children }) => {
  //
  const [state, dispatch] = React.useReducer(reducer, init);
  //
  return (
    <AppContext.Provider
      value={{
        state,
        updateData: (key, value) => dispatch(updateData(key, value)),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const updateData = (key, value) => {
  return {
    type: "UPDATE_DATA",
    key,
    value,
  };
};

export { AppContext, AppProvider };
