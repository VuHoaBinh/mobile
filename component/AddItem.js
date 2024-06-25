import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { TextInput, Button } from "react-native";
import { Modal } from "react-native";
function AddItem(props) {
  const [enterTextInput, setTextInput] = useState("");

  function inputTextHandler(event) {
    console.log(event);
    setTextInput(event);
  }

  function inputItemListOnHandler() {
    props.inputItemList(enterTextInput);
    setTextInput("");
  }
  function btnBackOnHandler() {
    props.btnBack(false);
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter in here ... "
          onChangeText={inputTextHandler}
          value={enterTextInput}
        />

        <Button title="Add items" onPress={inputItemListOnHandler} />
      </View>
      <Button title="Back" onPress={btnBackOnHandler} />
    </Modal>
  );
}

export default AddItem;

const styles = StyleSheet.create({
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
});
