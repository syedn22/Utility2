export default class ElectricCalculator {
  static calculateWatt(amps, volts) {
    return Number(amps * volts);
  }

  static calculateKiloWatt(amps, volts) {
    return Number(amps * volts) / 1000;
  }

  static calculateMilliWatt(amps, volts) {
    return Number(amps * volts) * 1000;
  }

  static calculateWattAC1(amps, volts, PF) {
    return Number(amps * volts * PF);
  }
  static calculateKiloWattAC1(amps, volts, PF) {
    return Number(amps * volts * PF) / 1000;
  }
  static calculateMilliWattAC1(amps, volts, PF) {
    return Number(amps * volts * PF) * 1000;
  }

  static calculateWattAC3(amps, volts, PF, type) {
    if ((type === "L2L")) return Number(Math.sqrt(3) * amps * volts * PF);
    return Number(3 * amps * volts * PF);
  }
  static calculateKiloWattAC3(amps, volts, PF, type) {
    if ((type === "L2L")) return Number(Math.sqrt(3) * amps * volts * PF) / 1000;
    return Number(3 * amps * volts * PF) / 1000;
  }
  static calculateMilliWattAC3(amps, volts, PF, type) {
    if ((type === "L2L")) return Number(Math.sqrt(3) * amps * volts * PF) * 1000;
    return Number(3 * amps * volts * PF) * 1000;
  }
}
