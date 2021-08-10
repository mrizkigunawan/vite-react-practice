import { useContext } from "react";
import { ColorContext } from "./ColorContext";

export default function useColorState() {
  return useContext(ColorContext);
}
