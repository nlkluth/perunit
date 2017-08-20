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

const Header = ({ formula }: properties) =>
  <View style={styles.header}>
    <Text style={styles.headerName}>{formula.name}</Text>
    <Text style={styles.formulaResult}>{formula.result}</Text>
    {formula.units && <Text style={styles.units}>({formula.units})</Text>}
  </View>;

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
    color: colors.white
  },
  units: {
    color: colors.white
  }
});

export default Header;
