// @flow

import { adjust } from './numbers';

/**
 * Base Impedance
 * Zbase = Base Voltage squared divided by Base Power
**/
function _baseImpedance([voltage, power], multiplier): number {
  const result = Math.pow(voltage, 2) / power;
  return result / multiplier;
}

export const baseImpedance = adjust(_baseImpedance);

/**
 * Base Current
 * I = Power dived by result of Voltage times square root of 3
**/
function _baseCurrent([voltage, power], multiplier): number {
  const result = power / (voltage * Math.sqrt(3));
  return result / multiplier;
}

export const baseCurrent = adjust(_baseCurrent);

/**
 * Per Unit Impedance
 * Zpu = Z(ohms) / Zbase
**/
function _perUnitImpedance([voltage, power, ohms], multiplier): number {
  const result = ohms / (Math.pow(voltage, 2) / power);
  return result / multiplier;
}

export const perUnitImpedance = adjust(_perUnitImpedance);
