import * as formulas from '../../utils/formulas';

it('gets base impedance right', () => {
  expect(formulas.baseImpedance(['10', '2'])).toEqual(50);
  expect(formulas.baseImpedance(['100', '20'])).toEqual(500);
});
