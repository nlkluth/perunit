// @flow

import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BaseImpedance from './pages/BaseImpedance';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const formulas = [{
  key: 'BaseImpedance'
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
  BaseImpedance: { screen: BaseImpedance }
});
