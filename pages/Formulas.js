// @flow

import React from 'react';
import { FlatList, View, StyleSheet, StatusBar } from 'react-native';
import { colors } from '../utils/styles';
import ListItem from '../components/ListItem';

type props = {
  navigation: {},
  screenProps: {
    Formulas: {
      [key: string]: string
    }
  }
};

const Formulas = ({ navigation, screenProps }: props) => {
  function renderItem({ item }: { item: {} }) {
    return <ListItem navigation={navigation} item={item} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.list}>
        <FlatList
          data={screenProps.formulas}
          renderItem={info => renderItem(info)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: colors.purple
  },
  list: {
    backgroundColor: colors.white,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    flex: 1
  }
});

export default Formulas;
