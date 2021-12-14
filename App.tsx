import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from "react";

const Stack = createNativeStackNavigator();
import Home from './src/pages/Home'
import { Municipio } from "./src/pages/Municipio";

function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Municipio" component={Municipio} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App