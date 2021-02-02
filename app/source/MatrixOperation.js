export default class MatrixOperation {
  static addTwoMatrix(first, second) {
    if (first.length !== second.length) return null;
    if (first[0].length !== second[0].length) return null;
    
    let result = [];
    for (let i = 0; i < first.length; i++) {
      result[i] = Array();
      for (let j = 0; j < first[0].length; j++) {
        result[i][j] = first[i][j] + second[i][j];
      }
    }

    return result;
  }

  static subtractTwoMatrix(first, second) {
    if (first.length !== second.length) return null;
    if (first[0].length !== second[0].length) return null;
    
    let result = [];
    for (let i = 0; i < first.length; i++) {
      result[i] = Array();
      for (let j = 0; j < first[0].length; j++) {
        result[i][j] = first[i][j] - second[i][j];
      }
    }

    return result;
  }

  static multiplyTwoMatrix(first, second) {
    const row1 = first.length;
    const row2 = second.length;
    const column1 = first[0].length;
    const column2 = second[0].length;
    if (column1 !== row2) return null;
    let result = [];

    for (let i = 0; i < row1; i++) {
      result[i] = Array(column2);
      for (let j = 0; j < column2; j++) {
        result[i][j] = 0;
      }
    }

    for (let i = 0; i < row1; i++) {
      for (let j = 0; j < column2; j++) {
        for (let k = 0; k < column1; k++) {
          result[i][j] += first[i][k] * second[k][j];
          console.log(result[i][j]);
        }
      }
    }

    return result;
  }
}
