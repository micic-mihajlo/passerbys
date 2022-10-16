import { StyleSheet, Dimensions } from 'react-native';
//import font Jost
//import { useFonts, Jost_600SemiBold } from '@expo-google-fonts/jost';


const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {  
    justifyContent: 'center',
    flex: 1,

  },
 nextText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -100,
    marginLeft: 300,
    marginBottom: 150,
  },
  image: {
    marginBottom: 40,
    alignItems: 'center',
  },
  welcomeText: {
    fontWeight: 'italic',
    fontSize: 25,
    color: '#F28F33',
    textAlign: 'center',
    marginBottom: 20,
  },


  imagebg:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
    //width: width,
    //height: height,
  },
  inputView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAE5D1",
    borderRadius: 30,
    //width: "70%",
    height: 65,
    width: 250,
    
    marginBottom: 20,
    
  },
 
  TextInput: {
    //fontFamily: "Jost_600SemiBold",
    fontStyle: "normal",
    //fontWeight: 600,
    fontSize: 20,
    height: 40,
    textAlign: "center",
    color: "#F28F33"
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  button: {
    backgroundColor: '#F28F33', // change this
    
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: 250,
    height: 50

  },
});

export default styles;