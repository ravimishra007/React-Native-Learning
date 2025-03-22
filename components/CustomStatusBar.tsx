import React from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

interface CustomStatusBarProps {
  backgroundColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  showNotification?: boolean;
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;

const CustomStatusBar: React.FC<CustomStatusBarProps> = ({
  backgroundColor = '#007AFF',
  barStyle = 'light-content',
  title = 'My App',
  showBackButton = false,
  onBackPress,
  showNotification = false,
}) => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
      <SafeAreaView style={[styles.statusBar, { backgroundColor }]}>
        <View style={styles.content}>
          {/* Left Section (Back Button) */}
          <View style={styles.leftSection}>
            {showBackButton && (
              <TouchableOpacity onPress={onBackPress}>
                <Text style={styles.backButton}>←</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Middle Section (Title) */}
          <View style={styles.middleSection}>
            <Text style={styles.titleText}>{title}</Text>
          </View>

          {/* Right Section (Notifications) */}
          <View style={styles.rightSection}>
            {showNotification && (
              <TouchableOpacity 
                style={styles.notificationButton}
                onPress={() => console.log('Notification pressed')}
              >
                <Text style={styles.notificationIcon}>🔔</Text>
                <View style={styles.notificationBadge}>
                  <Text style={styles.badgeText}>3</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 0 : STATUSBAR_HEIGHT,
  },
  leftSection: {
    flex: 1,
    alignItems: 'flex-start',
  },
  middleSection: {
    flex: 2,
    alignItems: 'center',
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    color: '#FFFFFF',
    fontSize: 24,
    paddingHorizontal: 8,
  },
  notificationButton: {
    position: 'relative',
    padding: 8,
  },
  notificationIcon: {
    fontSize: 20,
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CustomStatusBar; 