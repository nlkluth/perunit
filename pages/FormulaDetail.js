// @flow

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import Header from '../components/Header';
import { colors } from '../utils/styles';

const FormulaDetail = ({ navigation, screenProps }: formulaDetailType) => {
  const formula = screenProps.formulas.find(
    item => item.name === navigation.state.params.name
  );

  if (!formula) {
    return <Text>Error</Text>;
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <Header formula={formula} />
      <View>
        {formula.inputs.map(inputName => {
          const input = screenProps.inputs[inputName];
          return (
            <View key={input.name}>
              <Text style={input.error ? styles.labelError : null}>
                {input.name} ({input.units}) {input.error}
              </Text>
              <TextInput
                style={input.error ? styles.inputError : styles.input}
                keyboardType="numeric"
                onChangeText={text =>
                  screenProps.onChange(input.name, text, formula.key)}
                name={input.name}
                value={input.value}
                returnKeyType="done"
              />
            </View>
          );
        })}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
    backgroundColor: colors.white
  },
  input: {
    height: 40,
    paddingRight: 4,
    paddingLeft: 4,
    borderColor: colors.black,
    borderWidth: 1,
    fontSize: 24
  },
  labelError: {
    color: colors.red
  },
  inputError: {
    height: 40,
    borderColor: colors.red,
    borderWidth: 1
  }
});

type formulaDetailType = {
  navigation: {
    state: {
      params: {
        name: string
      }
    }
  },
  screenProps: {
    onChange: (string, string, string) => void,
    inputs: {
      [key: string]: {
        units: string,
        name: string,
        value: string,
        error?: string
      }
    },
    formulas: Array<{
      result: string,
      key: string,
      name: string,
      units: string,
      inputs: Array<string>
    }>
  }
};

export default FormulaDetail;
