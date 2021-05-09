import React from 'react';


export const LoginScreen = ({history}) => {

  const handleLogin = () => {
    // history.push('/');
    history.replace('/');
  }

  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  )
}
