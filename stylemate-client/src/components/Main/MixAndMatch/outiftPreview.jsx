import React from "react";

const OutiftPreview = () => {
  return (
    <div className="w-full max-w-md mt-6 gap-4 flex flex-col items-center justify-center">
      <div className="outfit-top w-full h-[35vh] flex items-center justify-center bg-white rounded-xl shadow-md overflow-hidden">
        <p className="text-lg font-medium text-gray-600">Atasan</p>
      </div>
      <div className="outfit-bottom w-full h-[35vh] flex items-center justify-center bg-white rounded-xl shadow-md overflow-hidden">
        <p className="text-lg font-medium text-gray-600">Bawahan</p>
      </div>
    </div>
  );
};

export default OutiftPreview;
