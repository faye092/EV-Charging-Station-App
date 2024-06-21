import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Html = () => {
  return (
    <View style={styles.container}>
      <Text>Custom HTML Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Html;
