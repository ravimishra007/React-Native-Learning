import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type LoginProps = {
  navigation: NativeStackNavigationProp<any>;
};

const Login = ({ navigation }: LoginProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigation.navigate('Home',{email: formData.email, password: formData.password});
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
        <View style={{ width: '80%', gap: 15 }}>
            <TextInput 
                placeholder="Email" 
                value={formData.email}
                onChangeText={(text) => setFormData({...formData, email: text})}
                style={{ 
                    borderWidth: 1, 
                    borderColor: '#ddd', 
                    padding: 10, 
                    borderRadius: 5,
                    backgroundColor: '#f9f9f9'
                }} 
            />
            <TextInput 
                placeholder="Password" 
                value={formData.password}
                onChangeText={(text) => setFormData({...formData, password: text})}
                secureTextEntry
                style={{ 
                    borderWidth: 1, 
                    borderColor: '#ddd', 
                    padding: 10, 
                    borderRadius: 5,
                    backgroundColor: '#f9f9f9'
                }} 
            />
        </View>
        <Button title="Login" onPress={handleSubmit} />
    </View>
  )
}

export default Login