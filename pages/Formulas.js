// @flow

import React from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import ListItem from '../components/ListItem';

class Formulas extends React.Component {
  props: {
    screenProps: {
      Formulas: {
        [key: string]: string
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.screenProps.formulas}
          renderItem={ListItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Formulas;
