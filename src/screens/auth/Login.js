import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import Button from '../../components/Button';
import {Colors} from '../../utils/Config';
import TextInputField from '../../components/TextInputField';
import {loginDetails} from '../../redux/actions/LoginActions';
import {useSelector, useDispatch} from 'react-redux';
import Toast from 'react-native-simple-toast';

const Login = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.signup);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
    console.log('Login');
    if (email == '' || password == '') {
      Toast.show('Please fill all the fields.', Toast.LONG);
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      Toast.show('Please check your email ID', Toast.LONG);
      return;
    }

    let check = user.usersList.reduce((acc, cur, index) => {
      if (cur.email === email) {
        if (cur.password === password) {
          cur.status = true;
          cur.message = 'Login Success';
          acc = cur;
        } else {
          acc = {
            message: 'Wrong Password',
            status: false,
          };
        }
      }
      return acc;
    }, {});
    if (Object.keys(check).length !== 0) {
      if (check.status) {
        Toast.show(check.message, Toast.LONG);
        await dispatch(loginDetails(check));
        props.navigation.navigate('BottomTab');
      } else {
        Toast.show(check.message, Toast.LONG);
        return;
      }
    } else {
      Toast.show('User Not Found.', Toast.LONG);
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

        <Button
          label="Sign In"
          onPress={() => onLogin('Login')}
          styles={{backgroundColor: Colors.secondaryColor}}
        />

        <TouchableHighlight
          style={{...styles.buttonContainer}}
          onPress={() => alert('Coming Soon')}>
          <Text style={{color: 'grey'}}>Forgot your password?</Text>
        </TouchableHighlight>
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

export default Login;
