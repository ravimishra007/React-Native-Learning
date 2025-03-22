import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import CustomModal from './CustomModal';

const ModalDemo = () => {
  const [centerModalVisible, setCenterModalVisible] = useState(false);
  const [bottomModalVisible, setBottomModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Button to open centered modal */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setCenterModalVisible(true)}
      >
        <Text style={styles.buttonText}>Open Center Modal</Text>
      </TouchableOpacity>

      {/* Button to open bottom modal */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setBottomModalVisible(true)}
      >
        <Text style={styles.buttonText}>Open Bottom Modal</Text>
      </TouchableOpacity>

      {/* Center Modal */}
      <CustomModal
        visible={centerModalVisible}
        onClose={() => setCenterModalVisible(false)}
        type="center"
      />

      {/* Bottom Modal */}
      <CustomModal
        visible={bottomModalVisible}
        onClose={() => setBottomModalVisible(false)}
        type="bottom"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ModalDemo; 