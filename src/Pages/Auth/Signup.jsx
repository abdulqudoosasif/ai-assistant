import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaEye, FaEyeLowVision } from 'react-icons/fa6';
import { IoSunny } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/Button/ThemeProvider';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const validateForm = () => {
    const newErrors = {};

    if (!username) newErrors.username = 'Username is required.';
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password)) {
      newErrors.password = 'Password must be at least 8 characters and include uppercase, lowercase, and a number.';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Step 1: Signup the user
      const signupResponse = await fetch('https://personalai-backend.onrender.com/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          password2: confirmPassword,
          email,
        }),
      });

      if (!signupResponse.ok) {
        const errorData = await signupResponse.json();
        alert(errorData.message || 'User may already exist.');
        setIsLoading(false);
        return;
      }

     
      const loginResponse = await fetch('https://personalai-backend.onrender.com/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (loginResponse.ok) {
        const loginData = await loginResponse.json();
        
        localStorage.setItem('token', loginData.access);
        alert('Signup successful and logged in!');
        navigate('/multi-step-form'); 
      } else {
        alert('Signup successful, but auto-login failed. Please log in manually.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
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

      {/* Sign-Up Form */}
      <form
        className={`relative w-full max-w-[400px] p-6 sm:p-10 rounded-lg backdrop-blur-md shadow-lg border my-4 z-10 ${
          isDarkMode
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white/10 border-white/10'
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">Sign Up</h3>

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

        <label className="block text-sm font-medium mt-4">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
            isDarkMode
              ? 'bg-gray-700 text-gray-200 border-gray-600'
              : 'bg-white/10 text-black border-[1px]'
          }`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

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

        <label className="block text-sm font-medium mt-4">Confirm Password</label>
        <div className="relative w-full mt-2">
          <input
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
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
        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}

        <button
          type="button"
          onClick={handleSignUp}
          className={`w-full mt-6 py-3 font-semibold rounded-md transition ${
            isDarkMode
              ? 'bg-indigo-600 hover:bg-indigo-500'
              : 'bg-blue-500 text-white hover:bg-gray-700'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>

        <div className="flex justify-between mt-4 text-sm">
          <Link
            to="/"
            className={`hover:underline ${
              isDarkMode ? 'text-gray-300' : 'text-gray-400'
            }`}
          >
            Already have an account? Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
