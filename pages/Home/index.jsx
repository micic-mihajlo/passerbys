import { StatusBar } from "expo-status-bar";
import styles from "./styles";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";
 
export default function Home ( { navigation, route } ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { height, width } = Dimensions.get('window');

 
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/bg-orange.png')} style={styles.imagebg}>
        
        <StatusBar style="auto" />
        <TouchableOpacity  onPress={() =>
        navigation.navigate('Menu')}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
        <View>
        </View>
        <Image style={styles.image} source={require("../../assets/logo1.png")} />
 
        <Text style={styles.welcomeText}>Welcome {route.params.name}!</Text>
        

        
      </ImageBackground>
    </View>
  );
}
 
