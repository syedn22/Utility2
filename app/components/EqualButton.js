import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function EqualButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons
        name="equal-box"
        size={40}
        style={{ alignSelf: "center" }}
      />
    </TouchableOpacity>
  );
}

export default EqualButton;
