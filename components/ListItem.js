// @flow

import React from 'react';
import { colors } from '../utils/styles';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

type listItemProps = {
  item: {
    name: string
  },
  navigation: {
    navigate: () => {}
  }
};

const ListItem = ({ item, navigation }: listItemProps) =>
  <TouchableOpacity
    style={styles.button}
    onPress={() =>
      navigation.navigate('FormulaDetail', {
        name: item.name
      })}
  >
    <Text style={styles.buttonText}>{item.name}</Text>
  </TouchableOpacity>;

const styles = StyleSheet.create({
  button: {
    borderColor: colors.grey,
    borderStyle: 'solid',
    flexBasis: '100%',
    borderBottomWidth: 1,
    padding: 14
  },
  buttonText: {
    color: colors.black,
    textAlign: 'center',
    fontSize: 30
  }
});

export default ListItem;
