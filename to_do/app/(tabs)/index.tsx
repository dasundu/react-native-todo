import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import { Text,  TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import Header from "../../components/Header";

export default function Index() {
  const { toggleDarkMode , colors} = useTheme();

  const homeStyles = createHomeStyles(colors) ;

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
    
    <StatusBar barStyle={colors.statusBarStyle} />
    <SafeAreaView style={homeStyles.safeArea}>
      <Header />
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Dark Mode</Text>
      </TouchableOpacity>

    </SafeAreaView>
    </LinearGradient>
  );
}
