import React from "react";
import { View, StyleSheet } from "react-native";
import {Stack} from "expo-router";
import { ClerkProvider, ClerkLoaded, useAuth } from "@clerk/clerk-expo";
import useWarmUpBrowser from "@/hooks/warmUpBrowser";
import useFontsAndSplashScreen from "@/hooks/useFontsAndSplashScreen";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
}

const RootLayout = () => {
  const {fontsLoaded, fontError} = useFontsAndSplashScreen();
  const {isSignedIn} = useAuth(); // check if the user is signed in

  useWarmUpBrowser();

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>
        <View style={styles.container}>
          <Stack>
            {isSignedIn?(
              <Stack.Screen name="(tabs)" options={{headerShown: false}}/>             
            ):(
              <Stack.Screen name="login" options={{headerShown: false}}/>
            )}           
          </Stack>
        </View>
      </ClerkLoaded>
    </ClerkProvider>
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },  
});

export default RootLayout;  