"use client";

import React, { useState } from "react";
import footer from "@/components/Home/Footer/footer.module.css";
import { IoMdHome } from "react-icons/io";
import { IoShirt } from "react-icons/io5";
import { RiAiGenerate } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";


const Footer = () => {
  const [activeTab, setActiveTab] = useState(0);
  

  const tabs = [
    {
      id: 0,
      icon: <IoMdHome />,
      label: "Home",
    },
    {
      id: 1,
      icon: <RiAiGenerate />,
      label: "Mix & Match",
    },
    {
      id: 2,
      icon: <IoShirt />,
      label: "Wardrobe",
    },
    {
      id: 3,
      icon: <MdManageAccounts />,
      label: "Settings",
    },
  ];

  return (
    <footer className={footer.footer}>
      <div
        className={`footer-content  relative w-[700px]  flex justify-around items-center text-center `}
      >
        {tabs.map((tab, id) => (
          <button
            key={id}
            className={`${footer.tab} ${
              activeTab === tab.id ? footer.active_tab : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className={activeTab === tab.id ? footer.active_icon : ""}>
              {tab.icon}
            </span>
            <p>{tab.label}</p>
          </button>
        ))}
        <span
          className={`${footer.tab_indicator} ${footer[`tab_position_${activeTab}`]}`}
        ></span>
      </div>
    </footer>
  );
};

export default Footer;
