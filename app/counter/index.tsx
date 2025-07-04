import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function CounterScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            marginBottom: 18,
          }}
        >
          Go to /idea
        </Text>
      </TouchableOpacity>
      <Text style={styles.text}>Counter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
});
