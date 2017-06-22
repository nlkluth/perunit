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
            value: 10
          },
          power: {
            value: 2
          }
        },
        formula: baseImpedance
      }
    };
  }

  _onChange(name, value, formula) {
    this.setState((previousState) => {
      return {
        [formula]: {
          ...previousState[formula],
          inputs: {
            ...previousState[formula].inputs,
            [name]: { value }
          }
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
