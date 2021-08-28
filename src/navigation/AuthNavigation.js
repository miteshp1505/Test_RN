import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigation;
