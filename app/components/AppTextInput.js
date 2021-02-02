import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";

export default function AppTextInput({ style, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      <TextInput style={[{ color: "#000", fontSize: 24 }]} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderRadius: 30,
    borderWidth: 2,
    // flexDirection: "row",
    margin: 10,
    padding: 10,
    width: 340,
  },
});
