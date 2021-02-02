import baseconvert from "baseconvert";

export default class BaseCalculator {
  static addition(a, b, base) {
    let result = parseInt(a, base) + parseInt(b, base);
    return baseconvert.converter(result).fromBase(10).toBase(base);
  }
  static subtraction(a, b, base) {
    let result = parseInt(a, base) - parseInt(b, base);
    return baseconvert.converter(result).fromBase(10).toBase(base);
  }
  static multiplication(a, b, base) {
    let result = parseInt(a, base) * parseInt(b, base);
    return baseconvert.converter(result).fromBase(10).toBase(base);
  }
}
