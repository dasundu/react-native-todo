import useTheme from "@/hooks/useTheme";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
const { toggleDarkMode } = useTheme();

  return (
    <View
      style={styles.container}
    >
      <Text style = {styles.content}>Edit app/index.tsx to edit this screen123.</Text>
      <Text>Welcome to the To-Do App!</Text>
      <TouchableOpacity>
        <Text onPress={toggleDarkMode}>Toggle Dark Mode</Text>
      </TouchableOpacity>
        
     
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
