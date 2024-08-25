import { AppProvider } from "./contexts/index";
import Router from "./Router";
import "@expo/metro-runtime";

export default function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}
