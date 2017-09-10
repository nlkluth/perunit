// @flow

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../utils/styles';

type properties = {
  formula: {
    result: string,
    name: string,
    units: string
  }
};

const Header = ({ formula }: properties) => {
  const [number, exponent] = formula.result.split('e');

  return (
    <View style={styles.header}>
      <Text style={styles.headerName}>{formula.name}</Text>
      <Text style={styles.formulaResult}>
        {formula.result}
        {formula.exponent && (
          <View style={styles.scientificNotation}>
            <Text>x10</Text>
            <Text style={styles.exponent}>{exponent}</Text>
          </View>        
        )}
      </Text>
      {formula.units && <Text style={styles.units}>({formula.units})</Text>}
    </View>
  );
}

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
    whitespace: 'no-wrap'
  },
  scientificNotation: {
    fontSize: 15
  },
  exponent: {
    verticalAlign: 'super'
  },
  units: {
    color: colors.white
  }
});

export default Header;
