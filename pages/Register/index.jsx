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
 
export default function Register( { navigation } ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { height, width } = Dimensions.get('window');

 
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/bg-orange.png')} style={styles.imagebg}>
        <Image style={styles.image} source={require("../../assets/logo1.png")} />
 
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="e m a i l"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="p a s s w o r d"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>


        <TouchableOpacity style={styles.button} onPress={() =>
        navigation.navigate('Login')} >
          <Text style={styles.loginText}>r e g i s t e r</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
 
