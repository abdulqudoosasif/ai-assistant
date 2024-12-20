import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import { useTheme } from "../context/Button/ThemeProvider";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const steps = [
    "Personal Profile",
    "Education",
    "Work",
    // "Family and Relationships",
    // "Cars",
    // "Real Estate",
    // "Mortgage",
    // "Health and Fitness",
    // "Travel History",
    // "Travel Memberships",
    // "Personal Preferences",
    // "Celebrations",
    // "Insurance",
  ];

  const formFields = {
    "Personal Profile": [
      { name: "firstName", label: "First Name", placeholder: "John" },
      { name: "lastName", label: "Last Name", placeholder: "Doe" },
      { name: "dob", label: "Date of Birth", placeholder: "YYYY-MM-DD" },
      {
        name: "address",
        label: "Address",
        placeholder: "123 Main St, Houston, TX",
      },
      { name: "phone", label: "Phone", placeholder: "+1-123-456-7890" },
      { name: "email", label: "Email", placeholder: "example@mail.com" },
      { name: "nationality", label: "Nationality", placeholder: "American" },
      {
        name: "languages",
        label: "Languages Spoken",
        placeholder: "English, Spanish",
      },
    ],
    Education: [
      { name: "dateStart", label: "Date Start", placeholder: "YYYY-MM-DD" },
      { name: "dateEnd", label: "Date End", placeholder: "YYYY-MM-DD" },
      {
        name: "name",
        label: "Institution Name",
        placeholder: "University Name",
      },
      { name: "specialty", label: "Specialty", placeholder: "Economics" },
      { name: "degree", label: "Degree", placeholder: "BS, MBA" },
      { name: "address", label: "Address", placeholder: "123 Street Name" },
      { name: "city", label: "City", placeholder: "City Name" },
      { name: "state", label: "State", placeholder: "State Code (e.g., CA)" },
      { name: "zip", label: "ZIP Code", placeholder: "Postal Code" },
      { name: "country", label: "Country", placeholder: "Country Name" },
      {
        name: "phoneNumber",
        label: "Phone Number",
        placeholder: "Phone Number",
      },
    ],
  };

  const handleInputChange = (stepName, fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [stepName]: { ...prev[stepName], [fieldName]: value },
    }));
  };

  const handleNext = async () => {
    const currentStepName = steps[currentStep];
    const currentStepData = formData[currentStepName] || {}; // Current step's data

    // Transform current step data to match the API format
    const apiData = {};
    if (currentStepName === "Personal Profile") {
      apiData.first_name = currentStepData.firstName || "";
      apiData.last_name = currentStepData.lastName || "";
      apiData.date_of_birth = currentStepData.dob || "";
      apiData.address = currentStepData.address || "";
      apiData.phone = currentStepData.phone || "";
      apiData.email = currentStepData.email || "";
      apiData.nationality = currentStepData.nationality || "";
      apiData.languages_spoken = currentStepData.languages || "";
    } else if (currentStepName === "Education") {
      apiData.education = [
        {
          date_start: currentStepData.dateStart || "",
          date_end: currentStepData.dateEnd || "",
          institution_name: currentStepData.name || "",
          specialty: currentStepData.specialty || "",
          degree: currentStepData.degree || "",
          address: currentStepData.address || "",
          city: currentStepData.city || "",
          state: currentStepData.state || "",
          zip_code: currentStepData.zip || "",
          country: currentStepData.country || "",
          phone_number: currentStepData.phoneNumber || "",
        },
      ];
    }

    try {
      const response = await fetch(
        "https://personalai-backend.onrender.com/api/profiles/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(apiData),
        }
      );

      if (response.ok) {
        console.log(`Step ${currentStepName} data submitted successfully.`);
        if (currentStep < steps.length - 1) {
          setCurrentStep((prev) => prev + 1); // Go to next step
        } else {
          alert("Form completed successfully!");
          navigate("/home"); // Redirect on finish
        }
      } else {
        const errorDetails = await response.json();
        console.error(
          `Error submitting step ${currentStepName} data:`,
          errorDetails
        );
        alert(
          `Failed to submit the form: ${
            errorDetails.message || response.statusText
          }`
        );
      }
    } catch (error) {
      console.error(
        `Network error while submitting step ${currentStepName} data:`,
        error
      );
      alert("Network error. Please try again later.");
    }
  };

  const handleSkip = () => {
    navigate("/home");
  };

  return (
    <div
      className={`min-h-screen flex relative items-center justify-center px-4 ${
        isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-black"
      } transition-all`}
    >
      <button
        type="button"
        onClick={toggleDarkMode}
        className="absolute py-1 z-50 px-3 top-1 right-1 rounded-md text-white text-sm font-semibold"
      >
        {isDarkMode ? (
          <IoSunny />
        ) : (
          <BsFillMoonStarsFill className="text-gray-800" />
        )}
      </button>

      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"></div>

      {/* MultiStep Form */}
      <div
        className={`relative w-full max-w-[400px] p-6 sm:p-10 rounded-lg backdrop-blur-md shadow-lg border ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white/10 border-white/10"
        }`}
      >
        <h3 className="text-xl font-semibold text-center mb-6">
          {steps[currentStep]}
        </h3>
        <StepForm
          stepName={steps[currentStep]}
          fields={formFields[steps[currentStep]] || []}
          formData={formData[steps[currentStep]] || {}}
          onInputChange={handleInputChange}
        />
        <div className="flex flex-col mt-6">
          <button
            onClick={handleNext}
            className={`w-full py-2 font-semibold rounded-md ${
              isDarkMode
                ? "bg-indigo-600 hover:bg-indigo-500"
                : "bg-blue-500 text-white hover:bg-gray-700"
            }`}
          >
            {currentStep < steps.length - 1
              ? "Yes, continue to next Step"
              : "Finish"}
          </button>
          <button
            onClick={handleSkip}
            className={`w-full mt-4 py-2 rounded-md ${
              isDarkMode
                ? " border border-white text-white"
                : " border border-black text-black"
            }`}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};
const StepForm = ({ stepName, fields, formData, onInputChange }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div>
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block text-sm font-medium">{field.label}</label>
          <input
            type="text"
            name={field.name}
            value={formData[field.name] || ""}
            onChange={(e) =>
              onInputChange(stepName, field.name, e.target.value)
            }
            placeholder={field.placeholder}
            className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
              isDarkMode
                ? "bg-gray-700 text-gray-200 border-gray-600"
                : "bg-white/10 text-black border-[1px]"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default MultiStepForm;
