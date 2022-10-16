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

        <TouchableOpacity  onPress={() =>
        navigation.navigate('Register')}>
          <Text style={styles.forgot_button}>No account? Sign up!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}  onPress={() =>
        navigation.navigate('Home', {name: email})}>
          <Text style={styles.loginText}>l o g i n</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
 
