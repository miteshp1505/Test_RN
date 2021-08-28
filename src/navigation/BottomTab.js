import React, {useState, useRef} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/user/Home';
import DemoOne from '../screens/user/DemoOne';
import DemoTwo from '../screens/user/DemoTwo';
import Profile from '../screens/user/Profile';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTab = ({navigation, route}) => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </>
  );
};

const BottomTab = ({navigation}) => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showIcon: true,
          tabStyle: {
            backgroundColor: '#F6F7EB',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeTab}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Icon
                name="home"
                size={25}
                color={focused ? '#6558F5' : '#3B4955'}
              />
            ),
            headerShown:false
          }}
        />
        <Tab.Screen
          name="Chat"
          component={DemoOne}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Icon
                name="comment"
                size={25}
                color={focused ? '#6558F5' : '#3B4955'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Folder"
          component={DemoTwo}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Icon
                name="folder"
                size={25}
                color={focused ? '#6558F5' : '#3B4955'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Icon
                name="user"
                size={25}
                color={focused ? '#6558F5' : '#3B4955'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTab;
