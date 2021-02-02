import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import AppText from "./AppText";
import AppTextInput from "./AppTextInput";

export default function MatrixInput({ setMatrix }) {
  const [error, seterror] = useState(false);
  const [numberOfRows, setnumberOfRows] = useState(0);
  const [numberOfColumns, setnumberOfColumns] = useState(0);
  const [value, setvalue] = useState(null);

  formMatrix = () => {
    let arrayOfNumbers = value.split(" ");
    if (numberOfColumns * numberOfRows !== arrayOfNumbers.length)
      return seterror(true);
    seterror(false);
    let k = 0;
    let temp = [];
    for (let i = 0; i < numberOfRows; i++) {
      temp[i] = new Array();
      for (let j = 0; j < numberOfColumns; j++) {
        temp[i][j] = Number(arrayOfNumbers[k]);
        k++;
      }
    }
    setMatrix(temp);
  };

  return (
    <>
      <View style={styles.container}>
        <AppText>Row X Column</AppText>
        <AppTextInput
          onChangeText={(e) => setnumberOfRows(e)}
          placeholder="0"
          keyboardType="number-pad"
          style={styles.input}
        />
        <AppTextInput
          onChangeText={(e) => setnumberOfColumns(e)}
          placeholder="0"
          keyboardType="number-pad"
          style={styles.input}
        />
      </View>

      <AppText>Enter Matrix Values:</AppText>
      <AppTextInput
        onEndEditing={(e) => formMatrix()}
        onChangeText={(e) => setvalue(e)}
        placeholder="0"
        keyboardType="number-pad"
        style={styles.matrixInput}
      />

      {error && (
        <AppText style={styles.error}>
          Input values should be equal to Row x Column value
        </AppText>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  input: {
    width: 50,
  },
  matrixInput: {
    height: 100,
  },
  error: {
    height: 50,
    fontSize: 14,
    color: "tomato",
  },
});
