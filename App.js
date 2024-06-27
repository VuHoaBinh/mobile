import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useState } from "react";
import ListItem from "./component/ListItem";
import AddItem from "./component/AddItem";

export default function App() {
  const [enterListInput, setListInput] = useState([]);
  const [btnStart, setBtnStart] = useState(false);

  function onPressBtnStart() {
    setBtnStart(true);
  }

  function onPressBtnStartBack(btnStateBack) {
    setBtnStart(btnStateBack);
  }

  function addItemHandler(enterTextInput) {
    // alert(enterTextInput);
    setListInput((currentListInput) => [
      ...currentListInput,
      { text: enterTextInput, id: Math.random().toString() },
    ]);
  }
  function deleteItemHandler(id) {
    setListInput((currentListInput) => {
      return currentListInput.filter((goal) => goal.id !== id);
    });
    console.log(id);
  }

  return (
    <View style={styles.appContainer}>
      <Text>Hello world!!</Text>
      <Button title="started" color={"red"} onPress={onPressBtnStart} />
      {btnStart && (
        <AddItem inputItemList={addItemHandler} btnBack={onPressBtnStartBack} />
      )}
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
            return (
              <ListItem
                listItemOnClick={items.item.text}
                id={items.item.id}
                deleteItemList={deleteItemHandler}
              />
            );
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
    backgroundColor: "green",
    color: "white",
  },

  listItems: { flex: 5 },
});
