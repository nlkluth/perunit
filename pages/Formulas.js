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

class Formulas extends React.Component {
  props: {
    screenProps: {
      Formulas: {
        [key: string]: string
      }
    }
  };

  renderItem({ item }) {
    return <ListItem navigation={this.props.navigation} item={item} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.screenProps.formulas}
          renderItem={info => this.renderItem(info)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: colors.white
  }
});

export default Formulas;
