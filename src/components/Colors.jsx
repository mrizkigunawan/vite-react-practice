import React from "react";
import useColorState from "../context/useColorState";

const colors = ["red", "yellow", "green", "blue", "purple", "indigo", "gray"];

export default function Colors() {
  const { toggleColor } = useColorState();
  return (
    <div className="mt-5 flex items-center justify-center space-x-1 md:space-x-3">
      {colors.map((color, i) => (
        <div
          key={i}
          className={`relative w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer border-4 border-white bg-${color}-600 hover:bg-${color}-700 overflow-hidden`}
          onClick={() => toggleColor(color)}
        >
          <div className="absolute inset-x-0 top-0 transform rotate-45 origin-bottom bg-white opacity-20 w-full h-1/2"></div>
        </div>
      ))}
    </div>
  );
}
