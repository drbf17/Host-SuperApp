import { Text } from 'react-native';
import React from 'react';

const ContaServices = React.lazy(() => import('Contas/Services'));


const ContaServicesScreen = () => {
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <ContaServices />
    </React.Suspense>
  );
};

export default ContaServicesScreen;
