import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import AppText from "./AppText";
import AppTextInput from "./AppTextInput";

function AppInput({ title, onChangeText, ...otherProps }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        style={styles.textInput}
        {...otherProps}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default AppInput;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "monospace",
    fontWeight: "bold",
  },
  textInput: {
    paddingLeft: 20,
    marginTop: 10,
    width: 340,
    height: 70,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 50,
    fontSize: 24,
    fontFamily: "monospace",
  },
});
