import { StyleSheet, Text, Pressable } from "react-native";

function ListItem(props) {
  return (
    <Pressable onPress={props.deleteItemList}>
      <Text style={styles.itemList}>{props.listItemOnClick}</Text>
    </Pressable>
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
