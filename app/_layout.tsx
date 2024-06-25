import React from "react";
import { View, StyleSheet } from "react-native";
import {Stack} from "expo-router";
import { ClerkProvider, ClerkLoaded, SignedIn, SignedOut} from "@clerk/clerk-expo";
import useWarmUpBrowser from "@/hooks/warmUpBrowser";
import useFontsAndSplashScreen from "@/hooks/useFontsAndSplashScreen";
import { tokenCache } from "@/constants/TokenCache";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
}

const RootLayout = () => {
  const {fontsLoaded, fontError} = useFontsAndSplashScreen();

  useWarmUpBrowser();

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <ClerkProvider 
    publishableKey={publishableKey}
    tokenCache={tokenCache}
    >
      <ClerkLoaded>
        <View style={styles.container}>
          <SignedIn>
          <Stack>          
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>                           
          </Stack>
          </SignedIn>
          <SignedOut>
          <Stack>                              
            <Stack.Screen name="login" options={{headerShown: false}}/>        
          </Stack>
          </SignedOut>
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