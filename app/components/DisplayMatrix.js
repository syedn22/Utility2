import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";
import Matrix from "./Matrix";

export default function DisplayMatrix({ matrix, title }) {
  return (
    <>
      <AppText>{title}</AppText>
      {matrix? (
        <Matrix data={matrix} />
      ) : (
        <AppText style={styles.danger}>
          {title} Cannot be done for this two matrices
        </AppText>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  danger: {
    height: 50,
    fontSize: 14,
    color: "tomato",
  },
});
