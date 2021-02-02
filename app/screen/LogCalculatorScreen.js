import React, { useState } from "react";
import { View } from "react-native";

import AppPicker from "../components/AppPicker";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import EqualButton from "../components/EqualButton";

const items = [
  { label: "Logarthim (log)", value: "log" },
  { label: "Natural Logarthim (ln)", value: "ln" },
  { label: "Anti-log (Anti-log)", value: "anti-log" },
];

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

function LogCalculatorScreen() {
  const [value, setvalue] = useState(0);
  const [result, setresult] = useState(0);
  const [selectedItem, setselectedItem] = useState(items[0]);

  calculate = () => {
    if (selectedItem.value === "log") {
      let temp = getBaseLog(10, Number(value));
      setresult(isNaN(temp) ? "Invalid" : temp);
    }
    if (selectedItem.value === "ln") {
      let temp = Math.log(Number(value));
      setresult(isNaN(temp) ? "Invalid" : temp);
    }
    if (selectedItem.value === "anti-log") setresult(Math.pow(10, value));
  };

  return (
    <View>
      <AppPicker
        items={items}
        placeholder="Log functions"
        selectedItem={selectedItem}
        onSelectItem={(item) => setselectedItem(item)}
      />
      <AppText>Enter the Number</AppText>
      <AppTextInput
        onChangeText={(e) => setvalue(e)}
        placeholder="0"
        keyboardType="number-pad"
      />
      <EqualButton onPress={() => calculate()} />
      <AppText>Result </AppText>
      <AppText>{result}</AppText>
    </View>
  );
}

export default LogCalculatorScreen;
