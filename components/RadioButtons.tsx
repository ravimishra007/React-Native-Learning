import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';

interface Option {
  id: string;
  label: string;
}

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const options: Option[] = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ];

  const handleSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const animatedValue = new Animated.Value(0);

  Animated.spring(animatedValue, {
    toValue: 1,
    useNativeDriver: true,
  }).start();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an option:</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={styles.optionContainer}
          onPress={() => handleSelect(option.id)}
        >
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedOption === option.id && <View style={styles.radioDot} />}
            </View>
            <Text style={styles.radioLabel}>{option.label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  optionContainer: {
    marginVertical: 5,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioDot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  radioLabel: {
    fontSize: 16,
  },
});

export default RadioButtons; 