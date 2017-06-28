// @flow

import React from "react";
import { StackNavigator } from "react-navigation";
import FormulaDetail from "./pages/FormulaDetail";
import Formulas from "./pages/Formulas";
import { baseImpedance } from "./utils/formulas";
import { invalidInput } from './utils/validate';

const Nav = StackNavigator({
  Home: { screen: Formulas },
  FormulaDetail: { screen: FormulaDetail }
});

export default class App extends React.Component {
  state: {
    [key: string]: {
      key: string,
      name: string
    }
  };

  _onChange: Function;

  constructor(props: Object) {
    super(props);
    this._onChange = this._onChange.bind(this);

    this.state = {
      formulas: [{
        key: "BaseImpedance",
        name: "Base Impedance",
        inputs: {
          voltage: '10',
          power: '2'
        },
        result: baseImpedance(['10', '2']),
        formula: baseImpedance
      }],
      error: {
        display: false
      }
    };
  }

  _onChange(name, value, formula) {
    this.setState(({ formulas, error }) => {
      const formulaIndex = formulas.findIndex((item) => item.key === formula);
      const inputs = formulas[formulaIndex].inputs;
      const result = formulas[formulaIndex].formula([inputs.power, inputs.voltage]);

      if (invalidInput(value) || invalidInput(result)) {
        return {
          error: {
            shown: true,
            value
          }
        }
      }

      return {
        error: {
          ...error,
          shown: false
        },
        formulas: [
          ...formulas.slice(0, formulaIndex),
          {
            ...formulas[formulaIndex],
            inputs: {
              ...inputs,
              [name]: value
            },
            result
          },
          ...formulas.slice(formulaIndex + 1, formulas.length)
        ]
      };
    });
  }

  render() {
    return (
      <Nav
        screenProps={{
          formulas: this.state.formulas,
          onChange: this._onChange
        }}
      />
    );
  }
}
