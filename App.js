import { StyleSheet, Text, View, Button, FlatList } from "react-native";
// Alert,
// ScrollView,
import { TextInput } from "react-native-web";
import { useState } from "react";
export default function App() {
  const [enterTextInput, setTextInput] = useState("");
  const [enterListInput, setListInput] = useState([]);

  function inputTextHandler(event) {
    console.log(event);
    setTextInput(event);
  }

  function addItemHandler() {
    // alert(enterTextInput);
    setListInput((currentListInput) => [
      ...currentListInput,
      { text: enterTextInput, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <Text>Hello world!!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter in here ... "
          onChangeText={inputTextHandler}
        />
        <Button title="Add items" onPress={addItemHandler} />
      </View>
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
              <View>
                <Text style={styles.itemList}>{items.item.text}</Text>
              </View>
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
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  inputText: {
    borderColor: "red",
    width: "70%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  listItems: { flex: 5 },
  itemList: {
    backgroundColor: "green",
    width: "100%",
    color: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
