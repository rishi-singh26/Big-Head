import React from "react";
import { StatusBar } from "react-native";
import { backGroundOne } from "../Styles/Colors";

export default function CustomStatusBar() {
  return <StatusBar backgroundColor={backGroundOne} barStyle="dark-content" />;
}
