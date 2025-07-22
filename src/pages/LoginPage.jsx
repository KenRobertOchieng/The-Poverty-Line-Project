import React from 'react';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  return (
    <div className="login-container">
      <div className="overlay"></div>
      <div className="login-box">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;