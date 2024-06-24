import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./../../../assets/images/logo.png')}
        style = {styles.logoImage}
      />
      <Image source={require('./../../../assets/images/ev-charging.png')}
        style = {styles.bgImage}
      />
      <View style={{padding:20}}>
        <Text style={styles.heading}>Your Ultimate EV charging Station Finder App</Text>
        <Text style={styles.desc}>Find EV charging station near you, plan trip and so much more in just one click</Text>
        <TouchableOpacity style={styles.button}
        onPress={() =>console.log("Button Clicked")}>
          <Text style={styles.buttonText}>
            Login with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  logoImage:{
    width:200,
    height:40,
    objectFit:'contain',
  },
  bgImage:{
    width:'100%',
    height:240,
    marginTop:20,
    objectFit:'cover',
  },
  heading:{
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginTop: 20,
  },
  desc:{
    fontSize: 17,
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginTop: 15,
    color:Colors.GRAY,
  },
  button:{
    backgroundColor: Colors.PRIMARY,
    padding:16,
    display:'flex',
    borderRadius:99,
    marginTop:70,
  },
  buttonText:{
    color: Colors.WHITE,
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  }
});

export default LoginScreen;