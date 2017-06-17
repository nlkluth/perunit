import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 40,
    borderColor: '#2a2a2a',
    borderWidth: 1
  }
});

const BaseImpedance = () => (
  <View style={styles.container}>
    <Header>
      <Text> Base Impedance</Text>
    </Header>
    <TextInput style={styles.input} keyboardType="numeric" />
  </View>
);

BaseImpedance.navigationOptions = {
  title: 'Base Impedance'
};

export default BaseImpedance;