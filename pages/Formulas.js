// @flow

import React from 'react';
import { FlatList, View, StyleSheet, StatusBar } from 'react-native';
import { colors, headerStyles } from '../utils/styles';
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
      <View style={styles.header} />
      <View style={styles.bg} />
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
    backgroundColor: colors.purple
  },
  header: {
    ...headerStyles
  },
  bg: {
    backgroundColor: '#eee',
    height: '100%'
  },
  list: {
    backgroundColor: colors.white,
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    flex: 1,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 3
    }
  }
});

export default Formulas;
