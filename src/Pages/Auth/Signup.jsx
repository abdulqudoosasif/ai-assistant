import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaEye, FaEyeLowVision } from "react-icons/fa6";
import { IoSunny } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/Button/ThemeProvider';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // try {
    //   const response = await fetch('http://127.0.0.1:8000/api/register/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       username,
    //       password,
    //       password2: confirmPassword,
    //       email,
    //       first_name: firstName,
    //       last_name: lastName,
    //     }),
    //   });

    //   if (response.ok) {
        alert('Sign-Up Successful!');
    //   } else {
    //     alert('Sign-Up Failed. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   alert('An error occurred. Please try again.');
    // }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-all ${
        isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-black'
      }`}
    >
      <button
        type="button"
        onClick={toggleDarkMode}
        className="absolute py-1 px-3 top-1 right-1 z-999 rounded-md text-white text-sm font-semibold"
      >
        {isDarkMode ? <IoSunny /> : <BsFillMoonStarsFill className="text-gray-800" />}
      </button>

      {/* Background shapes */}
      <div className="absolute w-[90%] max-w-[430px] h-[520px]">
        <div
          className={`absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full -top-10 -left-10 sm:-top-20 sm:-left-20 ${
            isDarkMode ? 'bg-gradient-to-br from-purple-700 to-indigo-500' : 'bg-gradient-to-br  from-blue-500 to-[#a4acc1]'
          }`}
        ></div>
        <div
          className={`absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full -bottom-10 -right-6 sm:-bottom-20 sm:-right-8 ${
            isDarkMode ? 'bg-gradient-to-r from-purple-700 to-indigo-500' : 'bg-gradient-to-br  to-blue-500 from-[#a4acc1]'
          }`}
        ></div>
      </div>

      {/* Sign-Up Form */}
      <form
        className={`relative w-full max-w-[400px] p-6 sm:p-10 rounded-lg backdrop-blur-md shadow-lg border my-4 ${
          isDarkMode
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white/10 border-white/10'
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">Sign Up</h3>

        <label className="block text-sm font-medium mt-4">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
            isDarkMode
              ? 'bg-gray-700 text-gray-200 border-gray-600'
              : 'bg-white/10 text-black border-[1px]'
          }`}
        />

        <label className="block text-sm font-medium mt-4">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
            isDarkMode
              ? 'bg-gray-700 text-gray-200 border-gray-600'
              : 'bg-white/10 text-black border-[1px]'
          }`}
        />

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

        <button
          type="button"
          onClick={handleSignUp}
          className={`w-full mt-6 py-3 font-semibold rounded-md transition ${
            isDarkMode
              ? 'bg-indigo-600 hover:bg-indigo-500'
              : 'bg-blue-500 text-white hover:bg-gray-700'
          }`}
        >
          Sign Up
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
