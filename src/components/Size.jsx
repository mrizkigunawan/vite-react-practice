import React, { useState } from "react";
import useColorState from "../context/useColorState";

export default function Size({ sizeList = [] }) {
  const [activeSize, setActive] = useState("xs");
  const { color } = useColorState();

  return sizeList.map((size, i) => (
    <div
      className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer ${
        activeSize === size ? `bg-${color}-600` : `border border-${color}-100`
      }`}
      key={i}
      onClick={() => setActive(size)}
    >
      <span
        className={`inline-block uppercase font-semibold ${
          activeSize === size ? `text-white` : `text-gray-500`
        }`}
      >
        {size}
      </span>
    </div>
  ));
}
