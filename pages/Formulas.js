// @flow

import React from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

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
          renderItem={({ item }) =>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("FormulaDetail", {
                  name: item.name
                })}
            >
              <Text style={styles.buttonText}>{item.name}</Text>
            </TouchableOpacity>}
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
  },
  button: {
    borderColor: "#889dad",
    borderStyle: "solid",
    borderWidth: 1
  },
  buttonText: {
    color: "#889dad"
  }
});

export default Formulas;
