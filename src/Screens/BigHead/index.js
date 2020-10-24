import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import { BigHead } from "react-native-bigheads";
import CustomStatusBar from "../../Components/CustomStatusBar";
import BottomController from "./Components/BottomController";
import { backGroundOne } from "../../Styles/Colors";
import { Assets } from "../../Assets/index";

export default function Bighead() {
  const [controller, setController] = useState(0);
  const [bigHeadFeatures, setBigHeadFeatures] = useState({
    accessory: "shades",
    bgColor: "blue",
    bgShape: "squircle",
    body: "chest",
    clothing: "tankTop",
    clothingColor: "black",
    eyebrows: "angry",
    eyes: "wink",
    facialHair: "mediumBeard",
    graphic: "graphQL",
    hair: "short",
    hairColor: "black",
    hat: "none",
    hatColor: "green",
    lashes: false,
    lipColor: "purple",
    mouth: "open",
    showBackground: true,
    size: 300,
    skinTone: "brown",
  });

  const controllers = [
    {
      icon: "glasses",
      text: "Glasses",
      type: "accessory",
      onPress: () => {},
    },
    {
      icon: "format-color-fill",
      text: "Background Color",
      type: "bgColor",
      onPress: () => {},
    },
    {
      icon: "shape-outline",
      text: "Background Shape",
      type: "bgShape",
      onPress: () => {},
    },
    {
      icon: "snowman",
      text: "Gender",
      type: "body",
      onPress: () => {},
    },
    {
      icon: "dresser-outline",
      text: "Cloth",
      type: "clothing",
      onPress: () => {},
    },
    {
      icon: "dresser-outline",
      text: "Cloth Color",
      type: "clothingColor",
      onPress: () => {},
    },
    {
      icon: "eye-circle",
      text: "Eyebrows",
      type: "eyebrows",
      onPress: () => {},
    },
    {
      icon: "eye-circle-outline",
      text: "Eyes",
      type: "eyes",
      onPress: () => {},
    },
    {
      icon: "face-profile",
      text: "Facial Hair",
      type: "facialHair",
      onPress: () => {},
    },
    {
      icon: "image-outline",
      text: "Graphics",
      type: "graphics",
      onPress: () => {},
    },
    {
      icon: "face",
      text: "Hair",
      type: "hair",
      onPress: () => {},
    },
    {
      icon: "face",
      text: "Hair Color",
      type: "hairColor",
      onPress: () => {},
    },
    {
      icon: "hat-fedora",
      text: "Hat",
      type: "hat",
      onPress: () => {},
    },
    {
      icon: "hat-fedora",
      text: "Hat Color",
      type: "hatColor",
      onPress: () => {},
    },
    {
      icon: "",
      text: "Eye Lashes",
      type: "lashes",
      onPress: () => {},
    },
    {
      icon: "",
      text: "Lip Color",
      type: "lipColor",
      onPress: () => {},
    },
    {
      icon: "",
      text: "Mouth",
      type: "mouth",
      onPress: () => {},
    },
    {
      icon: "",
      text: "Background",
      type: "ShowBackground",
      onPress: () => {},
    },
    {
      icon: "",
      text: "Size",
      type: "size",
      onPress: () => {},
    },
    {
      icon: "",
      text: "Skin Tone",
      type: "skinTone",
      onPress: () => {},
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: { backGroundOne },
      }}
    >
      <CustomStatusBar />
      <Text style={{ alignSelf: "center" }}>Big Head</Text>
      <BigHead
        containerStyles={{ alignSelf: "center" }}
        accessory={bigHeadFeatures.accessory}
        bgColor={bigHeadFeatures.bgColor}
        bgShape={bigHeadFeatures.bgShape}
        body={bigHeadFeatures.body}
        clothing={bigHeadFeatures.clothing}
        clothingColor={bigHeadFeatures.clothingColor}
        eyebrows={bigHeadFeatures.eyebrows}
        eyes={bigHeadFeatures.eyes}
        facialHair={bigHeadFeatures.facialHair}
        graphic={bigHeadFeatures.graphic}
        hair={bigHeadFeatures.hair}
        hairColor={bigHeadFeatures.hairColor}
        hat={bigHeadFeatures.hat}
        hatColor={bigHeadFeatures.hatColor}
        lashes={bigHeadFeatures.lashes}
        lipColor={bigHeadFeatures.lipColor}
        mouth={bigHeadFeatures.mouth}
        showBackground={bigHeadFeatures.showBackground}
        size={bigHeadFeatures.size}
        skinTone={bigHeadFeatures.skinTone}
      />
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          style={{ height: 250, backgroundColor: "#0f0" }}
        ></ScrollView>
        <BottomController
          controllers={controllers}
          controller={controller}
          onControllerPress={(index) => {
            setController(index);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
