import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login:
        <label htmlFor="name">
          <input type="email" />
        </label>
      </div>);
  }
}

export default Login;
