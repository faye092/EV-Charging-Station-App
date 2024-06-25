import React from 'react';
import { Tabs } from 'expo-router';

const TabLayout = () =>{
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // You can add more options here
        }}
      />
      {/* Add more Tabs.Screen components for other tabs */}
    </Tabs>
  );
}

export default TabLayout;