import React from 'react';

function LoginForm() {
  return (
    <form style={{
      width: '100%',
    }}>
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <label 
          htmlFor="username" 
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            color: '#D1D5DB',
            fontWeight: '500'
          }}
        >
          Username or email address
        </label>
        <input
          type="text"
          id="username"
          name="username"
          defaultValue="admin"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#374151',
            color: 'white',
            border: '1px solid #4B5563',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            outline: 'none'
          }}
        />
      </div>

      <div style={{
        marginBottom: '1.5rem'
      }}>
        <label 
          htmlFor="password" 
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            color: '#D1D5DB',
            fontWeight: '500'
          }}
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          defaultValue="••••••••"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#374151',
            color: 'white',
            border: '1px solid #4B5563',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            outline: 'none'
          }}
        />
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1.5rem'
      }}>
        <input 
          type="checkbox" 
          id="rememberMe" 
          name="rememberMe" 
          style={{
            marginRight: '0.5rem',
            accentColor: '#3B82F6'
          }} 
        />
        <label 
          htmlFor="rememberMe" 
          style={{
            fontSize: '0.875rem',
            color: '#D1D5DB'
          }}
        >
          Remember me
        </label>
      </div>

      <button 
        type='submit' 
        style={{
          width: '100%',
          padding: '0.75rem',
          backgroundColor: '#3B82F6',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          fontSize: '1rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
          marginBottom: '1rem'
        }}
      >
        Log in
      </button>
      
      <div style={{
        textAlign: 'center',
        marginBottom: '1rem'
      }}>
        <a 
          href="#" 
          style={{
            color: '#3B82F6',
            fontSize: '0.875rem',
            textDecoration: 'none'
          }}
        >
          Forgot password?
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
