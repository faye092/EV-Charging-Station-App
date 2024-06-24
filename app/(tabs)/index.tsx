import React from 'react';
import { StyleSheet } from 'react-native';
import LoginScreen from '@/components/Screen/LoginScreen/LoginScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const TabHomeScreen = () => {
  return (
    <GestureHandlerRootView style={styles.content}>
      <LoginScreen />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default TabHomeScreen;
