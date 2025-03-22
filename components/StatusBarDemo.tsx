import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import CustomStatusBar from './CustomStatusBar';

const StatusBarDemo = () => {
  const [currentTheme, setCurrentTheme] = useState<'default' | 'dark' | 'custom'>('default');

  const getStatusBarProps = () => {
    switch (currentTheme) {
      case 'dark':
        return {
          backgroundColor: '#000000',
          barStyle: 'light-content' as const,
          title: 'Dark Theme',
          showNotification: true,
        };
      case 'custom':
        return {
          backgroundColor: '#4CAF50',
          barStyle: 'dark-content' as const,
          title: 'Custom Theme',
          showBackButton: true,
          showNotification: true,
        };
      default:
        return {
          backgroundColor: '#007AFF',
          barStyle: 'light-content' as const,
          title: 'Default Theme',
          showNotification: false,
        };
    }
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar {...getStatusBarProps()} onBackPress={() => setCurrentTheme('default')} />
      
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setCurrentTheme('default')}
        >
          <Text style={styles.buttonText}>Default Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.darkButton]}
          onPress={() => setCurrentTheme('dark')}
        >
          <Text style={styles.buttonText}>Dark Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.customButton]}
          onPress={() => setCurrentTheme('custom')}
        >
          <Text style={styles.buttonText}>Custom Theme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  darkButton: {
    backgroundColor: '#000000',
  },
  customButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default StatusBarDemo; 