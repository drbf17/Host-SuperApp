import { Text } from 'react-native';
import React from 'react';

const ExtratoScreen = React.lazy(() => import('Contas/ExtratoScreen'));


const AccountScreen = () => {
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <ExtratoScreen />
    </React.Suspense>
  );
};

export default AccountScreen;
