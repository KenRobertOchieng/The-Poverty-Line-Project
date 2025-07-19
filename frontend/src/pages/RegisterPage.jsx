import React from 'react'
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-blue-100">

            {/*Navigation Bar */}
            <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
                <ul className="flex space-x-6 text-green-900 font-medium">
                    <li><a href="/">Home</a></li>
                    <li><a href="/Dashboard">Dashboard</a></li>
                    <li><a href="/Records">Records</a></li>
                    <li><a href="/ProfilePage">Users</a></li>
                    <li><a href="/LoginPage">Login</a></li>
                    <li><a href="../components/RegisterForm" className="text-green-700 underline">Register</a></li>
                </ul>
            </nav>
             {/* Main Registration Section */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-6">Create Your Account</h2>

          {/* Form Component */}
          <RegisterForm />
        </div>
      </main>
      {/* Footer Section */}
      <footer className="bg-white text-center text-sm py-4 text-gray-500">
        &copy;{newDate().getFullYear()} All rights reserved.
      </footer>

        </div>
    );
};

export default RegisterPage;
