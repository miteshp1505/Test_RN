import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaView style={{}}>
      <StatusBar />
      <Text>App Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
