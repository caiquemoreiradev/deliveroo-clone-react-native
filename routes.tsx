import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { TailwindProvider } from "tailwindcss-react-native";

import { BasketScreen } from "./src/screens/BasketScreen";
import { DeliveryScreen } from "./src/screens/DeliveryScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { PreparingOrderScreen } from "./src/screens/PreparingOrderScreen";

import {RestaurantScreen} from './src/screens/RestaurantScreen';

const Stack = createNativeStackNavigator();

export function Routes() {

    return (
        <NavigationContainer>
            <TailwindProvider>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Restaurants" component={RestaurantScreen} />
                    <Stack.Screen
                        name="Basket"
                        component={BasketScreen}
                        options={{ presentation: "modal", headerShown: false }}
                    />
                    <Stack.Screen
                        name="PreparingOrderScreen"
                        component={PreparingOrderScreen}
                        options={{ presentation: "fullScreenModal", headerShown: false }}
                    />
                    <Stack.Screen
                        name="Delivery"
                        component={DeliveryScreen}
                        options={{ presentation: "fullScreenModal", headerShown: false }}
                    />
                </Stack.Navigator>
            </TailwindProvider>
        </NavigationContainer>
    )
}