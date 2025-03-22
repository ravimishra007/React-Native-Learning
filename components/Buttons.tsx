import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';

const Buttons = ({xyzFunction}: {xyzFunction: () => void}) => {
  return (
    <View>
      {/* Standard Button */}
      <Button title="Standard Button" onPress={xyzFunction} color="red" />

      {/* Custom Touchable Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#4CAF50',
          padding: 15,
          borderRadius: 8,
          width: 200,
          alignItems: 'center',
        }}
        onPress={xyzFunction}>
        <Text style={{color: 'white', fontSize: 16}}>Custom Button</Text>
      </TouchableOpacity>

      {/* Outlined Button */}
      <TouchableOpacity
        style={{
          borderWidth: 2,
          borderColor: '#2196F3',
          padding: 15,
          borderRadius: 8,
          width: 200,
          alignItems: 'center',
        }}
        onPress={xyzFunction}>
        <Text style={{color: '#2196F3', fontSize: 16}}>Outlined Button</Text>
      </TouchableOpacity>

      {/* Rounded Button with Icon */}
      <TouchableOpacity
        style={{
          backgroundColor: '#9C27B0',
          padding: 15,
          borderRadius: 25,
          width: 200,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}
        onPress={xyzFunction}>
        <Text style={{color: 'white', fontSize: 16}}>Icon Button</Text>
        {/* You can add an icon here using react-native-vector-icons */}
      </TouchableOpacity>

      {/* Disabled Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#9E9E9E',
          padding: 15,
          borderRadius: 8,
          width: 200,
          alignItems: 'center',
          opacity: 0.6,
        }}
        disabled={true}
        onPress={xyzFunction}>
        <Text style={{color: 'white', fontSize: 16}}>Disabled Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
