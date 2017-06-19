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
