import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useOAuth } from "@clerk/clerk-expo";
import { useNavigation } from "expo-router";
import Colors from "@/constants/Colors";

const LoginScreen = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const onPress = useCallback(async () => {
    try {
      setIsLoading(true);
      const { createdSessionId, signIn, signUp } = await startOAuthFlow();

      if (createdSessionId) {
        console.log('User signed in successfully');
        navigation.navigate('(tabs)' as never);
      } else {
        // Use signIn or signUp for next steps such as MFA
        console.log('Additional steps required');
      }
    } catch (err) {
      console.error("OAuth error", err);
      // can show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  }, [startOAuthFlow, navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/images/logo.png')}
        style={styles.logoImage}
      />
      <Image 
        source={require('@/assets/images/ev-charging.png')}
        style={styles.bgImage}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Your Ultimate EV charging Station Finder App</Text>
        <Text style={styles.desc}>Find EV charging station near you, plan trip and so much more in just one click</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={onPress}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color={Colors.WHITE} />
          ) : (
            <Text style={styles.buttonText}>
              Login with Google
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  logoImage: {
    width: 200,
    height: 40,
    resizeMode: 'contain',
  },
  bgImage: {
    width: '100%',
    height: 240,
    marginTop: 20,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginTop: 20,
  },
  desc: {
    fontSize: 17,
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginTop: 15,
    color: Colors.GRAY,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 99,
    marginTop: 70,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  }
});

export default LoginScreen;