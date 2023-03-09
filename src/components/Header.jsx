import {
    Image,
    Text,
    View,
} from "react-native";

import {
    ChevronDownIcon,
    UserIcon,
} from "react-native-heroicons/outline";

export function Header() {

    return (
        <View className="flex-row pb-3 items-center mx-4 space-x-2 pt-8">
            <Image
                source={{
                    uri: "https://cdn6.aptoide.com/imgs/9/f/e/9fec5369612f15f698ecbbed5e1ec626_icon.png",
                }}
                className="h-10 w-10 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                <View className="flex-row items-center">
                    <Text className="font-bold text-xl">
                        Current Location
                    </Text>
                    <ChevronDownIcon style={{ marginLeft: 2 }} size={20} color="#00CCBB" />
                </View>
            </View>
            <UserIcon size={35} color="#00CCBB" />
        </View>
    )
}