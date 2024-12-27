import React, { useState } from "react";

function Setting() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Get the selected file
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://personalai-backend.onrender.com/api/upload/", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
          },
        body: formData,
      });

      if (response.ok) {
        setMessage("File uploaded successfully!");
      } else {
        setMessage("File upload failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Upload PDF File</h1>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="block my-4"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Upload PDF
      </button>
      {message && <p className="mt-4 text-gray-700">{message}</p>}
    </div>
  );
}

export default Setting;
