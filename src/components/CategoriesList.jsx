import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import sanityClient, { urlFor } from "../../sanity";
import CategoriesCard from "../components/CategoriesCard";

export function CategoriesList() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `
        *[_type == "category"]
        `
            )
            .then((data) => {
                setCategories(data);
            });
    }, []);

    return (
        <ScrollView
            className="mb-2"
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
                paddingBottom: 12
            }}
            showsHorizontalScrollIndicator={false}
        >
            {categories.map((category) => (
                <CategoriesCard
                    key={category._id}
                    imgUrl={urlFor(category.image).width(200).url()}
                    title={category.name}
                />
            ))}
        </ScrollView>
    );
}