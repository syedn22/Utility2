import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MatrixScreen from "./app/screen/MatrixScreen";
import LogCalculatorScreen from "./app/screen/LogCalculatorScreen";
import TrignometryCalculatorScreen from "./app/screen/TrignometryCalculatorScreen";
import ElectricalCalculatorScreen from "./app/screen/ElectricalCalculatorScreen";
import NumberScreen from "./app/screen/NumberScreen";
import Screen from "./app/components/Screen";
import MainScreen from "./app/screen/MainScreen";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Utility" component={MainScreen} />
    <Stack.Screen name="matrixscreen" component={MatrixScreen} />
    <Stack.Screen
      name="electriccalculator"
      component={ElectricalCalculatorScreen}
    />
    <Stack.Screen name="logscreen" component={LogCalculatorScreen} />
    <Stack.Screen
      name="trignometryscreen"
      component={TrignometryCalculatorScreen}
    />
    <Stack.Screen name="numberscreen" component={NumberScreen} />
  </Stack.Navigator>
);

function App(props) {
  return (
    <NavigationContainer>
      <Screen>
        <StackNavigator />
      </Screen>
    </NavigationContainer>
  );
}

export default App;
