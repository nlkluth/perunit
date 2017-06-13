// @flow

import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PerUnit from './pages/PerUnit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const formulas = [{
  perUnit: {
    name: 'PerUnit'
  }
}];

const Formulas = () => (
  <View style={styles.container}>
    <FlatList
      data={formulas}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  </View>
);

export default StackNavigator({
  Home: { screen: Formulas },
  PerUnit: { screen: PerUnit }
});
