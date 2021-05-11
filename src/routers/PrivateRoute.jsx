import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
  isAuthenticate,
  component: Component,
  ...rest
}) => {

  localStorage.setItem('lastPath', rest.location.pathname);

  return (
    <Route {...rest}
      component={ (props) => (
        (isAuthenticate)
          ? (<Component {...props} />)
          : (<Redirect to='/login' />)
      )}
    />
  )
}

PrivateRoute.propTypes = {
  isAuthenticate: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}