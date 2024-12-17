import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../context/Button/ThemeProvider";

const MortgageForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    financialInstitution: "",
    monthlyAmount: "",
    notes: "",
    date: "",
    period: "",
    propertyCost: "",
    downPercent: "",
    downAmount: "",
    loanAmount: "",
    rate: "",
    apr: "",
    monthlyPayment: "",
    upfrontCost: "",
    originationFee: "",
    underwritingFee: "",
    pointsPaid: "",
    processingFee: "",
    otherLoanFees: "",
    creditReport: "",
    floodCertification: "",
  });

  const { isDarkMode } = useTheme();

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Loan Form Data:", formData);
  };

  return (
    <div className="fixed p-3 mt-[12%] lg:mt-0 md:mt-0 z-20 inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className={`relative w-full max-w-[600px] h-[700px] overflow-y-auto my-8 p-6 sm:p-10 rounded-lg shadow-lg border ${
          isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Loan Information Form
        </h3>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 left-2 border-2 w-fit rounded-sm hover:bg-red-600 hover:text-white"
        >
          <IoClose size={20} />
        </button>

        {/* Input Fields */}
        {[
          { label: "Financial Institution", field: "financialInstitution", type: "text" },
          { label: "Monthly Amount", field: "monthlyAmount", type: "number" },
          { label: "Notes", field: "notes", type: "text" },
          { label: "Date", field: "date", type: "date" },
          { label: "Period", field: "period", type: "number" },
          { label: "Property Cost", field: "propertyCost", type: "number" },
          { label: "Down (%)", field: "downPercent", type: "number" },
          { label: "Down ($)", field: "downAmount", type: "number" },
          { label: "Loan Amount", field: "loanAmount", type: "number" },
          { label: "Rate", field: "rate", type: "number" },
          { label: "APR", field: "apr", type: "number" },
          { label: "Monthly Payment", field: "monthlyPayment", type: "number" },
          { label: "Upfront Cost", field: "upfrontCost", type: "number" },
          { label: "Origination Fee", field: "originationFee", type: "number" },
          { label: "Underwriting Fee", field: "underwritingFee", type: "number" },
          { label: "Points Paid", field: "pointsPaid", type: "number" },
          { label: "Processing Fee", field: "processingFee", type: "number" },
          { label: "Other Loan Fees", field: "otherLoanFees", type: "number" },
          { label: "Credit Report", field: "creditReport", type: "number" },
          { label: "Flood Certification", field: "floodCertification", type: "number" },
        ].map(({ label, field, type }) => (
          <div key={field} className="mt-4">
            <label className="block text-sm font-medium">{label}</label>
            <input
              type={type}
              value={formData[field]}
              onChange={(e) => handleChange(field, e.target.value)}
              placeholder={label}
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
          </div>
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full mt-6 py-3 font-semibold rounded-md transition ${
            isDarkMode
              ? "bg-indigo-600 hover:bg-indigo-500"
              : "bg-black text-white hover:bg-gray-700"
          }`}
        >
          Save Loan Information
        </button>
      </form>
    </div>
  );
};

export default MortgageForm;
