import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableNativeFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BottomController({
  controllers,
  controller,
  onControllerPress,
}) {
  return (
    <FlatList
      data={controllers}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      // style={{ height: 45 }}
      keyExtractor={(item, ind) => ind.toString()}
      contentContainerStyle={{ alignItems: "center" }}
      renderItem={({ item, index }) => {
        return (
          <TouchableNativeFeedback
            onPress={() => {
              onControllerPress(index);
            }}
          >
            <Text
              style={{
                paddingHorizontal: 10,
                fontSize: 14,
                fontWeight: "700",
                paddingVertical: 10,
                backgroundColor: controller === index ? "#efefef" : "#fff",
              }}
            >
              {item.text}
            </Text>
          </TouchableNativeFeedback>
        );
      }}
    />
  );
}
