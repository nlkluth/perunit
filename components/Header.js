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

const Header = ({ formula }: properties) => {
  const [number, exponent] = formula.result.toString().split('e');

  return (
    <View style={styles.header}>
      <Text style={styles.headerName}>{formula.name}</Text>
      <Text style={styles.formulaResult}>
        {number}
        {exponent &&
          <Text style={styles.scientificNotation}>
            x10
            {' '}
            <Text style={styles.exponent}>{exponent.substr(1)}</Text>
          </Text>}
      </Text>
      {formula.units && <Text style={styles.units}>({formula.units})</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexBasis: '40%',
    borderWidth: 2,
    borderColor: colors.purple,
    backgroundColor: colors.purple,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerName: {
    fontSize: 22,
    color: colors.white
  },
  formulaResult: {
    fontSize: 40,
    color: colors.white,
    maxWidth: '100%'
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
