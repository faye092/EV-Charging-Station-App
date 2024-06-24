import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // Add other options like icons
        }}
      />
      {/* Add other tab screens */}
    </Tabs>
  );
};

export default TabLayout;