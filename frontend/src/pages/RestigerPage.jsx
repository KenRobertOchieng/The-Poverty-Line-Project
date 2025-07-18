import React from 'react'
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-blue-100">

            {/*Navigation Bar */}
            <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
                <ul className="flex space-x-6 text-green-900 font-medium">
                    <li><a href="/">Home</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>

                    <li><a href="/login">Login</a></li>
                    <li></li>
                </ul>
            </nav>
        </div>
    )
}
