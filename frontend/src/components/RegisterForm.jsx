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
    <form 
    onSubmit = {handleSubmit}
    className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-md mx-auto mt-10"
>
    <h2 className = "text-2xl font-bold text-green-700 text-center">Create Account</h2>
    {/*Feedback messages*/}
    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    {success && <p className="text-green-500 text-sm text-center">Registration successful!</p>}

    {/*Form inputs*/}
    <input
    type = "text"
    name = "fullName"
    placeholder="Full Name"
    value={formData.fullName}
    onChange={handleChange}
    required
    className="w-full px-4 py-2 border rounded-md"
    />
    <input
    type = "email"
    name = "email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
    required
    className="w-full px-4 py-2 border rounded-md"
    />
   </form> 
);
};
