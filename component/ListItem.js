import { StyleSheet, Text, Pressable } from "react-native";

function ListItem(props) {
  return (
    <Pressable
      android_ripple={{ Color: "black" }}
      onPress={props.deleteItemList.bind(this, props.id)}
      style={({ pressData }) => pressData && style.pressItem}
    >
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
  pressItem: {
    opacity: 0.5,
  },
});
