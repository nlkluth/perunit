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
    alignItems: 'stretch',
    backgroundColor: colors.purple
  },
  bg: {
    backgroundColor: '#eee',
    marginTop: '20%',
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
