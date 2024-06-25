import React from "react";
import { Redirect, Slot } from "expo-router";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";

export default function AuthLayout() {
  return (
    <>
      <SignedIn>
        <Redirect href="/(tabs)" />
      </SignedIn>
      <SignedOut>
        <Slot />
      </SignedOut>
    </>
  );
}