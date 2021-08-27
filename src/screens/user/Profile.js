import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Config';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../../components/Button';
import {signOut} from '../../redux/actions/LoginActions';

const Profile = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.login);

  const onLogout = () => {
    dispatch(signOut({}));
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.centerAlign}>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={styles.imageStyle}
        />
        <Text style={styles.text}>{login.data.email}</Text>
        <Button
          label="Logout"
          onPress={() => onLogout()}
          styles={{backgroundColor: Colors.secondaryColor, marginTop: 50}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    marginTop: 20,
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
  },
  text: {
    color: Colors.thirdColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
