// @flow

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../utils/styles';

const styles = StyleSheet.create({
  header: {
    flexBasis: '40%',
    borderWidth: 2,
    borderColor: colors.grey,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  }
});

const Header = ({ children }) =>
  <View style={styles.header}>
    {children}
  </View>;

export default Header;
