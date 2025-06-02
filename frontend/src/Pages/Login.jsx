import React, { useState } from 'react';
import api from '../Services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', formData);
      alert('Login successful');
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f5f2] to-[#fffaf6] px-4 py-12">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-semibold text-center text-[#C39A66] mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded outline-[#C39A66]"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded outline-[#C39A66]"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#C39A66] text-white py-2 rounded hover:bg-[#b08655] transition"
          >
            Login
          </button>
          <p className="text-sm text-center mt-2">
            Don't have an account? <span className="text-[#C39A66] cursor-pointer" onClick={() => navigate('/register')}>Register</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
