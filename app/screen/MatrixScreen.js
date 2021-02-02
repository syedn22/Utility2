import React, { useState } from "react";
import { ScrollView } from "react-native";

import DisplayMatrix from "../components/DisplayMatrix";
import EqualButton from "../components/EqualButton";
import MatrixInput from "../components/MatrixInput";
import MatrixOperation from "../source/MatrixOperation";

export default function MatrixScreen() {
  const [firstMatrix, setfirstMatrix] = useState([]);
  const [secondMatrix, setsecondMatrix] = useState([]);
  const [addedMatrix, setaddedMatrix] = useState([]);
  const [subtractedMatrix, setsubtractedMatrix] = useState([]);
  const [multiplyMatrix, setmultiplyMatrix] = useState([]);

  calculate = () => {
    setaddedMatrix(MatrixOperation.addTwoMatrix(firstMatrix, secondMatrix));
    setsubtractedMatrix(
      MatrixOperation.subtractTwoMatrix(firstMatrix, secondMatrix)
    );
    setmultiplyMatrix(
      MatrixOperation.multiplyTwoMatrix(firstMatrix, secondMatrix)
    );
  };

  return (
    <ScrollView>
      <MatrixInput setMatrix={(e) => setfirstMatrix(e)} />
      <DisplayMatrix title="Matrix One" matrix={firstMatrix} />

      <MatrixInput setMatrix={(e) => setsecondMatrix(e)} />
      <DisplayMatrix title="Matrix Two" matrix={secondMatrix} />

      <EqualButton onPress={() => calculate()} />

      <DisplayMatrix title="Addition" matrix={addedMatrix} />
      <DisplayMatrix title="Subtraction" matrix={subtractedMatrix} />
      <DisplayMatrix title="Multiplication" matrix={multiplyMatrix} />
    </ScrollView>
  );
}
