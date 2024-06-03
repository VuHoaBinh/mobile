import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!!</Text>
      <View style={styles.appContainer}>
        <TextInput
          placeholder="Enter in here ... "
          style={{
            borderWidth: 2,
            borderColor: "red",
            padding: 5,
            borderRadius: 5,
            margin: 8,
          }}
        />
        <Button
          title="Add"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </View>
      <View>
        <Text>List of Items</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  appContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
