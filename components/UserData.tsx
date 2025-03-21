import React from 'react';
import { Text, View } from 'react-native';
import  styles  from '../styles';


export const UserData = ({name}: {name: string}) => {
  // Example user data - in a real app, this would come from props or a state management system
  const userData = {
    name: name,
    email: 'ravi@gmail.com',
    location: 'New Delhi, India',
    joinDate: 'March 2025',
    bio: 'Software developer passionate about creating amazing apps',
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={[styles.name, {color:"blue"}]}>{userData.name}</Text>
        <Text style={styles.email}>{userData.email}</Text>
        <Text style={styles.location}>{userData.location}</Text>
        <Text style={styles.joinDate}>Member since {userData.joinDate}</Text>
        <Text style={styles.bio}>{userData.bio}</Text>
      </View>
    </View>
  );
};


