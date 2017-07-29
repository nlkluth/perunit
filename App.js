// @flow

import React from 'react';
import update from 'immutability-helper';
import { StackNavigator } from 'react-navigation';
import FormulaDetail from './pages/FormulaDetail';
import Formulas from './pages/Formulas';
import { baseCurrent, baseImpedance, perUnitImpedance } from './utils/formulas';
import { invalidInput } from './utils/validate';

const Nav = StackNavigator({
  Home: { screen: Formulas },
  FormulaDetail: {
    screen: FormulaDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name
    })
  }
});

export default class App extends React.Component {
  state: {
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

  _onChange: Function;

  constructor(props: Object) {
    super(props);
    this._onChange = this._onChange.bind(this);

    this.state = {
      inputs: {
        Voltage: {
          name: 'Voltage',
          value: '10',
          units: 'kV',
          error: ''
        },
        Power: {
          name: 'Power',
          value: '2',
          units: 'MVA',
          error: ''
        },
        Ohms: {
          name: 'Ohms',
          value: '50',
          units: 'Ohms',
          error: ''
        }
      },
      formulas: [
        {
          key: 'BaseImpedance',
          name: 'Base Impedance',
          inputs: ['Voltage', 'Power'],
          result: baseImpedance(['10', '2']),
          units: 'Ohms',
          formula: baseImpedance
        },
        {
          key: 'BaseCurrent',
          name: 'Base Current',
          inputs: ['Voltage', 'Power'],
          result: baseCurrent(['10', '2']),
          units: 'Amps',
          formula: baseCurrent
        },
        {
          key: 'PerUnitImpedance',
          name: 'Per Unit Impedance',
          inputs: ['Voltage', 'Power', 'Ohms'],
          result: perUnitImpedance(['115', '100', '50']),
          formula: perUnitImpedance
        }
      ],
      error: {
        display: false
      }
    };
  }

  _onChange(name, value, formula) {
    this.setState(previousState => {
      const { formulas, inputs, error } = previousState;
      const formulaIndex = formulas.findIndex(item => item.key === formula);
      const values = Object.keys(inputs).map(key => {
        if (inputs[key].name === name) {
          return value;
        }

        return inputs[key].value;
      });

      const result = formulas[formulaIndex].formula(values);

      return update(previousState, {
        error: {
          shown: { $set: false }
        },
        inputs: {
          [name]: {
            value: { $set: value },
            error: { $set: invalidInput(value) || invalidInput(result) }
          }
        },
        formulas: {
          [formulaIndex]: {
            result: { $set: result }
          }
        }
      });
    });
  }

  render() {
    return (
      <Nav
        screenProps={{
          ...this.state,
          onChange: this._onChange
        }}
      />
    );
  }
}
