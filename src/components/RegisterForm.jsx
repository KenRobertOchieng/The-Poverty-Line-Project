import React, { useState } from 'react';

const RegisterForm = ({onSubmit, loading, error, success}) => {
    // Local form state
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prev) => ({ ...prev, [name]: value}));
    };

const handleSubmit = (e) => {
    e.preventDefault();

    //Client-side validation
    if (formData.password !== formData.confirmPassword){
        alert("Passwords do not match");
        return;
    }

    // Call the onSubmit prop with form data
    onSubmit({
        full_name: formData.fullName,
        email: formData.email,
        username: formData.username,
        password: formData.password,
    });
};

return (
    <form onSubmit={handleSubmit} style={{
      width: '100%',
    }}>
      {error && (
        <div style={{
          backgroundColor: '#7f1d1d',
          color: '#fecaca',
          padding: '0.75rem',
          borderRadius: '0.375rem',
          marginBottom: '1rem',
          fontSize: '0.875rem'
        }}>
          {error}
        </div>
      )}
      
      {success && (
        <div style={{
          backgroundColor: '#064e3b',
          color: '#a7f3d0',
          padding: '0.75rem',
          borderRadius: '0.375rem',
          marginBottom: '1rem',
          fontSize: '0.875rem'
        }}>
          Registration successful!
        </div>
      )}
      
      {/* Full Name Input */}
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <label 
          htmlFor="fullName" 
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            color: '#D1D5DB',
            fontWeight: '500'
          }}
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
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

      {/* Email Input */}
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <label 
          htmlFor="email" 
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            color: '#D1D5DB',
            fontWeight: '500'
          }}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
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

      {/* Username Input */}
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
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
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

      {/* Password Input */}
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
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
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

      {/* Confirm Password Input */}
      <div style={{
        marginBottom: '1.5rem'
      }}>
        <label 
          htmlFor="confirmPassword" 
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            color: '#D1D5DB',
            fontWeight: '500'
          }}
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
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

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={loading}
        style={{
          width: '100%',
          padding: '0.75rem',
          backgroundColor: '#3B82F6',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          fontSize: '1rem',
          fontWeight: '500',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1,
          transition: 'background-color 0.2s',
          marginBottom: '1rem'
        }}
      >
        {loading ? 'Registering...' : 'Register'}
      </button>
      
      {/* Link to Login */}
      <div style={{
        textAlign: 'center',
        marginTop: '1rem'
      }}>
        <p style={{ 
          fontSize: '0.875rem',
          color: '#D1D5DB'
        }}>
          Already have an account?{' '}
          <a 
            href="/login" 
            style={{
              color: '#3B82F6',
              textDecoration: 'none'
            }}
          >
            Login
          </a>
        </p>
      </div>
    </form>
)
};

export default RegisterForm;
