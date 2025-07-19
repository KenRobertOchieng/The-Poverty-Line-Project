<<<<<<< HEAD
import React from 'react';

const LoginPage = () => {
  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Login Page</h1>
      <p>Please log in to continue.</p>
    </div>
  );
};
=======
import React from 'react'
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
>>>>>>> master

export default LoginPage;
