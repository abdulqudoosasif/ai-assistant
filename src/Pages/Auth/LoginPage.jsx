import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaEye, FaEyeLowVision } from "react-icons/fa6";
import { IoSunny } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/Button/ThemeProvider';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!username) newErrors.username = 'Username is required.';
    if (!password) newErrors.password = 'Password is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch('https://personalai-backend.onrender.com/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.access);
        navigate('/home');
      } else {
        const errorData = await response.json();
        setServerError( 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setServerError('An error occurred. Please try again.');
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center px-4 transition-all overflow-hidden ${
        isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-black'
      }`}
    >
      <button
        type="button"
        onClick={toggleDarkMode}
        className="absolute py-1 px-3 top-1 right-1 z-50 rounded-md text-white text-sm font-semibold"
      >
        {isDarkMode ? <IoSunny /> : <BsFillMoonStarsFill className="text-gray-800" />}
      </button>

      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"></div>

      {/* Login Form */}
      <form
        className={`relative w-full max-w-[400px] p-6 sm:p-10 rounded-lg backdrop-blur-md shadow-lg border my-4 z-10 ${
          isDarkMode
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white/10 border-white/10'
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">Log In</h3>


        <label className="block text-sm font-medium mt-4">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
            isDarkMode
              ? 'bg-gray-700 text-gray-200 border-gray-600'
              : 'bg-white/10 text-black border-[1px]'
          }`}
        />
        {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}

        <label className="block text-sm font-medium mt-4">Password</label>
        <div className="relative w-full mt-2">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={`w-full p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
              isDarkMode
                ? 'bg-gray-700 text-gray-200 border-gray-600'
                : 'bg-white/10 text-black border-[1px]'
            }`}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
          >
            {showPassword ? <FaEye /> : <FaEyeLowVision />}
          </span>
        </div>
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
           {/* Server Error */}
       {serverError && (
          <p className="text-red-500 mt-1 text-center text-sm">{serverError}</p>
        )}
        <button
          type="button"
          onClick={handleLogin}
          className={`w-full mt-6 py-3 font-semibold rounded-md transition ${
            isDarkMode
              ? 'bg-indigo-600 hover:bg-indigo-500'
              : 'bg-blue-500 text-white hover:bg-gray-700'
          }`}
          disabled={isLoading}
        >
         {isLoading ? 'Loading...' : 'Login'}
        </button>

        <div className="flex justify-between mt-4 text-sm">
          <Link
            to="/forget-password"
            className={`hover:underline ${
              isDarkMode ? 'text-gray-300' : 'text-gray-400'
            }`}
          >
            Forgot Password?
          </Link>
          <Link
            to="/sign-up"
            className={`hover:underline ${
              isDarkMode ? 'text-gray-300' : 'text-gray-400'
            }`}
          >
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
