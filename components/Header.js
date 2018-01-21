// @flow

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../utils/styles';

type properties = {
  formula: {
    result: number,
    name: string,
    units: string
  }
};

const resultFontSize = (number) => {
  if (number.length > 15) {
    return 'sm';
  }

  if (number.length > 8) {
    return 'md';
  }

  return 'lg'
}

const Header = ({ formula }: properties) => {
  const [number, exponent] = formula.result.toString().split('e');

  return (
    <View style={styles.header}>
      <Text style={[styles.formulaResult, resultFontSize(number)]} selectable>
        {formula.error ? 'Error' : number}
      </Text>
      <Text>
        {exponent && (
          <Text style={styles.scientificNotation}>
            x10 <Text> {exponent.replace(/\+/, '')}</Text>
          </Text>
        )}
      </Text>
      {formula.units && <Text style={styles.units}>({formula.units})</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexBasis: '30%',
    borderWidth: 2,
    borderColor: colors.purple,
    backgroundColor: colors.purple,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formulaResult: {
    color: colors.white,
    maxWidth: '100%',
    textAlign: 'right'
  },
  sm: {
    fontSize: 20
  },
  md: {
    fontSize: 30
  },
  lg: {
    fontSize: 40
  },
  scientificNotation: {
    fontSize: 15
  },
  // exponent: {
  //   verticalAlign: 'super'
  // },
  units: {
    color: colors.white
  }
});

export default Header;
