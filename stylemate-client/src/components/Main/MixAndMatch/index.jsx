import React, { useEffect } from "react";
import index from "./index.module.css";
import { useState } from "react";
import { PiShuffleFill } from "react-icons/pi";
import OccasionSelector from "./occasionSelector";
import OutiftPreview from "./outiftPreview";
import Header from "@/components/header";

const MixAndMatch = ({ activeTab }) => {
  const [loading, setLoading] = useState(false);
  const [outfits, setOutfits] = useState([]);
  const [selectedOccasion, setSelectedOccasion] = useState("");

  const handlerMixAndMatch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Simulate outfit generation
      if (selectedOccasion) {
        setOutfits(["top", "bottom"]);
      }
    }, 2000);
  };

  const handleOccasionChange = (occasion) => {
    setSelectedOccasion(occasion);
  };

  return (
    <article className="relative w-full h-full flex flex-col items-center ">
      {outfits.length > 0 && (
        <header className="header_container fixed z-40 top-0 w-full p-3 flex items-center justify-center text-[#f1efec] bg-[#123458]">
          <div className="header_content flex items-center">
            <>
              <div className="title">
                <p>Filter</p>
              </div>
              <div className="options"></div>
            </>
          </div>
        </header>
      )}

      {outfits.length <= 0 && (
        <Header title="Mix & Match"/>
      )}

      <main className="w-full h-full flex flex-col items-center justify-center p-3 text-[#123458] mt-1">
        {outfits.length <= 0 && (
          <OccasionSelector
            selectedOccasion={selectedOccasion}
            handleOccasionChange={handleOccasionChange}
          />
        )}

        {outfits.length > 0 && <OutiftPreview />}
      </main>

      {activeTab === 1 && (
        <button
          className={`${index.slide_up_button} fixed z-50 bottom-13 left-1/2 transform -translate-x-1/2 rounded-full bg-[#123458] text-[#F1EFEC] text-3xl p-4 border-6 border-[#F1EFEC] shadow-lg hover:bg-[#1a4877] transition-all disabled:opacity-50`}
          onClick={handlerMixAndMatch}
          disabled={!selectedOccasion}
        >
          <PiShuffleFill
            className={`transform rotate-270 ${
              loading && index.animated_shuffle_icon
            }`}
            size={28}
          />
        </button>
      )}
    </article>
  );
};

export default MixAndMatch;
