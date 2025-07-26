import { Tabs } from 'expo-router'
import { View, Text } from 'react-native'
import { Ionicons } from "@expo/vector-icons"


const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor:"blue",
        tabBarInactiveTintColor:"gray",
        tabBarStyle: {
            backgroundColor: "white",
            borderTopWidth: 1,
            borderTopColor: "lightgray",
            height: 90,
            paddingBottom: 30,
            paddingTop: 5,
        },
        tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
        },
        headerShown: false,
     }}>

        <Tabs.Screen 
            name="index"
            options={{
                title: "Todos",
                tabBarIcon: ({color,size}) => (
                    <Ionicons name='flash-outline'
                    size={size}
                    color={color}
                    />
                )
            }}
        />    
        <Tabs.Screen 
            name="settings"
            options={{
                title: "Settings",
                tabBarIcon: ({color,size}) => (
                    <Ionicons name='settings'
                    size={size}
                    color={color}
                    />
                )
            }}
        />

    </Tabs>
  )
}

export default TabsLayout