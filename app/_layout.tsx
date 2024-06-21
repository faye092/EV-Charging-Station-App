import React from 'react';
import { View, StyleSheet } from 'react-native';

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      {/* top bar */}
      <View style={styles.topNavigation}>
        {/* top Navigation */}
      </View>
      {/* main content*/}
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topNavigation: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  content: {
    flex: 1,
  },
});

export default GlobalLayout;
