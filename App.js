// @flow

import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { StackNavigator } from "react-navigation";
import BaseImpedance from "./pages/BaseImpedance";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    borderColor: "#889dad",
    borderStyle: "solid",
    borderWidth: 1
  },
  buttonText: {
    color: "#889dad"
  }
});

class Formulas extends React.Component {
  state: {
    formulas: Array<{
      key: string,
      name: string
    }>
  };

  constructor(props) {
    super(props);
    this.state = {
      formulas: [
        {
          key: 'BaseImpedance',
          name: 'Base Impedance'
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.formulas}
          renderItem={({ item }) =>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("BaseImpedance")}
            >
              <Text style={styles.buttonText}>{item.name}</Text>
            </TouchableOpacity>}
        />
      </View>
    );
  }
}

export default StackNavigator({
  Home: { screen: Formulas },
  BaseImpedance: { screen: BaseImpedance }
});
