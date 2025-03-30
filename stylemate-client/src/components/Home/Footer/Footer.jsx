"use client";

import React, { useState } from "react";
import footer from "@/components/Home/Footer/footer.module.css";
import { IoMdHome, IoShirt } from "react-icons/io";
import { RiAiGenerate } from "react-icons/ri";
import { PiShuffleBold } from "react-icons/pi";


const Footer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabPositions = `tab_position_${activeTab}`;

  const tabs = [
    {
      id: 0,
      icon: <IoMdHome />,
      label: "Home",
    },
    {
      id: 1,
      icon: <RiAiGenerate />,
      label: "Generate",
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
        className={`footer-content  relative w-[700px] ${tabPositions} flex justify-around items-center `}
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
          className={footer.tab_indicator}
          style={{ left: `${12.5 + activeTab * 25}%` }}
        ></span>
      </div>
    </footer>
  );
};

export default Footer;
