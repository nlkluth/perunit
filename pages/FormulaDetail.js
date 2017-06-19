// @flow

import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Header from "../components/Header";

const FormulaDetail = ({ navigation, screenProps }) => {
  const formula = screenProps.formulas.find(
    item => item.key === navigation.state.params.name
  );

  return (
    <View style={styles.container}>
      <Header>
        <Text>{formula.name}</Text>
        <Text>19.2</Text>
      </Header>
      <Text>Power</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChange={screenProps.onChange}
      />
      <Text>Voltage</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChange={screenProps.onChange}
      />
    </View>
  );
};

FormulaDetail.navigationOptions = {
  title: "Base Impedance"
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 40,
    borderColor: "#2a2a2a",
    borderWidth: 1
  }
});

export default FormulaDetail;
