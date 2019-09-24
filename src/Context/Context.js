import React from 'react';

export default React.createContext({
  handleSignIn: () => {},
  handleSignUp: () => {},
  logout: () => {},
  handleResults: () => {},
  isAuth: false,
  user: null,
  message: ''
});