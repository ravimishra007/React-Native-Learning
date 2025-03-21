import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const users = [
    { name: 'John', age: 25, email: 'john@example.com' },
    { name: 'Jane', age: 30, email: 'jane@example.com' },
    { name: 'Bob1', age: 35, email: 'bob@example.com' },
    { name: 'Bob2', age: 35, email: 'bob@example.com' },
    { name: 'Bob3', age: 35, email: 'bob@example.com' },
    { name: 'Bob4', age: 35, email: 'bob@example.com' },
    { name: 'Bob5', age: 35, email: 'bob@example.com' },
    { name: 'Bob6', age: 35, email: 'bob@example.com' },
    { name: 'Bob7', age: 35, email: 'bob@example.com' },
    { name: 'Bob8', age: 35, email: 'bob@example.com' },
    { name: 'Bob9', age: 35, email: 'bob@example.com' },
    { name: 'Bob10', age: 35, email: 'bob@example.com' },
];

const MapComponent = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    {users.map((user, index) => (
                        <View key={index} style={styles.card}>
                            <Text style={styles.name}>{user.name}</Text>
                            <Text style={styles.detail}>Age: {user.age}</Text>
                            <Text style={styles.detail}>{user.email}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        // flex: 1,
        backgroundColor: '#f5f5f5',
        height: 600,
    },
    scrollView: {
        flex: 1,
    },
    container: {
        padding: 16,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    detail: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
});

export default MapComponent;
