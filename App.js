import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import styles from './styles.js';
import Svg, { Image } from 'react-native-svg';

export default function App() {
  const { height, width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Svg height={height} width={width}>
          <Image 
            href={require('./assets/login-background.png')}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid slice"
            />
        </Svg>
        <View style={styles.closeButtonContainer}>
          <Text>X</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        { /*<View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </View>
      </View> */}
      </View>
      <View style={styles.formInputContainer}>
        <TextInput placeholder ="Email" placeholderTextColor="black" style={styles.textInput}/>
        <TextInput placeholder='Password' placeholderTextColor="black" style={styles.textInput}/>
        <TextInput placeholder='Repeat Password' placeholderTextColor="black" style={styles.textInput}/>

        <View style={styles.formButton}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </View>
    </View>
    
  );
}
