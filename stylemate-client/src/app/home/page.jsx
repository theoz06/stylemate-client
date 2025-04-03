"use client";

import React from "react";
import { useState } from "react";
import index from "./index.module.css";
import Footer from "@/components/Main/Footer/Footer";
import Main from "@/components/Main/Home";
import MixAndMatch from "@/components/Main/MixAndMatch";
import WarDrobe from "@/components/Main/Wardrobe";
import Profil from "@/components/Main/Profil";


const Page = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={index.container}>
      <main className="flex items-center justify-center min-h-screen w-full">
        <section className={`${index.section_container} h-full w-full flex justify-center items-center`}>
          {activeTab === 0 && <Main setActiveTab={setActiveTab}/>}
          {activeTab === 1 && <MixAndMatch />}
          {activeTab === 2 && <WarDrobe />}
          {activeTab === 3 && <Profil />}
        </section>
      </main>
      <Footer activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Page;
