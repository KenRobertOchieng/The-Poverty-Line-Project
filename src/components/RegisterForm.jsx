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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 rounded-3xl">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full mac-w-sm">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Create account</h2>
            {error && (
                <p className="text-red-500 text-sm text-center mb-2">{error}</p>
            )}
            {success && (
                <p className="text-green-600 text-sm text-center mb-2">
                    Registration successful!
                </p>
            )}
            {/* Full Name Input*/}
            <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                type="text"
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />

            </div>
            {/* Email Input */}
            <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                </div>
            {/* Username Input */}
            <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                </div>
                {/* Password Input */}
                <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                
                />

                    </div>
            {/* Confirm Password Input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            {/*Submit Button*/}
            <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
                {loading ? 'Registering...':'Submit'}
                </button>

                {/*Link to Login */}
                <p className="text-sm text-center mt-3 text-gray-600">
                    Already have an account?{''}
                    <a href="/login" className="text-blue-600 hover:underline">
                    Login
                    </a>
                </p>
        </form>
    </div>
)
};

export default RegisterForm;
