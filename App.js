// @flow

import React from 'react';
import { Button } from 'react-native';
import update from 'immutability-helper';
import { StackNavigator } from 'react-navigation';
import FormulaDetail from './pages/FormulaDetail';
import Formulas from './pages/Formulas';
import { baseCurrent, baseImpedance, perUnitImpedance } from './utils/formulas';
import * as validation from './utils/validate';

const Nav = StackNavigator({
  Home: { screen: Formulas },
  FormulaDetail: {
    screen: FormulaDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name
    })
  }
});

type State = {
  inputs: {
    [key: string]: {
      name: string,
      value: string,
      error: string
    }
  },
  formulas: Array<{
    key: string,
    name: string,
    inputs: Array<string>
  }>
};

export default class App extends React.Component<State> {
  onChange: Function;

  constructor(props: Object) {
    super(props);

    this.state = {
      inputs: {
        Voltage: {
          name: 'Voltage',
          value: '10',
          units: 'kV',
          error: '',
          validation: [validation.size, validation.missing]
        },
        Power: {
          name: 'Power',
          value: '2',
          units: 'MVA',
          error: '',
          validation: [validation.size, validation.missing, validation.nonZero]
        },
        Ohms: {
          name: 'Ohms',
          value: '50',
          units: 'Ohms',
          error: '',
          validation: [validation.size, validation.missing]
        }
      },
      formulas: [
        {
          key: 'BaseImpedance',
          name: 'Base Impedance',
          inputs: ['Voltage', 'Power'],
          result: baseImpedance(['10', '2']),
          units: 'Ohms',
          formula: baseImpedance,
          error: false
        },
        {
          key: 'BaseCurrent',
          name: 'Base Current',
          inputs: ['Voltage', 'Power'],
          result: baseCurrent(['10', '2']),
          units: 'Amps',
          formula: baseCurrent,
          error: false
        },
        {
          key: 'PerUnitImpedance',
          name: 'Per Unit Impedance',
          inputs: ['Voltage', 'Power', 'Ohms'],
          result: perUnitImpedance(['115', '100', '50']),
          formula: perUnitImpedance,
          error: false
        }
      ]
    };
  }

  onChange = (name, value, formula) => {
    this.setState(previousState => {
      const { formulas, inputs } = previousState;

      const updatedInputs = Object.keys(inputs).reduce((updated, key) => {
        const input = inputs[key];
        const newValue = input.name === name ? value : input.value;

        updated[key] = update(input, {
          value: { $set: newValue },
          error: { $set: validation.validate(newValue, input.validation) }
        });

        return updated;
      }, {});

      const updatedFormulas = [];

      formulas.forEach(formula => {
        const formulaValues = formula.inputs.map(input => {
          return updatedInputs[input].value;
        });

        const result = formula.formula(formulaValues);
        const resultError = validation.validate(result, [
          validation.resultSize,
          validation.number
        ]);

        if (resultError) {
          formula.inputs.forEach(input => {
            updatedInputs[input].error =
              updatedInputs[input].error || resultError;
          });
        }

        updatedFormulas.push(
          update(formula, {
            result: { $set: result },
            error: {
              $set: validation.validate(result, [
                validation.resultSize,
                validation.number
              ])
            }
          })
        );
      });

      return update(previousState, {
        inputs: { $set: updatedInputs },
        formulas: { $set: updatedFormulas }
      });
    });
  };

  render() {
    return (
      <Nav
        screenProps={{
          ...this.state,
          onChange: this.onChange
        }}
      />
    );
  }
}
