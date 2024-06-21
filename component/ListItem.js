import { StyleSheet, Text, View } from "react-native";

function ListItem(props) {
  return (
    <View>
      <Text style={styles.itemList}>{props.text}</Text>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: "green",
    width: "100%",
    color: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
