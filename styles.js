import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: '#fff',
      borderRadius: 8,
      margin: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    userInfo: {
      gap: 8,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'red',
    },
    email: {
      fontSize: 16,
      color: 'blue',
    },
    location: {
      fontSize: 16,
      color: '#666',
    },
    joinDate: {
      fontSize: 14,
      color: '#888',
      fontStyle: 'italic',
    },
    bio: {
      fontSize: 16,
      color: '#444',
      marginTop: 8,
      lineHeight: 22,
    },
  });
  