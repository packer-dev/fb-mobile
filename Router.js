import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./screens/Main";
import Register from "./screens/Authentication/Register";
import Login from "./screens/Authentication/Login";
import { AppContext } from "./contexts/index";
import * as React from "react";
import Loading from "./components/Loading";
import MessageList from "./screens/MessageList";
import DetailChat from "./screens/DetailChat";
import Pending from "./screens/Pending";
import Story from "./screens/Story";
import Animation from "./screens/Animation";
import Facebook from "./screens/Facebook/index";
import Profile from "./screens/Facebook/Profile/index";
import DetailProfile from "./screens/Facebook/DetailProfile/index";
import Friends from "./screens/Facebook/Friends/index";
import Notifications from "./screens/Facebook/Notifications/index";
import Watchs from "./screens/Facebook/Watchs/index";
import Marketplaces from "./screens/Facebook/Marketplaces/index";
import ToolbarProfile from "./screens/Facebook/ToolbarProfile/index";
import CreatePost from "./screens/Facebook/CreatePost/index";
import DetailPost from "./screens/Facebook/DetailPost/index";
import SearchUser from "./screens/Facebook/SearchUser/index";
import ListFriend from "./screens/Facebook/ListFriend/index";
import SuggestFriend from "./screens/Facebook/SuggestFriend/index";
import StoryDetail from "./screens/Facebook/StoryDetail/index";
import Camera from "./components/Commons/Camera";
import Code from "./screens/Code";
import RequestFriend from "./screens/Facebook/RequestFriend";

const Stack = createNativeStackNavigator();

const Router = () => {
  const {
    state: { loading, popup, panel },
  } = React.useContext(AppContext);
  return (
    <React.Fragment>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            tabBarVisible: false,
          }}
          initialRouteName="Pending"
        >
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Story" component={Story} />
          <Stack.Screen name="Pending" component={Pending} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="MessageList" component={MessageList} />
          <Stack.Screen name="DetailChat" component={DetailChat} />

          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Facebook" component={Facebook} />
          <Stack.Screen name="DetailProfile" component={DetailProfile} />
          <Stack.Screen name="Friends" component={Friends} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Watchs" component={Watchs} />
          <Stack.Screen name="Marketplaces" component={Marketplaces} />
          <Stack.Screen name="ToolbarProfile" component={ToolbarProfile} />
          <Stack.Screen name="Animation" component={Animation} />
          <Stack.Screen name="CreatePost" component={CreatePost} />
          <Stack.Screen name="DetailPost" component={DetailPost} />
          <Stack.Screen name="SearchUser" component={SearchUser} />
          <Stack.Screen name="ListFriend" component={ListFriend} />
          <Stack.Screen name="SuggestFriend" component={SuggestFriend} />
          <Stack.Screen name="RequestFriend" component={RequestFriend} />
          <Stack.Screen name="StoryDetail" component={StoryDetail} />

          <Stack.Screen name="Camera" component={Camera} />
          <Stack.Screen name="Code" component={Code} />
        </Stack.Navigator>
        {loading && <Loading />}
        {panel?.ui?.length > 0 ? panel?.ui?.map((item) => item.ui) : panel?.ui}
        {popup?.map((item, index) => {
          const RenderPopup = item.ui;
          return <RenderPopup {...item} index={index} popupId={item.id} />;
        })}
      </NavigationContainer>
    </React.Fragment>
  );
};

export default Router;
