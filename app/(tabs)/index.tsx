import React from 'react';
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from '@/components/Screen/LoginScreen/LoginScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabHomeScreen() {
  return (
    <View style={styles.container}>
      <SignedIn>
        <GestureHandlerRootView style={styles.content}>
          <LoginScreen />
        </GestureHandlerRootView>
      </SignedIn>
      
      <SignedOut>
        <Link href="/sign-in">
          <Text>Sign In</Text>
        </Link>
        <Link href="/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins',
  },
  content: {
    flex: 1,
  },
});
