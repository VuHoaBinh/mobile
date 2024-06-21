import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import ListItem from "./component/ListItem";
import AddItem from "./component/AddItem";

export default function App() {
  const [enterListInput, setListInput] = useState([]);

  function addItemHandler(enterTextInput) {
    // alert(enterTextInput);
    setListInput((currentListInput) => [
      ...currentListInput,
      { text: enterTextInput, id: Math.random().toString() },
    ]);
  }
  function deleteItemHandler(enterTextInput) {
    console.log("delete oke!!");
  }
  return (
    <View style={styles.appContainer}>
      <Text>Hello world!!</Text>
      <AddItem
        inputItemList={addItemHandler}
        deleteItemList={deleteItemHandler}
      />
      <View style={styles.listItems}>
        {/* <ScrollView alwaysBounceVertical={true}>
          <Text>List of Items: </Text>
          {enterListInput.map((item) => (
            <Text key={item} style={styles.itemList}>
              {item}
            </Text>
          ))}
        </ScrollView> */}

        <Text>List of Items: </Text>
        <FlatList
          data={enterListInput}
          renderItem={(items) => {
            return <ListItem listItemOnClick={items.item.text} />;
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    width: "100%",
  },

  listItems: { flex: 5 },
});
