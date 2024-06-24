import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from '@/components/Screen/LoginScreen/LoginScreen';

const TabHomeScreen = () => {
  return (
    <View style={styles.content}>
      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default TabHomeScreen;
