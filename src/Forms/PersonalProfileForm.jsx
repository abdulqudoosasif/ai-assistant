import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../context/Button/ThemeProvider";

const API_URL = "https://personalai-backend.onrender.com/api/onboarding/";

const PersonalProfileForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
    nationality: "",
    languages: "",
    education: "",
    workHistory: "",
    hobbies: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useTheme();

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

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.length > 0) {
          const profile = data[0];
          setFormData({
            firstName: profile.first_name || "",
            lastName: profile.last_name || "",
            dob: profile.date_of_birth || "",
            address: profile.address || "",
            phone: profile.phone || "",
            email: profile.email || "",
            nationality: profile.nationality || "",
            languages: profile.languages_spoken || "",
            education: profile.education || "",
            workHistory: profile.work_history || "",
            hobbies: profile.hobbies || "",
          });
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
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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
          first_name: formData.firstName,
          last_name: formData.lastName,
          date_of_birth: formData.dob,
          address: formData.address,
          phone: formData.phone,
          email: formData.email,
          nationality: formData.nationality,
          languages_spoken: formData.languages,
          education: formData.education,
          work_history: formData.workHistory,
          hobbies: formData.hobbies,
        }),
      });

      if (response.ok) {
        console.log("Profile data saved successfully");
        alert("Profile data saved successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error saving profile data:", errorData);
      }
    } catch (error) {
      console.error("Error saving profile data:", error);
    }
  };

  return (
    <div className="fixed mt-[12%] lg:mt-0 md:mt-0 p-3 z-20 inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className={`relative w-full max-w-[400px] max-h-[70vh] overflow-y-auto my-8 p-6 sm:p-10 rounded-lg shadow-lg border ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white"
        }`}
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

        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white">
            <p className="text-black">Loading...</p>
          </div>
        )}

        {!isLoading &&
          Object.entries({
            "First Name": "firstName",
            "Last Name": "lastName",
            "Date of Birth": "dob",
            Address: "address",
            Phone: "phone",
            Email: "email",
            Nationality: "nationality",
            "Languages Spoken": "languages",
            Education: "education",
            "Work History": "workHistory",
            Hobbies: "hobbies",
          }).map(([label, name]) => (
            <div key={name} className="mt-4">
              <label className="block text-sm font-medium">{label}</label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={label}
                className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                  isDarkMode
                    ? "bg-gray-700 text-gray-200 border-gray-600"
                    : "bg-white/10 text-black border-[1px]"
                }`}
              />
            </div>
          ))}

        <button
          type="submit"
          className={`w-full mt-6 py-3 font-semibold rounded-md transition ${
            isDarkMode
              ? "bg-indigo-600 hover:bg-indigo-500"
              : "bg-blue-500 text-white hover:bg-blue-700"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save Profile"}
        </button>
      </form>
    </div>
  );
};

export default PersonalProfileForm;
