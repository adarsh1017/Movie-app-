// PrivateRoute.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth'; // You need to implement isAuthenticated function

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
