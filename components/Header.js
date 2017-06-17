import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const Header = ({ children }) => (
  <View>
    {children}
  </View>
);

export default Header;