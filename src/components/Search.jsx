import {
    TextInput,
    View,
} from "react-native";

import {
    AdjustmentsIcon,
    SearchIcon,
} from "react-native-heroicons/outline";

export function Search() {

    return (
        <>
            {/* search */}
            < View className="flex-row items-center space-x-2 pb-4 mx-4" >
                <View className="flex-row items-center space-x-2 flex-1 bg-gray-200 p-3 mt-2">
                    <SearchIcon color="gray" size={20} />
                    <TextInput
                        placeholder="Restaurants and cuisines"
                        keyboardType="default"
                    />
                </View>
                <AdjustmentsIcon color="#00CCBB" size={24} />
            </View >
        </>
    )
}