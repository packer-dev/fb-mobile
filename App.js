import { AppProvider } from './contexts/index';
import 'react-native-url-polyfill/auto';
import Router from './Router';

export default function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}
