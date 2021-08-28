import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import Button from '../../components/Button';
import {Colors} from '../../utils/Config';
import TextInputField from '../../components/TextInputField';
import Toast from 'react-native-simple-toast';
import {useSelector, useDispatch} from 'react-redux';
import {createSignUp} from '../../redux/actions/SignUpActions';

const SignUp = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const users = useSelector(state => state);

  const onSignUp = () => {
    if (email == '' || password == '' || confirm_password == '') {
      Toast.show('Please fill all the fields.', Toast.LONG);
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      Toast.show('Please check your email ID', Toast.LONG);
      return;
    }
    if (password != confirm_password) {
      Toast.show('Password Not Maching.', Toast.LONG);
      return;
    }

    let check = users.signup.usersList.reduce((acc, cur, index) => {
      acc = cur.email === email ? true : false;
      return acc;
    }, false);

    if (!check) {
      let data = {
        id: users.signup.usersList.length + 1,
        email: email,
        password: password,
      };
      dispatch(createSignUp(data));
      props.navigation.navigate('Login');
    } else {
      Toast.show('User Already Exists', Toast.LONG);
      return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingText}>
        <Text style={styles.headingTextStyle}>Login With Email</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TextInputField
          placeholder="Email ID"
          keyboardType="email-address"
          onChange={email => setEmail(email)}
        />

        <TextInputField
          keyboardType="default"
          placeholder="Password"
          secure={true}
          onChange={password => setPassword(password)}
        />

        <TextInputField
          keyboardType="default"
          placeholder="Confirm Password"
          secure={true}
          onChange={password => setConfirmPassword(password)}
        />

        <Button
          label="Sign Up"
          onPress={() => onSignUp()}
          styles={{backgroundColor: Colors.secondaryColor}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headingText: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  headingTextStyle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
});

export default SignUp;
