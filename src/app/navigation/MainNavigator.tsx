
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ErrorBoundary from './components/ErrorBoundary';
import Placeholder from './components/Placeholder';

// Lazy load federated modules
const Home = React.lazy(() => import('Home/App'));

export type MainStackParamList = {
  HomeApp: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

// Componente separado para evitar função inline
const HomeRoot = () => (
  <ErrorBoundary name="Home Module">
    <React.Suspense 
      fallback={<Placeholder label="Carregando Home..." />}
    >
      <Home />
    </React.Suspense>
  </ErrorBoundary>
);

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeRoot"
        component={HomeRoot}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
