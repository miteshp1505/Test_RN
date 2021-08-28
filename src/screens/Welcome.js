import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import {Colors} from '../utils/Config';
import Button from '../components/Button';

const Welcome = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.primaryColor,
      }}>
      <View style={{height: '60%'}}>
        <Swiper
          style={styles.wrapper}
          containerStyle={{backgroundColor: Colors.primaryColor}}
          showsButtons={false}>
          <View style={styles.slideStyle}>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={styles.imageStyle}
            />
            <Text style={styles.text}>OnBoarding Slider 1</Text>
          </View>
          <View style={styles.slideStyle}>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={styles.imageStyle}
            />
            <Text style={styles.text}>OnBoarding Slider 2</Text>
          </View>
          <View style={styles.slideStyle}>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={styles.imageStyle}
            />
            <Text style={styles.text}>OnBoarding Slider 3</Text>
          </View>
        </Swiper>
      </View>
      <View style={{...styles.centerAlign, marginTop: 20}}>
        <Button
          label="Login With Facebook"
          onPress={() => alert('Coming Soon')}
          styles={{backgroundColor: Colors.thirdColor}}
        />
      </View>
      <View style={{...styles.centerAlign, marginTop: 10}}>
        <Button
          label="Sign In"
          onPress={() => props.navigation.navigate('Login')}
          styles={{backgroundColor: Colors.secondaryColor}}
        />
      </View>
      <View
        style={{
          ...styles.centerAlign,
          flexDirection: 'row',
          marginTop: 5,
        }}>
        <Text style={{fontSize: 16, color: '#8E8E8E'}}>
          Don't have an account ?
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Sign UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
  },
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.thirdColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  signUpText: {
    fontSize: 16,
    color: '#3B5A9A',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default Welcome;
