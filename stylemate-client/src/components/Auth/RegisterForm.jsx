import React from "react";

const RegisterForm = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full pt-5 space-y-6">
      <input
        autoComplete="off"
        type="text"
        name="name"
        value={formData.name || ""}
        onChange={handleInputChange}
        placeholder="Name"
        className="bg-gray-200 p-3 rounded-full h-[3rem] focus:outline-offset-2 focus:outline-2 focus:outline-gray-400"
      />
      <input
        autoComplete="off"
        type="email"
        name="email"
        value={formData.email || ""}
        onChange={handleInputChange}
        placeholder="Email"
        className="bg-gray-200 p-3 rounded-full h-[3rem] focus:outline-offset-2 focus:outline-2 focus:outline-gray-400"
      />
      <input
        autoComplete="off"
        type="password"
        name="password"
        value={formData.password || ""}
        onChange={handleInputChange}
        placeholder="Password"
        className="bg-gray-200 p-3 rounded-full h-[3rem]  focus:outline-offset-2 focus:outline-2 focus:outline-gray-400"
      />
    </div>
  );
};

export default RegisterForm;
