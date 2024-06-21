import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import GlobalLayout from '../_layout'; 
import TabLayout from './_layout'; 
import LoginScreen from '@/components/Screen/LoginScreen/LoginScreen';

import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <GlobalLayout>
          <TabLayout>
            {/* maincontent */}
            <View style={styles.content}>
              <LoginScreen />
            </View>
          </TabLayout>
        </GlobalLayout>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
  },
  content: {
    flex: 1,
  },
});

export default App;

