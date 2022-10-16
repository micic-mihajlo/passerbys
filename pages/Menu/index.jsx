import { StatusBar } from "expo-status-bar";
import styles from "../Home/styles";
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
 
export default function Login( { navigation } ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { height, width } = Dimensions.get('window');

 
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/bg-orange.png')} style={styles.imagebg}>
        
 
        <StatusBar style="auto" />
        <Text style={styles.menuText}>Menu</Text>

        <TouchableOpacity style={styles.button}  onPress={() =>
        navigation.navigate('Home', {name: email})}>
          <Text style={styles.loginText}>i n b o x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={() =>
        navigation.navigate('Home', {name: email})}>
          <Text style={styles.loginText}>c o l l e c t i o n</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={() =>
        navigation.navigate('Home', {name: email})}>
          <Text style={styles.loginText}>h i s t o r y</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
 
