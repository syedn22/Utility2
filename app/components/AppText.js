import React from "react";
import { Text, StyleSheet } from "react-native";

export default function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    height: 50,
    padding: 10,
    color: "black",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "monospace",
    fontWeight: "bold",
  },
});
