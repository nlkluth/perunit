import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexBasis: '40%'
  }
});

const Header = ({ children }) => (
  <View style={styles.header}>
    {children}
  </View>
);

export default Header;
