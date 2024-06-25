import React, { useEffect } from "react";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import useWarmUpBrowser from "@/hooks/warmUpBrowser";
import useFontsAndSplashScreen from "@/hooks/useFontsAndSplashScreen";
import { tokenCache } from "@/constants/TokenCache";
import * as WebBrowser from 'expo-web-browser';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
}

const RootLayout = () => {
  const { fontsLoaded, fontError } = useFontsAndSplashScreen();

  useWarmUpBrowser();

  useEffect(() => {
    WebBrowser.maybeCompleteAuthSession();
  }, []);

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <ClerkProvider 
      publishableKey={publishableKey}
      tokenCache={tokenCache}
    >
      <ClerkLoaded>
        <Slot />
      </ClerkLoaded>
    </ClerkProvider>
  );
};

export default RootLayout;