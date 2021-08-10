import React from "react";
import Card from "./components/Card";
import Colors from "./components/Colors";
import ColorContextProvider from "./context/ColorContext";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-blue-900">
      <ColorContextProvider>
        <Card />
        <Colors />
      </ColorContextProvider>
    </div>
  );
}
