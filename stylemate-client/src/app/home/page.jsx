"use client";

import React from "react";
import { useState } from "react";
import index from "./index.module.css";
import { IoMdHome } from "react-icons/io";
import Footer from "@/components/Main/Footer/Footer";
import Main from "@/components/Main/Home";
import MixAndMatch from "@/components/Main/MixAndMatch";
import WarDrobe from "@/components/Main/Wardrobe";
import Profil from "@/components/Main/Profil";


const Page = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={index.container}>
      <main className="flex items-center justify-center min-h-screen w-full bg-[#ffffff]">
        {activeTab === 0 && (
          <div>
            <Main />
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <MixAndMatch />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <WarDrobe />
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <div>Profil</div>
          </div>
        )}  
      </main>
      <Footer activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Page;
