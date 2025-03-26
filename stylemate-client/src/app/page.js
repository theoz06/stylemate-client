"use client";

import LoginForm from "@/components/Auth/LoginForm";
import { useState } from "react";
import { IoShirt } from "react-icons/io5";

const Home = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    console.log("Login! : ", formData);
  };

  return (
    <main className="container-main flex flex-col items-center justify-center min-h-screen w-full">
      <div className="container-main-content flex flex-col items-center justify-center w-full space-y-6">
        <div className="container-logo flex flex-col-reverse items-center justify-center w-full gap-3">
          <h1 className="text-5xl font-semibold text-center">StyleMate</h1>
          <span className="text-8xl p-3 rounded-full bg-gray-200">
            <IoShirt />
          </span>
        </div>

        {/* Form */}
        <form
          className="container-form flex flex-col items-center justify-center w-full gap-6"
          onSubmit={login}
        >
          <LoginForm formData={formData} setFormData={setFormData} />

          <div className="container-button flex flex-col items-center justify-center w-full">
            <button className="bg-blue-500 text-white p-3 rounded-full" type="button" onClick={login}>
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Home;
