import React from "react";

const RegisterForm = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-3 space-y-6">
      <input
        type="text"
        name="name"
        value={formData.name || ""}
        onChange={handleInputChange}
        placeholder="Name"
        className="bg-gray-200 p-3 rounded-full h-[3rem] w-60 focus:outline-offset-2 focus:outline-2 focus:outline-gray-400"
      />
      <input
        type="email"
        name="email"
        value={formData.email || ""}
        onChange={handleInputChange}
        placeholder="email"
        className="bg-gray-200 p-3 rounded-full h-[3rem] w-60 focus:outline-offset-2 focus:outline-2 focus:outline-gray-400"
      />
      <input
        type="password"
        name="password"
        value={formData.password || ""}
        onChange={handleInputChange}
        placeholder="Password"
        className="bg-gray-200 p-3 rounded-full h-[3rem] w-60 focus:outline-offset-2 focus:outline-2 focus:outline-gray-400"
      />
    </div>
  );
};

export default RegisterForm;
