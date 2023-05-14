import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home/Home';
import { TaskContextProvider } from './src/context/TaskContext';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    </>
  );
}
