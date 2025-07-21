import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServicesScreen from '../screens/ServicesScreen';

const Stack = createNativeStackNavigator();

const ServicesNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Services" component={ServicesScreen} />
  </Stack.Navigator>
);

export default ServicesNavigator;
