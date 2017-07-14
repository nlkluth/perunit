// @flow

import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexBasis: "40%",
    borderWidth: 2,
    borderColor: "#889dad",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 2
  }
});

const Header = ({ children }) =>
  <View style={styles.header}>
    {children}
  </View>;

export default Header;
