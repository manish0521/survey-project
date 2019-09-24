import React from 'react';

export default React.createContext({
  handleSignIn: () => {},
  handleSignUp: () => {},
  logout: () => {},
  isAuth: false,
  user: null,
  message: ''
});