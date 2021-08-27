import React from 'react';
import AuthNavigation from './AuthNavigation';
import UserNavigation from './UserNavigation';
import {useSelector} from 'react-redux';

const MainNavigation = () => {
  const login = useSelector(state => state.login);
  if (Object.keys(login.data).length !== 0) {
    return <UserNavigation />;
  } else {
    return <AuthNavigation />;
  }
};

export default MainNavigation;
