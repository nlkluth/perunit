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

const resultFontSize = number => {
  if (number.length > 18) {
    return 'sm';
  }

  if (number.length > 15) {
    return 'md';
  }

  return 'lg';
};

const Header = ({ formula }: properties) => {
  const formulaString = formula.result.toString();

  return (
    <View style={styles.header}>
      <Text
        style={[styles.formulaResult, styles[resultFontSize(formulaString)]]}
        selectable
      >
        {formula.error ? 'Error' : formulaString}
      </Text>
      {formula.units && <Text style={styles.units}>({formula.units})</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexBasis: '22%',
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
    fontWeight: '600'
  },
  sm: {
    fontSize: 25
  },
  md: {
    fontSize: 32
  },
  lg: {
    fontSize: 40
  },
  units: {
    color: colors.white,
    fontSize: 20,
    opacity: 0.8
  }
});

export default Header;
