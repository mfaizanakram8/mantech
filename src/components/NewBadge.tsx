// components/PlacementSection.js
import React from "react";

export default function PlacementSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-50">
      <h2 className="text-xl font-semibold text-[#A580FC] mb-2">
        NEW GENAI BATCH <span role="img" aria-label="fire">🔥</span>
      </h2>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        FEP 5.0 : NEXTJS + DEVELOPMENT + GENAI
      </h1>
      <p className="text-gray-600 mb-6">Start your digital journey today!</p>
      <button className="px-10 py-3 text-2xl bg-[#A580FC] text-white rounded-lg shadow-md hover:bg-[#956bf5] transition duration-300">
        Explore &raquo;
      </button>
    </div>
  );
}
