import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CategoriesList } from "../components/CategoriesList";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import FeatureRow from "../components/FeaturedRow";

import sanityClient from "../../sanity";

export function HomeScreen() {

    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: false,
        });
    }, []);

    useEffect(() => { }, [
        sanityClient
            .fetch(
                `
        *[_type == "featured"] {
          ...,
          restaurants[]->{
            ...,
            dishes[] ->
          }
        }`
            )
            .then((data) => {
                setFeaturedCategories(data);
            }),
    ]);


    return (
        <SafeAreaView className="bg-white pt-5 flex-1">
            <Header />
            <Search />

            <ScrollView className="flex-1">
                {/* Categary */}
                <CategoriesList />

                {featuredCategories?.map((category) => (
                    <FeatureRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}