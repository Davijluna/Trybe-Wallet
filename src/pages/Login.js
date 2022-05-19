import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login:
        <label htmlFor="name">
          <input type="email" data-testid="email-input" />

          <input type="password" data-testid="password-input" />

        </label>
      </div>);
  }
}

export default Login;
