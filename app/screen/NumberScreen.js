import React, { useState } from "react";
import { View, Alert } from "react-native";

import AppPicker from "../components/AppPicker";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import EqualButton from "../components/EqualButton";
import BaseCalculator from "../source/BaseCalculator";

const items = [
  { label: "Binary", value: "bin", base: 2 },
  { label: "Quinary", value: "qui", base: 5 },
  { label: "Octal", value: "oct", base: 8 },
  { label: "Decimal", value: "dec", base: 10 },
  { label: "Hexadecimal", value: "hex", base: 16 },
];

function NumberScreen(props) {
  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState(0);
  const [addition, setaddition] = useState(0);
  const [subtract, setsubtract] = useState(0);
  const [multiplicaion, setmultiplicaion] = useState(0);
  const [selectedItem, setselectedItem] = useState(items[0]);

  const validateInput = (base) => {
    if (!(first >= 0 && first < base  && second >= 0 && second < base))
      return false;
    return true;
  };

  const calculate = () => {
    if (!validateInput(selectedItem.base))
      return Alert.alert(
        "Invalid Input",
        `The input should be between 0 and ${selectedItem.base - 1}`
      );
    setaddition(BaseCalculator.addition(first, second, selectedItem.base));
    setsubtract(BaseCalculator.subtraction(first, second, selectedItem.base));
    setmultiplicaion(
      BaseCalculator.multiplication(first, second, selectedItem.base)
    );
  };

  return (
    <View>
      <AppPicker
        items={items}
        placeholder="Number System bases"
        selectedItem={selectedItem}
        onSelectItem={(item) => setselectedItem(item)}
      />
      <AppText>Enter The First Number</AppText>
      <AppTextInput
        onChangeText={(e) => setfirst(e)}
        placeholder="0"
        keyboardType="number-pad"
      />
      <AppText>Enter The Second Number</AppText>
      <AppTextInput
        onChangeText={(e) => setsecond(e)}
        placeholder="0"
        keyboardType="number-pad"
      />
      <EqualButton onPress={() => calculate()} />
      <AppText>Addition : {addition}</AppText>
      <AppText>Subtraction : {subtract}</AppText>
      <AppText>multiplicaion : {multiplicaion}</AppText>
    </View>
  );
}

export default NumberScreen;
