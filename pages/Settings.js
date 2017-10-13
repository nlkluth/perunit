// @flow

import React from 'react';
import { Text, Slider, View, StyleSheet } from 'react-native';

const Settings = () => (
  <View style={styles.container}>
    <View style={styles.information}>
      <Text>Sample output:</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  information: {
    alignItems: 'center'
  }
});

export default Settings;
