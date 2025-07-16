import React from 'react'

function LoginForm() {
  return (
    <div className='login-container'>
        <div className='login-header'>
            <h2>Poverty Line</h2>
            <p className='welcoming-text'> A step towards eradicating poverty</p>
            <div className='divider-container'>
                <div className='divider-line' ></div>
            </div>
        </div>
        <form className='login-form'>
            <div className='form-group'>
                <label htmlFor="username or email address" className='form-label'>Username or email address</label>
                <input type="text" id='username or email'  name='username or email' placeholder='Enter username or email' className='form-input'/>
                    </div>
        </form>
    </div>
  )
}

export default LoginForm