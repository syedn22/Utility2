import React, { useState } from "react";
import { View } from "react-native";

import AppPicker from "../components/AppPicker";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import EqualButton from "../components/EqualButton";

const items = [
  { label: "Sin", value: "sin" },
  { label: "Cos", value: "cos" },
  { label: "Tan", value: "tan" },
  { label: "Sec", value: "sec" },
  { label: "Cosec", value: "cosec" },
  { label: "Cot", value: "cot" },
  { label: "Arcsin", value: "arcsin" },
  { label: "Arccos", value: "arccos" },
  { label: "Arctan", value: "arctan" },
];

function TrignometryCalculatorScreen() {
  const [value, setvalue] = useState(0);
  const [selectedItem, setselectedItem] = useState(items[0]);
  const [result, setresult] = useState();

  calculate = () => {
    if (selectedItem.value === "sin") setresult(Math.sin(Number(value)));
    if (selectedItem.value === "cos") setresult(Math.cos(Number(value)));
    if (selectedItem.value === "tan") setresult(Math.tan(Number(value)));
    if (selectedItem.value === "sec") setresult(1 / Math.cos(Number(value)));
    if (selectedItem.value === "cosec") setresult(1 / Math.sin(Number(value)));
    if (selectedItem.value === "cot") setresult(1 / Math.tan(Number(value)));
    if (selectedItem.value === "arcsin") setresult(Math.asin(Number(value)));
    if (selectedItem.value === "arccos") setresult(Math.acos(Number(value)));
    if (selectedItem.value === "arctan") setresult(Math.atan(Number(value)));
  };
  return (
    <View>
      <AppPicker
        items={items}
        placeholder="Trignometry Functions"
        selectedItem={selectedItem}
        onSelectItem={(item) => setselectedItem(item)}
      />
      <AppText>Enter the value</AppText>
      <AppTextInput
        onChangeText={(e) => setvalue(e)}
        placeholder="0"
        keyboardType="number-pad"
      />

      <EqualButton onPress={() => calculate()} />
      <AppText>Result :</AppText>
      <AppText style={{ borderColor: "#000", borderBottomWidth: 2 }}>
        {result}
      </AppText>
    </View>
  );
}

export default TrignometryCalculatorScreen;
