import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";
import { AppProvider } from "./contexts/index";
import Router from "./Router";
import "@expo/metro-runtime";
import { AppRegistry } from "react-native";

const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

const ConnectedApp = connectActionSheet(App);

const AppContainer = () => {
  return (
    <ActionSheetProvider>
      <ConnectedApp />
    </ActionSheetProvider>
  );
};

export default AppRegistry.registerComponent(AppContainer);
