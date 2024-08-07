import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screens/Main';
import Register from './screens/Authentication/Register';
import Login from './screens/Authentication/Login';
import { AppContext } from './contexts/index';
import * as React from 'react';
import Loading from './components/Loading';
import MessageList from './screens/MessageList';
import DetailChat from './screens/DetailChat';
import Pending from './screens/Pending';
import Story from './screens/Story';
import Facebook from './screens/Facebook/index';
import Profile from './screens/Facebook/Profile/index';
import DetailProfile from './screens/Facebook/DetailProfile/index';
import Friends from './screens/Facebook/Friends/index';
import Notifications from './screens/Facebook/Notifications/index';
import Watchs from './screens/Facebook/Watchs/index';
import Marketplaces from './screens/Facebook/Marketplaces/index';
import ToolbarProfile from './screens/Facebook/ToolbarProfile/index';

const Stack = createNativeStackNavigator();

const Router = () => {
  const {
    state: { loading, popup, user },
  } = React.useContext(AppContext);
  React.useEffect(() => {}, [user]);
  return (
    <React.Fragment>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            tabBarVisible: false,
          }}
          initialRouteName="ToolbarProfile">
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
        </Stack.Navigator>
      </NavigationContainer>
      {loading && <Loading />}
      {popup.ui && popup.ui}
    </React.Fragment>
  );
};

export default Router;
