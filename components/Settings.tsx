import { Text, View, Button, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const SettingsScreen = () => {
    const [savedValue, setSavedValue] = useState<string | null>(null);

    // Store data
    const storeData = async () => {
        try {
            await AsyncStorage.setItem('my-key', 'Hello AsyncStorage!');
            Alert.alert('Data saved!');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    // Retrieve data
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('my-key');
            setSavedValue(value);
        } catch (error) {
            console.error('Error reading data:', error);
        }
    };

    // Remove data
    const removeData = async () => {
        try {
            await AsyncStorage.removeItem('my-key');
            setSavedValue(null);
            Alert.alert('Data removed!');
        } catch (error) {
            console.error('Error removing data:', error);
        }
    };

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10}}>
            <Text>Settings</Text>
            <Button title="Save Data" onPress={storeData} />
            <Button title="Load Data" onPress={getData} />
            <Button title="Remove Data" onPress={removeData} />
            {savedValue && <Text>Saved value: {savedValue}</Text>}
        </View>
    );
};

export default SettingsScreen;