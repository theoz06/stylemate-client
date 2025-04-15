"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import index from "./index.module.css";
import Footer from "@/components/Main/Footer/Footer";
import Main from "@/components/Main/Home";
import MixAndMatch from "@/components/Main/MixAndMatch";
import WarDrobe from "@/components/Main/Wardrobe";
import Profil from "@/components/Main/Profil";
import SplashScreen from "@/components/splashScreen";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { tabPaths, pathToTab } from "@/libs/paths/path";

const Page = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(()=>{
     const currentPath = pathName;
     const mathPath = pathToTab[currentPath];
     
     if (mathPath !== undefined && matchMedia != activeTab){
      setActiveTab(mathPath);
     }
  },[pathName])

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const newPath = tabPaths[tabId];
    if(tabId === 0){
      router.push(`/home`, { shallow: true });
    }else{
      router.push(`?${newPath}`, { shallow: true });
    }

  }


  return (
    <div className={index.container}>
      <main className=" flex items-center justify-center min-h-screen w-full">
        <section
          className={`${index.section_container} h-full w-full `}
        >
          <SplashScreen key={activeTab} tabId={activeTab}>
            {activeTab === 0 && <Main setActiveTab={setActiveTab} />}
            {activeTab === 1 && <MixAndMatch activeTab={activeTab} />}
            {activeTab === 2 && <WarDrobe />}
            {activeTab === 3 && <Profil />}
          </SplashScreen>
        </section>
      </main>
      <Footer activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default Page;
