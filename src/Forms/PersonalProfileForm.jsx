import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const API_URL = "https://personalai-backend.onrender.com/api/profiles/";

const PersonalProfileForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    address: "",
    phone: "",
    email: "",
    nationality: "",
    languages_spoken: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setFormData(data);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          date_of_birth: formData.date_of_birth,
          address: formData.address,
          phone: formData.phone,
          email: formData.email,
          nationality: formData.nationality,
          languages_spoken: formData.languages_spoken,
        }),
      });

      if (response.ok) {
        alert("Profile data saved successfully!");
      } else {
        console.error("Error saving profile data:", await response.json());
      }
    } catch (error) {
      console.error("Error saving profile data:", error);
    }
  };

  return (
    <div className="fixed mt-[12%] lg:mt-0 md:mt-0 p-3 z-20 inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-[400px] max-h-[70vh] overflow-y-auto my-8 p-6 sm:p-10 rounded-lg shadow-lg border bg-white"
      >
        <button
          onClick={onClose}
          className="absolute top-2 left-2 border-2 w-fit rounded-sm hover:bg-red-600 hover:text-white"
        >
          <IoClose size={20} />
        </button>

        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Personal Profile
        </h3>

        {isLoading ? (
          <div className="absolute inset-0 flex justify-center items-center bg-white">
            <p className="text-black">Loading...</p>
          </div>
        ) : (
          <>
{/* First Name */}
<div className="mt-4">
  <label className="block text-sm font-medium">First Name</label>
  <input
    type="text"
    name="first_name"
    value={formData.first_name}
    onChange={handleChange}
    placeholder="First Name"
    className="w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 bg-white/10 text-black border-[1px]"
  />
</div>

{/* Last Name */}
<div className="mt-4">
  <label className="block text-sm font-medium">Last Name</label>
  <input
    type="text"
    name="last_name" // Add the correct name attribute
    value={formData.last_name}
    onChange={handleChange}
    placeholder="Last Name"
    className="w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 bg-white/10 text-black border-[1px]"
  />
</div>

{/* Date of Birth */}
<div className="mt-4">
  <label className="block text-sm font-medium">Date of Birth</label>
  <input
    type="date"
    name="date_of_birth" // Correct the name attribute
    value={formData.date_of_birth}
    onChange={handleChange}
    className="w-full mt-2 p-3 rounded-md outline-none text-sm bg-white/10 text-black border-[1px]"
  />
</div>

            {/* Address */}
            <div className="mt-4">
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 bg-white/10 text-black border-[1px]"
              />
            </div>

            {/* Phone */}
            <div className="mt-4">
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 bg-white/10 text-black border-[1px]"
              />
            </div>

            {/* Email */}
            <div className="mt-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 bg-white/10 text-black border-[1px]"
              />
            </div>

            {/* Nationality */}
            <div className="mt-4">
              <label className="block text-sm font-medium">Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Nationality"
                className="w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 bg-white/10 text-black border-[1px]"
              />
            </div>

            {/* Languages Spoken */}
            <div className="mt-4">
              <label className="block text-sm font-medium">Languages Spoken</label>
              <input
                type="text"
                name="languages_spoken"
                value={formData.languages_spoken}
                onChange={handleChange}
                placeholder="Languages"
                className="w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 bg-white/10 text-black border-[1px]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 py-3 font-semibold rounded-md transition bg-blue-500 text-white hover:bg-blue-700"
            >
              Save Profile
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default PersonalProfileForm;
