import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style = {styles.content}>Edit app/index.tsx to edit this screen123.</Text>
      <Text>Welcome to the To-Do App!</Text>
      <Link href="/about">Visit about page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
  content: {
        fontSize: 10,
        color: "blue",

  }
})
