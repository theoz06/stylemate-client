import React from "react";
import { GoFlame } from "react-icons/go";
import { GiPartyPopper } from "react-icons/gi";
import { FaTshirt, FaBriefcase } from "react-icons/fa";

const OccasionSelector = ({ selectedOccasion, handleOccasionChange }) => {

    const occasions = [
        { label: "Formal", value: "formal", icon: <FaBriefcase className="text-3xl mb-2" /> },
        { label: "Casual", value: "casual", icon: <FaTshirt className="text-3xl mb-2" /> },
        { label: "Sport", value: "sport", icon: <GoFlame className="text-3xl mb-2" /> },
        { label: "Party", value: "party", icon: <GiPartyPopper className="text-3xl mb-2" /> },
    ];

  return (
    <div className="w-full max-w-md flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Mau outfit untuk apa?</h2>

      <div className="w-full mt-2">
        <p className="font-medium mb-3">Pilih Acara:</p>
        <div className="grid grid-cols-2 gap-4 w-full">

          {occasions.map((occasion, index) => (
            <button
            key={index}
            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 hover:bg-blue-50 ${
              selectedOccasion === occasion.value
                ? "border-[#123458] bg-blue-50"
                : "border-gray-200"
            }`}
            onClick={() => handleOccasionChange(occasion.value)}
          >
            {occasion.icon}
            <span>{occasion.label}</span>
          </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OccasionSelector;
