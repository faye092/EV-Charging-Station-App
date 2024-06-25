import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useUser } from "@clerk/clerk-expo";

export default function TabHomeScreen() {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {user?.emailAddresses[0].emailAddress}!</Text>
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
});
