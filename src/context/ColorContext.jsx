/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const ColorContext = createContext();

export default function ColorContextProvider(props) {
  const [color, setColor] = useState("red");
  const colorValue = {
    color,
    toggleColor: (selectedColor) => setColor(selectedColor),
  };

  return (
    <ColorContext.Provider value={colorValue}>
      {props.children}
    </ColorContext.Provider>
  );
}
