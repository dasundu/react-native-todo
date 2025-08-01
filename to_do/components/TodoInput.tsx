import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'


const TodoInput = () => {

    const { colors } = useTheme();
    const homeStyles = createHomeStyles(colors);

    const [newTodo,setNewTodo] = useState("");
    const addTodo = useMutation(api.todos.addTodo);

    const handleAddTodo = async () => {
        if(newTodo.trim()) {
            try {
                await addTodo ({text:newTodo.trim()})
                setNewTodo(""); // Clear input after adding
            }catch(error) {
                console.log("Error adding a todo", error);
                Alert.alert("Error", "Failed to add todo");
            }
        }
    };
    

    return (
        <View style={homeStyles.inputSection}>
        <View style={homeStyles.inputWrapper}>
            <TextInput
                style={homeStyles.input}
                placeholder="What need to be done?"
                value={newTodo}
                onChangeText={setNewTodo}
                onSubmitEditing={handleAddTodo}
                placeholderTextColor={colors.textMuted}
            />
            <TouchableOpacity
                onPress={handleAddTodo}
                activeOpacity={0.8}
                disabled={!newTodo.trim()}>
                <LinearGradient
                    colors = {newTodo.trim() ? colors.gradients.primary : colors.gradients.muted}
                    style={[homeStyles.addButton , !newTodo.trim() && homeStyles.addButtonDisabled]}
                    >
                    <Ionicons name="add" size={24} color='#fff' />
                </LinearGradient>
            </TouchableOpacity>

        </View>   
        </View>
    )
}

export default TodoInput