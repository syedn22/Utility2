import React, { useState } from "react";
import { ScrollView } from "react-native";

import AppPicker from "../components/AppPicker";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppInput from "../components/AppInput";
import EqualButton from "../components/EqualButton";
import ElectricCalculator from "../source/ElectricCalculator";

const items = [
  { label: "DC", value: "DC" },
  { label: "AC-single phase", value: "AC1" },
  { label: "AC-three phase", value: "AC3" },
];

const voltageType = [
  { label: "Line-to-Line Voltage", value: "L2L" },
  { label: "Line-to-Neutral Voltage", value: "L2N" },
];

function ElectricalCalculatorScreen() {
  const [selectedItem, setselectedItem] = useState(items[0]);
  const [ampere, setampere] = useState(0);
  const [voltage, setvoltage] = useState(0);
  const [watt, setwatt] = useState(0);
  const [kiloWatt, setkiloWatt] = useState(0);
  const [milliWatt, setmilliWatt] = useState(0);
  const [powerFactor, setpowerFactor] = useState(0);
  const [selectedVoltageType, setselectedVoltageType] = useState(
    voltageType[0]
  );

  const calculate = () => {
    if (selectedItem.value === "AC1") {
      setkiloWatt(
        ElectricCalculator.calculateKiloWattAC1(ampere, voltage, powerFactor)
      );
      setmilliWatt(
        ElectricCalculator.calculateMilliWattAC1(ampere, voltage, powerFactor)
      );
      setwatt(
        ElectricCalculator.calculateWattAC1(ampere, voltage, powerFactor)
      );
    }

    if (selectedItem.value === "AC3") {
      setkiloWatt(
        ElectricCalculator.calculateKiloWattAC3(
          ampere,
          voltage,
          powerFactor,
          selectedVoltageType.value
        )
      );
      setmilliWatt(
        ElectricCalculator.calculateMilliWattAC3(
          ampere,
          voltage,
          powerFactor,
          selectedVoltageType.value
        )
      );
      setwatt(
        ElectricCalculator.calculateWattAC3(
          ampere,
          voltage,
          powerFactor,
          selectedVoltageType.value
        )
      );
    }

    if (selectedItem.value === "DC") {
      setkiloWatt(ElectricCalculator.calculateKiloWatt(ampere, voltage));
      setmilliWatt(ElectricCalculator.calculateMilliWatt(ampere, voltage));
      setwatt(ElectricCalculator.calculateWatt(ampere, voltage));
    }
  };

  return (
    <ScrollView>
      <AppPicker
        items={items}
        selectedItem={selectedItem}
        onSelectItem={(e) => setselectedItem(e)}
      />
      <AppInput
        title="Enter current in amps"
        onChangeText={(e) => setampere(e)}
        placeholder="0"
        keyboardType="number-pad"
      />
      <AppInput
        title="Enter voltage in volts"
        onChangeText={(e) => setvoltage(e)}
        placeholder="0"
        keyboardType="number-pad"
      />

      {selectedItem.value !== "DC" ? (
        <AppInput
          title="Power Factor"
          onChangeText={(e) => setpowerFactor(e)}
          placeholder="0"
          keyboardType="number-pad"
        />
      ) : (
        <></>
      )}

      {selectedItem.value === "AC3" ? (
        <AppPicker
          items={voltageType}
          selectedItem={selectedVoltageType}
          onSelectItem={(e) => setselectedVoltageType(e)}
        />
      ) : (
        <></>
      )}

      <EqualButton onPress={() => calculate()} />
      <AppText>mW : {milliWatt}</AppText>
      <AppText>W : {watt}</AppText>
      <AppText>kW : {kiloWatt}</AppText>
    </ScrollView>
  );
}

export default ElectricalCalculatorScreen;
