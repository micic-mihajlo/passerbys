import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Login from "./pages/Login";
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
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}