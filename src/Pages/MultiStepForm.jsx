import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import { useTheme } from "../components/Button/ThemeProvider";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const steps = [
    "Personal Profile",
    "Family and Relationships",
    "Daily Schedule and Tasks",
    "Communication",
    "Financial Information",
    "Health and Fitness",
    "Travel",
    "Personal Preferences",
    "Digital Data",
    "Professional Information",
    "Recent Updates",
    "Contextual and Historical Information",
    "Security and Preferences",
    "Entertainment and Leisure",
    "Learning and Growth",
    "Smart Home Integration",
    "Assets",
    "Insurance",
  ];

  const formFields = {
    "Personal Profile": [
      { name: "fullName", label: "Full Name", placeholder: "John Doe" },
      { name: "dob", label: "Date of Birth", placeholder: "YYYY-MM-DD" },
      { name: "address", label: "Address", placeholder: "123 Main St" },
      { name: "phone", label: "Phone", placeholder: "+1-123-456-7890" },
      { name: "email", label: "Email", placeholder: "example@mail.com" },
      { name: "nationality", label: "Nationality", placeholder: "American" },
      { name: "languages", label: "Languages Spoken", placeholder: "English, Spanish" },
      { name: "education", label: "Education", placeholder: "MBA, University of Texas" },
      { name: "workHistory", label: "Work History", placeholder: "Manager at ABC Corp" },
      { name: "hobbies", label: "Hobbies", placeholder: "Cooking, Hiking, Soccer" },
    ],
    "Family and Relationships": [
      { name: "name", label: "Name", placeholder: "Jane Doe" },
      { name: "relationship", label: "Relationship", placeholder: "Spouse" },
      { name: "birthday", label: "Birthday", placeholder: "YYYY-MM-DD" },
      { name: "notes", label: "Notes", placeholder: "Likes yoga and travel" },
    ],
    "Daily Schedule and Tasks": [
      { name: "date", label: "Date", placeholder: "YYYY-MM-DD" },
      { name: "time", label: "Time", placeholder: "9:00 AM" },
      { name: "event", label: "Event", placeholder: "Dentist Appointment" },
      { name: "notes", label: "Notes", placeholder: "For Liam" },
    ],
    "Communication": [
      { name: "contactName", label: "Contact Name", placeholder: "Jane Doe" },
      { name: "relation", label: "Relation", placeholder: "Spouse" },
      { name: "phone", label: "Phone", placeholder: "+1-123-456-7890" },
      { name: "email", label: "Email", placeholder: "jane.doe@example.com" },
    ],
    "Financial Information": [
      { name: "item", label: "Item", placeholder: "Mortgage Payment" },
      { name: "monthlyAmount", label: "Monthly Amount", placeholder: "$2,500" },
      { name: "notes", label: "Notes", placeholder: "30-year loan, 3.5%" },
    ],
    "Health and Fitness": [
      { name: "healthGoals", label: "Current Health Goals", placeholder: "Lose 5 lbs" },
      { name: "allergies", label: "Allergies", placeholder: "None" },
      { name: "medications", label: "Medications", placeholder: "Vitamin D Supplement" },
    ],
    "Travel": [
      { name: "destination", label: "Destination", placeholder: "Orlando, FL" },
      { name: "dates", label: "Dates", placeholder: "YYYY-MM-DD to YYYY-MM-DD" },
      { name: "notes", label: "Notes", placeholder: "Family vacation to Disney" },
    ],
    "Personal Preferences": [
      { name: "type", label: "Type", placeholder: "Restaurant" },
      { name: "favoriteItem", label: "Favorite Item", placeholder: "Tex-Mex Grill" },
    ],
    "Digital Data": [
      { name: "device", label: "Device", placeholder: "Laptop" },
      { name: "type", label: "Type", placeholder: "MacBook Pro" },
      { name: "notes", label: "Notes", placeholder: "Work device" },
    ],
    "Professional Information": [
      { name: "currentRole", label: "Current Role", placeholder: "Project Manager, XYZ Inc" },
      { name: "certifications", label: "Certifications", placeholder: "PMP, Six Sigma" },
    ],
    "Recent Updates": [
      { name: "date", label: "Date", placeholder: "YYYY-MM-DD" },
      { name: "update", label: "Update", placeholder: "Bought a new car" },
    ],
    "Contextual and Historical Information": [
      { name: "event", label: "Event", placeholder: "Wedding Anniversary" },
      { name: "date", label: "Date", placeholder: "YYYY-MM-DD" },
      { name: "notes", label: "Notes", placeholder: "Celebrate with dinner" },
    ],
    "Security and Preferences": [
      { name: "field", label: "Field", placeholder: "Emergency Contact" },
      { name: "value", label: "Value", placeholder: "Jane Doe" },
    ],
    "Entertainment and Leisure": [
      { name: "field", label: "Field", placeholder: "Favorite Game" },
      { name: "value", label: "Value", placeholder: "FIFA 2024" },
    ],
    "Learning and Growth": [
      { name: "learningGoal", label: "Current Learning Goal", placeholder: "Learn Python Programming" },
      { name: "courses", label: "Courses Enrolled", placeholder: "DataCamp: Python Basics" },
    ],
    "Smart Home Integration": [
      { name: "device", label: "Device", placeholder: "Thermostat" },
      { name: "type", label: "Type", placeholder: "Nest Thermostat" },
      { name: "notes", label: "Notes", placeholder: "Auto temperature control" },
    ],
    "Assets": [
      { name: "assetType", label: "Asset Type", placeholder: "Home" },
      { name: "description", label: "Description", placeholder: "4-bedroom house" },
      { name: "datePurchased", label: "Date Purchased", placeholder: "YYYY-MM-DD" },
      { name: "purchasePrice", label: "Purchase Price", placeholder: "$350,000" },
    ],
    "Insurance": [
      { name: "type", label: "Type", placeholder: "Home" },
      { name: "provider", label: "Provider", placeholder: "State Farm" },
      { name: "policyNumber", label: "Policy Number", placeholder: "12345ABC" },
      { name: "startDate", label: "Start Date", placeholder: "YYYY-MM-DD" },
      { name: "premium", label: "Premium", placeholder: "$150" },
      { name: "coverageDetails", label: "Coverage Details", placeholder: "Fire, Theft, Flood" },
    ],
  };

  const handleInputChange = (stepName, fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [stepName]: { ...prev[stepName], [fieldName]: value },
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      alert("All steps completed!");
      console.log("Form Data:", formData);
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
        {isDarkMode ? <IoSunny /> : <BsFillMoonStarsFill className="text-gray-800" />}
      </button>

      {/* Background shapes */}
      <div className="absolute w-[90%] max-w-[430px] h-[520px]">
        <div
          className={`absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full -top-10 -left-10 sm:-top-20 sm:-left-20 ${
            isDarkMode
              ? "bg-gradient-to-br from-purple-700 to-indigo-500"
              : "bg-gradient-to-br from-[#000] to-[#e5ecff]"
          }`}
        ></div>
        <div
          className={`absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full -bottom-10 -right-6 sm:-bottom-20 sm:-right-8 ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-700 to-indigo-500"
              : "bg-gradient-to-br to-[#000] from-[#e5ecff]"
          }`}
        ></div>
      </div>

      {/* MultiStep Form */}
      <div
        className={`relative w-full max-w-[400px] p-6 sm:p-10 rounded-lg backdrop-blur-md shadow-lg border ${
          isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white/10 border-white/10"
        }`}
      >
        <h3 className="text-xl font-semibold text-center mb-6">{steps[currentStep]}</h3>
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
                : "bg-black text-white hover:bg-gray-700"
            }`}
          >
            {currentStep < steps.length - 1 ? "Yes, continue to next Step" : "Finish"}
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
            onChange={(e) => onInputChange(stepName, field.name, e.target.value)}
            placeholder={field.placeholder}
            className={`w-full p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
              isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-600' : 'bg-white/10 text-black border-gray-300'
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default MultiStepForm;
