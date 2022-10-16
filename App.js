import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Prompts from "./pages/Prompts";

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
         name="Register" 
         component={Register}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Prompts" component={Prompts} />
        {/* <Stack.Screen name="MainMenu" component={MainMenu} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}