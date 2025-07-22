import { Text } from 'react-native';
import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';

type HostScreenParams = {
  componentName: string;
  title?: string;
};

type HostScreenRouteProp = RouteProp<{ HostScreen: HostScreenParams }, 'HostScreen'>;

// Mapeamento estático dos componentes disponíveis para evitar imports dinâmicos
const AVAILABLE_COMPONENTS = {
  'Services': React.lazy(() => import('Contas/Services')),
  'SimpleComponent': React.lazy(() => import('Contas/SimpleComponent')),
  'SaldoRoot': React.lazy(() => import('Contas/SaldoRoot')),
  'SaldoTitle': React.lazy(() => import('Contas/SaldoTitle')),
  'SaldoAmount': React.lazy(() => import('Contas/SaldoAmount')),
  'SaldoToggle': React.lazy(() => import('Contas/SaldoToggle')),
  'ExtratoScreen': React.lazy(() => import('Contas/ExtratoScreen')),
  'CartaoTipoScreen': React.lazy(() => import('Contas/CartaoTipoScreen')),
} as const;

type ComponentName = keyof typeof AVAILABLE_COMPONENTS;

const HostScreen = () => {
  const route = useRoute<HostScreenRouteProp>();
  const { componentName, title = 'Carregando...' } = route.params || { componentName: 'Services' };

  // Verificar se o componente existe no mapeamento
  const RemoteScreen = AVAILABLE_COMPONENTS[componentName as ComponentName];

  if (!RemoteScreen) {
    return (
      <Text style={{ textAlign: 'center', marginTop: 50, color: 'red' }}>
        Componente '{componentName}' não encontrado.{'\n'}
        Componentes disponíveis: {Object.keys(AVAILABLE_COMPONENTS).join(', ')}
      </Text>
    );
  }

  return (
    <React.Suspense fallback={<Text style={{ textAlign: 'center', marginTop: 50 }}>{title}</Text>}>
      <RemoteScreen />
    </React.Suspense>
  );
};

export default HostScreen;
