import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from "react-native";
import React, { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../../features/restaurantSlice";
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import { clearBasket } from "../../features/basketSlice";

export function DeliveryScreen() {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(clearBasket())
    }, [])

    return (
        <View className="bg-[#00CCBB] flex-1">
            <SafeAreaView className="z-50 pt-3">
                <View className="flex-row justify-between items-center p-5 pt-8">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <XIcon color="white" size={30} />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>

                <View className="bg-white mx-3 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-base text-gray-400">Estimated Arrival</Text>
                            <Text className="text-2xl font-bold">45-55 Minutes</Text>
                        </View>
                        <Image
                            source={{
                                uri: "https://media1.giphy.com/media/gsr9MG7bDvSRWWSD1Y/200w.gif",
                            }}
                            className="h-16 w-20"
                        />
                    </View>
                    <Progress.Bar width={160} size={20} color="#00CCBB" indeterminate={true} />
                </View>
            </SafeAreaView>

            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                className="flex-1 -mt-10 z-0"
                mapType="mutedStandard"
                style={{ width: '100%', height: '59%' }}>
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier="origin"
                    pinColor="#00CCBB"
                />
            </MapView>

            <SafeAreaView className="bg-white flex-row items-center p-4">
                <Image
                    source={{
                        uri: "https://pbs.twimg.com/media/EGIeHV4WoAA_qE6.jpg",
                    }}
                    className="h-12 w-12 bg-gray-300 rounded-full"
                />
                <View className="flex-1">
                    <Text className="text-base">Sashen Hasindu</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>
                <Text className="text-[#00CCBB] text-lg">Call</Text>
            </SafeAreaView>
        </View>
    );
}