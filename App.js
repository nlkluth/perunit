// @flow

import React from "react";
import { StackNavigator } from "react-navigation";
import FormulaDetail from "./pages/FormulaDetail";
import Formulas from "./pages/Formulas";
import { baseImpedance } from "./utils/formulas";

const Nav = StackNavigator({
  Home: { screen: Formulas },
  FormulaDetail: { screen: FormulaDetail }
});

export default class App extends React.Component {
  state: {
    T: {
      key: string,
      name: string
    }
  };

  _onChange: Function;

  constructor(props: Object) {
    super(props);
    this._onChange = this._onChange.bind(this);

    this.state = {
      BaseImpedance: {
        key: "BaseImpedance",
        name: "Base Impedance",
        inputs: {
          voltage: {
            value: '10'
          },
          power: {
            value: '2'
          }
        },
        result: baseImpedance(['10', '2']),
        formula: baseImpedance
      }
    };
  }

  _onChange(name, value, formula) {
    this.setState((previousState) => {
      const inputs = previousState[formula].inputs;
      const result = previousState[formula].formula([inputs.power.value, inputs.voltage.value]);

      return {
        [formula]: {
          ...previousState[formula],
          inputs: {
            ...inputs,
            [name]: { value }
          },
          result
        }
      };
    });
  }

  render() {
    return (
      <Nav
        screenProps={{
          formulas: this.state,
          onChange: this._onChange
        }}
      />
    );
  }
}
