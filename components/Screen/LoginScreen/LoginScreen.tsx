import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./../../../assets/images/logo.png')}
        style = {styles.logoImage}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  logoImage:{
    width:200,
    height:40,
    objectFit:'contain',
  }
});

export default LoginScreen;