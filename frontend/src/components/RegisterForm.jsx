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
    <div className="min-h-screen flex items-center justify-center"
)
};
