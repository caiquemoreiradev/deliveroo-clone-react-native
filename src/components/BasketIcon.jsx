import { useNavigation } from "@react-navigation/native";
import React from "react";
import Currency from "react-currency-formatter";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

import {
  ShoppingCartIcon
} from "react-native-heroicons/solid";

import { selectBasketItems, selectBasketTotal } from "../../features/basketSlice";

export default function BasketIcon() {

  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  //console.log(basketTotal);

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center"
      >
        <View className="flex-row items-center rounded-full bg-[#01A296] py-1 px-4">
          <ShoppingCartIcon height={18} width={18} color="#fff" />

          <Text className="text-white font-extrabold text-lg ml-1 mb-[0.5]">
            {items.length}
          </Text>
        </View>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-ld text-white font-extrabold">
          <Currency quantity={basketTotal} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}