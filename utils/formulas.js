// @flow

import { adjust } from './numbers';

/**
 * Base Impedance
 * Zbase = Base Voltage squared divided by Base Power
 */
function _baseImpedance([voltage, power]): number {
  return Math.pow(voltage, 2) / power;
}

export const baseImpedance = adjust(_baseImpedance);

/**
 * Base Current
 * I = Power dived by result of Voltage times square root of 3
 */
function _baseCurrent([voltage, power]): number {
  return power / (voltage * Math.sqrt(3));
}

export const baseCurrent = adjust(_baseCurrent);

/**
 * Per Unit Impedance
 * Zpu = Z(ohms) / Zbase
 */
function _perUnitImpedance([voltage, power, ohms]): number {
  return ohms / (Math.pow(voltage, 2) / power);
}

export const perUnitImpedance = adjust(_perUnitImpedance);
