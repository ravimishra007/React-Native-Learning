import React, { useState } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { WebView } from 'react-native-webview';

const MyWebComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  let webViewRef: any = null;

  return (
    <View style={styles.container}>
      <WebView 
        ref={(ref) => (webViewRef = ref)}
        source={{ uri: 'https://reactnative.dev/' }}
        style={styles.webview}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onNavigationStateChange={(navState) => {
          setCanGoBack(navState.canGoBack);
          setCanGoForward(navState.canGoForward);
        }}
        // Handle errors
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
      />

      {/* Loading indicator */}
      {isLoading && (
        <ActivityIndicator
          style={styles.loader}
          size="large"
          color="#0000ff"
        />
      )}

      {/* Navigation controls */}
      <View style={styles.navigationBar}>
        <TouchableOpacity 
          style={[styles.navButton, !canGoBack && styles.disabledButton]}
          onPress={() => webViewRef.goBack()}
          disabled={!canGoBack}
        >
          <Text style={styles.navButtonText}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, !canGoForward && styles.disabledButton]}
          onPress={() => webViewRef.goForward()}
          disabled={!canGoForward}
        >
          <Text style={styles.navButtonText}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => webViewRef.reload()}
        >
          <Text style={styles.navButtonText}>↻</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navButton: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    minWidth: 40,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  navButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default MyWebComponent;