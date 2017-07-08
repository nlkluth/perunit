import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const ListItem = ({ item, navigation }) =>
  <TouchableOpacity
    style={styles.button}
    onPress={() =>
      navigation.navigate("FormulaDetail", {
        name: item.name
      })}
  >
    <Text style={styles.buttonText}>{item.name}</Text>
  </TouchableOpacity>;

const styles = StyleSheet.create({
  button: {
    borderColor: "#889dad",
    borderStyle: "solid",
    flexBasis: 100,
    borderWidth: 1
  },
  buttonText: {
    color: "#889dad"
  }
});

export default ListItem;
