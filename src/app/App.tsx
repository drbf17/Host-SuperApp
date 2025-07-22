
/**
 * Host Super App
 * Main App component with Module Federation support
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import ErrorBoundary from './navigation/components/ErrorBoundary';
import Placeholder from './navigation/components/Placeholder';

// Lazy load federated modules
const HomeApp = React.lazy(() => import('Home/App'));

const App = () => {
  return (
    <ErrorBoundary name="Host App">
      <NavigationContainer>
        <React.Suspense 
          fallback={<Placeholder label="Carregando aplicação..." />}
        >
          <ErrorBoundary name="Main Navigation">
            <MainNavigator />
          </ErrorBoundary>
        </React.Suspense>
      </NavigationContainer>
    </ErrorBoundary>
  );
};

export default App;

