import React from "react";
import { View, StyleSheet } from "react-native";
import {Stack} from "expo-router";
import useWarmUpBrowser from "@/hooks/warmUpBrowser";
import useFontsAndSplashScreen from "@/hooks/useFontsAndSplashScreen";

const RootLayout = () => {
  const {fontsLoaded, fontError} = useFontsAndSplashScreen();

  useWarmUpBrowser();

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Stack>
       <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
       <Stack.Screen name="login" options={{headerShown: false}}/>
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },  
});

export default RootLayout;  