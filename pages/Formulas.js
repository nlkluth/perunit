// @flow

import React from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { colors } from '../utils/styles';
import ListItem from '../components/ListItem';

type props = {
  screenProps: {
    Formulas: {
      [key: string]: string
    }
  }
};

type renderItem = {
  name: string
};

const Formulas = ({ navigation, screenProps }: props) => {
  function renderItem({ item }: renderItem) {
    return <ListItem navigation={navigation} item={item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={screenProps.formulas}
        renderItem={info => renderItem(info)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: colors.white
  }
});

export default Formulas;
