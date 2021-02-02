import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppButton from "../components/AppButton";

export default function MainScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AppButton
        title="Matrix Operation"
        onPress={() => navigation.navigate("matrixscreen")}
      />
      <AppButton
        title="Trignometry Operation"
        onPress={() => navigation.navigate("trignometryscreen")}
      />
      <AppButton
        title="Log Operation"
        onPress={() => navigation.navigate("logscreen")}
      />
      <AppButton
        title="Electrical Calculator"
        onPress={() => navigation.navigate("electriccalculator")}
      />
      <AppButton
        title="Number(Base) Operation"
        onPress={() => navigation.navigate("numberscreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#333",
  },
});
