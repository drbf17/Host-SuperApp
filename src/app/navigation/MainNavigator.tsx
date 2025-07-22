
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ErrorBoundary from './components/ErrorBoundary';
import Placeholder from './components/Placeholder';

// Lazy load federated modules
const HomeTabNavigator = React.lazy(() => import('Home/App'));

export type MainStackParamList = {
  HomeTabs: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeTabs"
        component={() => (
          <ErrorBoundary name="Home Module">
            <React.Suspense 
              fallback={<Placeholder label="Carregando Home..." />}
            >
              <HomeTabNavigator />
            </React.Suspense>
          </ErrorBoundary>
        )}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
