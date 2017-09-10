// @flow

import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import Header from '../components/Header';
import FormulaInput from '../components/FormulaInput';
import { colors } from '../utils/styles';

const FormulaDetail = ({ navigation, screenProps }: formulaDetailType) => {
  const formula = screenProps.formulas.find(
    item => item.name === navigation.state.params.name
  );

  if (!formula) {
    return <Text>Error</Text>;
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Header formula={formula} />
      <ScrollView style={styles.inputContainer}>
        {formula.inputs.map(inputName =>
          <FormulaInput
            key={inputName}
            input={screenProps.inputs[inputName]}
            formula={formula}
            onChange={screenProps.onChange}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  inputContainer: {
    padding: 10
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
      result: number,
      key: string,
      name: string,
      units: string,
      inputs: Array<string>
    }>
  }
};

export default FormulaDetail;
