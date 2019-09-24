import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuth === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/sign-in" />
      )
    }
  />
);

export default PrivateRoute
