import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { colors } from '../utils/styles';

const FormulaInput = ({
  input,
  formula,
  onChange,
  firstIndex
}: formulaInputType) => {
  const errorMessage = input.error || formula.error;
  return (
    <View>
      <Text style={errorMessage ? styles.labelError : null}>
        {input.name} ({input.units}) {errorMessage}
      </Text>
      <TextInput
        style={errorMessage ? [styles.input, styles.inputError] : styles.input}
        keyboardType="numeric"
        autoFocus={firstIndex}
        onChangeText={text => onChange(input.name, text)}
        name={input.name}
        value={input.value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingRight: 4,
    paddingLeft: 4,
    borderColor: colors.grey,
    borderBottomWidth: 1,
    marginBottom: 12,
    fontSize: 32
  },
  labelError: {
    color: colors.red
  },
  inputError: {
    borderColor: colors.red
  }
});

type formulaInputType = {
  onChange: (string, string, string) => void,
  input: {
    units: string,
    name: string,
    value: string,
    error?: string
  },
  firstIndex: boolean,
  formula: {
    result: string,
    key: string,
    name: string,
    units: string,
    inputs: Array<string>
  }
};

export default FormulaInput;
