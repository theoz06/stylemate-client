"use client";

import React, { useEffect } from "react";
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";
import { useState } from "react";
import { IoShirt } from "react-icons/io5";
import "@/styles/loginStyle.css";
import { redirect, useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
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
    redirect("/home");
  };

  const register = (e) => {
    e.preventDefault();
    console.log("Register! : ", formData);
  }

  return (
    <>
      <main className="container-main flex flex-col items-center justify-center min-h-screen w-full" >
        <div className="container-main-content flex flex-col items-center justify-center w-full space-y-6">
          <div className="container-logo flex flex-col-reverse items-center justify-center w-full gap-3">
            <h1 className="text-5xl font-semibold text-center  ">StyleMate</h1>
            <span className="text-8xl p-3 rounded-full bg-gray-200">
              <IoShirt />
            </span>
          </div>

          <div className="md:w-1/2 lg:w-1/3 mt-3">
            <div className=" bg-[#ffffff] w-full rounded-lg  shadow-2xl shadow-gray-400 p-5">
              <form
                method="POST"
                className="form flex flex-col items-center justify-center gap-6  "
                onSubmit={activeTab === "login" ? login : register}
              >
                {activeTab === "login" && (<LoginForm formData={formData} setFormData={setFormData} />) }
                {activeTab === "register" && (<RegisterForm formData={formData} setFormData={setFormData} />) }

                <div className="container-button flex flex-col items-center justify-center w-full space-y-3">
                  <button
                    className="bg-blue-500 text-white p-3 rounded-full w-[60%] lg:w-[50%] hover:bg-blue-600 transition-all duration-300 ease-in-out"
                    type="button"
                    onClick={activeTab === "login" ? login : register}
                  >
                    {activeTab === "login" ? "Login" : "Register"}
                  </button>
                  <p className="text-center text-gray-500">Or</p>
                  <p>
                    {activeTab === "login"? "Don't have an account?" : "Already have an account?"}
                    <span>  </span>
                    <span className="relative text-blue-500 cursor-pointer font-semibold hover:underline" onClick={() => setActiveTab(activeTab === "login" ? "register" : "login")}>
                      
                        {activeTab === "login" ? "Register" : "Login"} .
                    </span>
                  </p>
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
