
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabNavigator from '../../home/navigation/HomeTabNavigator';
import ContaServicesScreen from '../../conta/ContaScreen';
import HostScreen from '../../external/HostScreen';


export type MainStackParamList = {
  HomeTabs: undefined;
  ContaServices: undefined;
  HostContainer: {
    componentName: string;
    title?: string;
  };
};

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen name="HomeTabs" component={HomeTabNavigator} />
      <Main.Screen name="ContaServices" component={ContaServicesScreen} />
      <Main.Screen name="HostContainer" component={HostScreen} />
    </Main.Navigator>
  );
};

export default MainNavigator;
