import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/user/Home';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="BottomTab">
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </>
  );
};

export default UserNavigation;
