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
    formulas: Array<{
      key: string,
      name: string
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
              voltage: 10,
              power: 2
            }
          ],
          formula: baseImpedance
        }
      ]
    };
  }

  _onChange() {
    console.log("changed");
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
