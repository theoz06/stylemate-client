"use client";

import React, { useEffect } from "react";
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";
import { useState } from "react";
import { IoShirt } from "react-icons/io5";
import "@/styles/loginStyle.css";

const Home = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    name: ""
  });

  const [activeTab, setActiveTab] = useState("login");

  useEffect(()=> {
    if(activeTab === "login"){
      setFormData({
        username: "",
        password: "",
      })
    }else if(activeTab === "register"){
      setFormData({
        password: "",
        email: "",
        name: ""
      })
    }
  },[activeTab]);

  const login = (e) => {
    e.preventDefault();
    console.log("Login! : ", formData);
  };

  const register = (e) => {
    e.preventDefault();
    console.log("Register! : ", formData);
  }

  return (
    <>
      <main className="container-main flex flex-col items-center justify-center min-h-screen w-full">
        <div className="container-main-content flex flex-col items-center justify-center w-full space-y-6">
          <div className="container-logo flex flex-col-reverse items-center justify-center w-full gap-3">
            <h1 className="text-5xl font-semibold text-center">StyleMate</h1>
            <span className="text-8xl p-3 rounded-full bg-gray-200">
              <IoShirt />
            </span>
          </div>

          <div className=" mt-5">
            <div className="container-tabs flex items-end justify-start top-[-24px]">
              <div className="tab-content flex items-center text-lg font-semibold text-center border-x-2 border-t-2 border-gray-200">
                <div className={`cursor-pointer relative ${activeTab == "login" && "activeTab"}`} onClick={() => setActiveTab("login")}>
                  <p className={`tab p-3 ${activeTab === "login"? "activeTa" : "bg-gray-200"}`}>Login</p>
                </div>
                <div className={`cursor-pointer ${activeTab == "register" ? "activeTab " : ""}`} onClick={() => setActiveTab("register")}>
                  <p className={`tab p-3  ${activeTab === "register"? "" : "bg-gray-200"}`}>Register</p>
                </div>
              </div>
              <div>
                <div className="border-b-2 border-gray-200 w-35"></div>
              </div>
            </div>
            <div className=" bg-[#ffffff] w-full rounded-b-lg  shadow-md shadow-gray-200 border-t-0 border-x-2 border-b-2 border-gray-200">
              <form
                className="form flex flex-col items-center justify-center max-w-full gap-6 p-5 "
                onSubmit={login}
              >
                {activeTab === "login" && (<LoginForm formData={formData} setFormData={setFormData} />) }
                {activeTab === "register" && (<RegisterForm formData={formData} setFormData={setFormData} />) }

                <div className="container-button flex flex-col items-center justify-center w-full">
                  <button
                    className="bg-blue-500 text-white p-3 rounded-full w-[60%]"
                    type="button"
                    onClick={activeTab === "login" ? login : register}
                  >
                    {activeTab === "login" ? "Login" : "Register"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
