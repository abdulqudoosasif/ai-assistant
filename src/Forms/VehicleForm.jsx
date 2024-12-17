import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../context/Button/ThemeProvider";

const VehicleForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    vin: "",
    licensePlate: "",
    last5Vin: "",
    datePurchased: "",
    odometerPurchased: "",
    purchasePrice: "",
    rate: "",
    downPayment: "",
    financed: "",
    monthlyPayment: "",
    creditDuration: "",
    sellDate: "",
    sellPrice: "",
    odometerSold: "",
    cashAfterLoanRepayment: "",
    loss: "",
    depreciation: "",
    periodOwned: "",
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
    console.log("Form Data:", formData);
  };

  return (
    <div className="fixed p-3 z-20 inset-0 mt-[12%] lg:mt-0 md:mt-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className={`relative w-full max-w-[400px] max-h-[70vh] overflow-y-auto my-8 p-6 sm:p-10 rounded-lg shadow-lg border ${
          isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Vehicle Information Form
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
          { label: "Make", field: "make", type: "text" },
          { label: "Model", field: "model", type: "text" },
          { label: "Year", field: "year", type: "number" },
          { label: "VIN", field: "vin", type: "text" },
          { label: "License Plate", field: "licensePlate", type: "text" },
          { label: "Last 5 Digits of VIN", field: "last5Vin", type: "text" },
          { label: "Date Purchased", field: "datePurchased", type: "date" },
          {
            label: "Odometer When Purchased",
            field: "odometerPurchased",
            type: "number",
          },
          {
            label: "Total Purchase Price (incl. Fees and Taxes)",
            field: "purchasePrice",
            type: "number",
          },
          { label: "% Rate", field: "rate", type: "number" },
          { label: "Down Payment", field: "downPayment", type: "number" },
          { label: "Financed", field: "financed", type: "number" },
          { label: "Monthly Payment", field: "monthlyPayment", type: "number" },
          {
            label: "Credit Duration (Months)",
            field: "creditDuration",
            type: "number",
          },
          { label: "Sell Date", field: "sellDate", type: "date" },
          { label: "Sell Price", field: "sellPrice", type: "number" },
          { label: "Odometer Sold", field: "odometerSold", type: "number" },
          {
            label: "Cash Received After Loan Repayment",
            field: "cashAfterLoanRepayment",
            type: "number",
          },
          { label: "Loss", field: "loss", type: "number" },
          { label: "Depreciation (%)", field: "depreciation", type: "number" },
          {
            label: "Period Owned (Years)",
            field: "periodOwned",
            type: "number",
          },
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
          Save Vehicle Information
        </button>
      </form>
    </div>
  );
};

export default VehicleForm;
