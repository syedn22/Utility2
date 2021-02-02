import React from "react";
import { Button, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "monospace",
    fontWeight: "bold",
  },
  button: {
    width: 340,
    height: 60,
    backgroundColor: "dodgerblue",
    margin: 10,
    borderWidth: 5,
    borderColor: "royalblue",
    borderRadius: 30,
  },
});
