import React from "react";
import index from "./index.module.css";
import { useState } from "react";
import { PiShuffleFill } from "react-icons/pi";
import { GoFlame } from "react-icons/go";
import { GiPartyPopper } from "react-icons/gi";
import { FaTshirt, FaBriefcase } from "react-icons/fa";

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
      <header className="fixed z-40 top-5 w-full px-3">
        <h1 className="text-3xl font-bold text-center text-[#123458]">
          Mix and Match
        </h1>
      </header>

      <main className="w-full h-full flex flex-col items-center justify-center p-3 text-[#123458] mt-1">
        {outfits.length <= 0 && (
          <div className="w-full max-w-md flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Mau outfit untuk apa?
            </h2>

            <div className="w-full mt-2">
              <p className="font-medium mb-3">Pilih Acara:</p>
              <div className="grid grid-cols-2 gap-4 w-full">
                <button
                  className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 hover:bg-blue-50 ${
                    selectedOccasion === "formal"
                      ? "border-[#123458] bg-blue-50"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleOccasionChange("formal")}
                >
                  <FaBriefcase className="text-3xl mb-2" />
                  <span>Formal</span>
                </button>

                <button
                  className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 hover:bg-blue-50 ${
                    selectedOccasion === "casual"
                      ? "border-[#123458] bg-blue-50"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleOccasionChange("casual")}
                >
                  <FaTshirt className="text-3xl mb-2" />
                  <span>Casual</span>
                </button>

                <button
                  className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 hover:bg-blue-50 ${
                    selectedOccasion === "sport"
                      ? "border-[#123458] bg-blue-50"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleOccasionChange("sport")}
                >
                  <GoFlame className="text-3xl mb-2" />
                  <span>Sport</span>
                </button>

                <button
                  className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 hover:bg-blue-50 ${
                    selectedOccasion === "party"
                      ? "border-[#123458] bg-blue-50"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleOccasionChange("party")}
                >
                  <GiPartyPopper className="text-3xl mb-2" />
                  <span>Party</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {outfits.length > 0 && (
          <div className="w-full max-w-md mt-6 gap-4 flex flex-col items-center justify-center">
            <div className="outfit-top w-full h-[35vh] flex items-center justify-center bg-white rounded-xl shadow-md overflow-hidden">
              <p className="text-lg font-medium text-gray-600">Atasan</p>
            </div>
            <div className="outfit-bottom w-full h-[35vh] flex items-center justify-center bg-white rounded-xl shadow-md overflow-hidden">
              <p className="text-lg font-medium text-gray-600">Bawahan</p>
            </div>
          </div>
        )}
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
