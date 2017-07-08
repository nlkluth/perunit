// @flow

import React from "react";
import update from "immutability-helper";
import { StackNavigator } from "react-navigation";
import FormulaDetail from "./pages/FormulaDetail";
import Formulas from "./pages/Formulas";
import { baseImpedance } from "./utils/formulas";
import { invalidInput } from "./utils/validate";

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
    formulas: Array<{
      key: string,
      name: string,
      inputs: Array<{
        name: string,
        value: string,
        error: string
      }>
    }>
  };

  _onChange: Function;

  constructor(props: Object) {
    super(props);
    this._onChange = this._onChange.bind(this);

    this.state = {
      formulas: [
        {
          key: "BaseImpedance",
          name: "Base Impedance",
          inputs: [
            {
              name: "voltage",
              value: "10",
              error: ""
            },
            {
              name: "power",
              value: "2",
              error: ""
            }
          ],
          result: baseImpedance(["10", "2"]),
          formula: baseImpedance
        }
      ],
      error: {
        display: false
      }
    };
  }

  _onChange(name, value, formula) {
    this.setState(previousState => {
      const { formulas, error } = previousState;
      const formulaIndex = formulas.findIndex(item => item.key === formula);
      const index = formulas[formulaIndex].inputs.findIndex(
        input => input.name === name
      );
      const inputs = formulas[formulaIndex].inputs;
      const values = inputs.map(input => {
        if (input.name === name) {
          return value;
        }

        return input.value;
      });

      const result = formulas[formulaIndex].formula(values);

      return update(previousState, {
        error: {
          shown: { $set: false }
        },
        formulas: {
          [formulaIndex]: {
            inputs: {
              [index]: {
                value: { $set: value },
                error: { $set: invalidInput(value) || invalidInput(result) }
              }
            },
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
          formulas: this.state.formulas,
          onChange: this._onChange
        }}
      />
    );
  }
}
