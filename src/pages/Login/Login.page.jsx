import React from 'react';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const { login, authenticated } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;
    login(username.value, password.value);
    if (authenticated) {
      history.push('/');
    }
  }

  if (authenticated) return <Redirect to="/" />;

  return (
    <section className="login">
      <h1>Welcome back!</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input required type="text" id="username" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input required type="password" id="password" />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
