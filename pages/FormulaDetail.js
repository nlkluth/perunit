// @flow

import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Header from "../components/Header";

const FormulaDetail = ({ navigation, screenProps }: formulaDetailType) => {
  const formula = screenProps.formulas.find((item) => item.name === navigation.state.params.name);

  return (
    <View style={styles.container}>
      <Header>
        <Text>{formula.name}</Text>
        <Text>{formula.result}</Text>
      </Header>
      {formula.inputs.map(input => (
        <View key={input.name}>
          <Text>{input.name}</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={text =>
              screenProps.onChange(input.name, text, formula.key)}
            name={input.name}
            value={input.value}
            returnKeyType="done"
          />
        </View>
      ))}
    </View>
  );
};

FormulaDetail.navigationOptions = {
  title: "Base Impedance"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4
  },
  input: {
    height: 40,
    borderColor: "#2a2a2a",
    borderWidth: 1
  }
});

type formulaDetailType = {
  formulas: Array<{
    key: string,
    name: string,
    inputs: Array<{
      [key: string]: {
        value: string,
        error?: string
      }
    }>
  }>
};

export default FormulaDetail;
