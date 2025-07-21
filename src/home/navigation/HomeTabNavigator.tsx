import React from 'react';
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation';
import HomeNavigator from './HomeNavigator';
import AccountNavigator from './AccountNavigator';
import ServicesNavigator from './ServicesNavigator';

export type HomeTabParamList = {
  HomeNavigator: undefined;
  AccountNavigator: undefined;
  ServicesNavigator: undefined;
};

const Tab = createNativeBottomTabNavigator<HomeTabParamList>();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="AccountNavigator"
        component={AccountNavigator}
        options={{ title: 'Account' }}
      />
      <Tab.Screen
        name="ServicesNavigator"
        component={ServicesNavigator}
        options={{ title: 'Services' }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
