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
        alert("Passwords do not match")
    }
}
