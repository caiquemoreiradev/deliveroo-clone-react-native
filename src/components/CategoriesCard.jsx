import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function CategoriesCard({ imgUrl, title }) {
    return (
        <TouchableOpacity className="relative mr-2 ">
            <Image
                source={{
                    uri: imgUrl,
                }}
                className="h-20 w-20 rounded"
            />
            <Text className="absolute bottom-1 text-white font-bold bg-black/[0.4] w-full pt-1 pb-1 pl-2">
                {title}
            </Text>
        </TouchableOpacity>
    );
}