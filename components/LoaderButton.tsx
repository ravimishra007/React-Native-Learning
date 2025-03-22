import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

interface LoaderButtonProps {
  onComplete?: () => void;
  buttonText?: string;
  loadingTime?: number;
  buttonColor?: string;
}

const LoaderButton: React.FC<LoaderButtonProps> = ({
  onComplete,
  buttonText = 'Click Me',
  loadingTime = 3000,
  buttonColor = '#007AFF',
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      onComplete?.();
    }, loadingTime);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[
          styles.button,
          { backgroundColor: buttonColor },
          isLoading && styles.buttonDisabled
        ]}
        onPress={handlePress}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" size="small" />
        ) : (
          <Text style={styles.buttonText}>{buttonText}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#80B4FF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoaderButton; 