import react from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = ({ item }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() =>
      this.props.navigation.navigate("FormulaDetail", {
        name: item.name
      })}
  >
    <Text style={styles.buttonText}>{item.name}</Text>
  </TouchableOpacity>
);

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
