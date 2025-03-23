import React from 'react'
import { Text, View } from 'react-native'

const Home = ({ route }: any) => {
    const { email, password } = route.params;
    return (
        <View style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: '#f5f5f5'
        }}>
            <View style={{
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                width: '80%'
            }}>
                <Text style={{ 
                    fontSize: 24, 
                    fontWeight: 'bold',
                    marginBottom: 20,
                    textAlign: 'center'
                }}>Welcome!</Text>
                <View style={{ gap: 10 }}>
                    <Text style={{ fontSize: 16 }}>Email: {email}</Text>
                    <Text style={{ fontSize: 16 }}>Password: {password}</Text>
                </View>
            </View>
        </View>
    )
}

export default Home