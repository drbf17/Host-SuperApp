
/**
 * Host Super App
 * Main App component with Module Federation support and Authentication
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import ErrorBoundary from './navigation/components/ErrorBoundary';
import Placeholder from './navigation/components/Placeholder';

// Lazy load federated modules
const AuthProvider = React.lazy(() => import('Auth/AuthProvider'));
const LoginComponent = React.lazy(() => import('Auth/LoginComponent'));

const App = () => {
  return (
    <ErrorBoundary name="Host App">
      <NavigationContainer>
        <React.Suspense 
          fallback={<Placeholder label="Carregando aplicação..." />}
        >
          <ErrorBoundary name="Auth Provider">
            <AuthProvider>
              {(authState: any) => {
                // Se estiver carregando, mostra placeholder
                if (authState.isLoading) {
                  return <Placeholder label="Verificando autenticação..." />;
                }
                
                // Se não estiver autenticado, mostra tela de login
                if (!authState.isAuthenticated) {
                  return (
                    <ErrorBoundary name="Login Screen">
                      <LoginComponent />
                    </ErrorBoundary>
                  );
                }
                
                // Se estiver autenticado, mostra o app principal
                return (
                  <ErrorBoundary name="Main Navigation">
                    <MainNavigator />
                  </ErrorBoundary>
                );
              }}
            </AuthProvider>
          </ErrorBoundary>
        </React.Suspense>
      </NavigationContainer>
    </ErrorBoundary>
  );
};

export default App;

