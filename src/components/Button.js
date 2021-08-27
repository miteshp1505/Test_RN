import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../utils/Config';
const Button = props => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, props.styles]}
      onPress={() => props.onPress()}>
      <Text style={styles.loginText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '80%',
    borderRadius: 5,
  },
  loginText: {
    color: Colors.primaryColor,
    fontSize: 17,
  },
});

export default Button;
