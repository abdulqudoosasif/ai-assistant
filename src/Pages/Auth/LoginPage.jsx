import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaEye, FaEyeLowVision } from "react-icons/fa6";
import { IoSunny } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../components/Button/ThemeProvider';

const LoginForm = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme(); // Correct usage of useTheme
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Simulated login logic
    navigate('/multi-step-form');
  };

  return (
    <div
      className={`min-h-screen flex relative items-center justify-center px-4 ${
        isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-black'
      } transition-all`}
    >
      <button
        type="button"
        onClick={toggleDarkMode}
        className="absolute py-1 px-3 top-1 right-1 rounded-md text-white text-sm font-semibold"
      >
        {isDarkMode ? <IoSunny /> : <BsFillMoonStarsFill className="text-gray-800" />}
      </button>

      {/* Background shapes */}
      <div className="absolute w-[90%] max-w-[430px] h-[520px]">
        <div
          className={`absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full -top-10 -left-10 sm:-top-20 sm:-left-20 ${
            isDarkMode ? 'bg-gradient-to-br from-purple-700 to-indigo-500' : 'bg-gradient-to-br  from-[#000] to-[#e5ecff]'
          }`}
        ></div>
        <div
          className={`absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full -bottom-10 -right-6 sm:-bottom-20 sm:-right-8 ${
            isDarkMode ? 'bg-gradient-to-r from-purple-700 to-indigo-500' : 'bg-gradient-to-br  to-[#000] from-[#e5ecff]'
          }`}
        ></div>
      </div>

      {/* Login Form */}
      <form
        className={`relative w-full max-w-[400px] p-6 sm:p-10 rounded-lg backdrop-blur-md shadow-lg border ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/10 border-white/10'
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Login Here
        </h3>

        <label className="block text-sm font-medium mt-4">Username</label>
        <input
          type="email"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Email"
          className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
            isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-600' : 'bg-white/10 text-black border-gray-300'
          }`}
        />

        <label className="block text-sm font-medium mt-4">Password</label>
        <div className="relative w-full mt-2">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={`w-full p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
              isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-600' : 'bg-white/10 text-black border-gray-300'
            }`}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className={`absolute inset-y-0 right-3 flex items-center cursor-pointer ${
              isDarkMode ? 'text-gray-200' : 'text-black'
            }`}
          >
            {showPassword ? <FaEye /> : <FaEyeLowVision />}
          </span>
        </div>

        <button
          type="button"
          onClick={handleLogin}
          className={`w-full mt-6 py-3 font-semibold rounded-md transition ${
            isDarkMode ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-black text-white hover:bg-gray-700'
          }`}
        >
          Log In
        </button>

        <div className="flex justify-between mt-4 text-sm">
          <Link
            to="/forget-password"
            className={`hover:underline ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Forgot Password?
          </Link>
          <Link
            to="/sign-up"
            className={`hover:underline ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
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
