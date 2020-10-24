import React from "react";
import Svg, { SvgXml } from "react-native-svg";
import { SvgJs } from "../../Assets";

export default function SVG() {
  return <SvgXml xml={SvgJs.assessory} width="50%" height="50%" />;
}
