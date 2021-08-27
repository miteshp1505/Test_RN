import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Colors} from '../utils/Config';

const TextInputField = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputs}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        underlineColorAndroid="transparent"
        secureTextEntry={props.secure ? true : false}
        onChangeText={val => props.onChange(val)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.textBackgroundColor,
    borderBottomColor: '#F5FCFF',
    borderRadius: 5,
    borderBottomWidth: 1,
    width: '80%',
    height: 50,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 50,
    marginLeft: 16,
    flex: 1,
    textAlign: 'left',
  },
});

export default TextInputField;
