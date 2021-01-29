import React from 'react'
import { StyleSheet, View, Text, Button, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from "react-redux";
import DropdownAlert from 'react-native-dropdownalert';

import { CATEGORIES, MEALS } from '../data/dummy-data.js'
import HeaderButton from '../components/HeaderButton';
import { toggleFavourite } from "../store/actions/meals";
import { useEffect } from 'react/cjs/react.development';
import { useCallback } from 'react';

const MealDetailsScreen = (props) => {

    const mealId = props.route.params.mealId
    const availableMeals = useSelector(state => state.meals.filteredMeals)
    const favouriteMeals = useSelector(state => state.meals.favoriteMeals)

    const isFavouriteMeal = favouriteMeals.some((data) => data.id === mealId)

    const meal = availableMeals.find((data) => data.id === mealId)

    const dispatch = useDispatch();

    const toggleFavouriteHandler = useCallback(() => {
        dispatch(toggleFavourite(mealId))


    }, [dispatch, mealId])
    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavouriteHandler });
    }, [meal])
    props.navigation.setOptions({
        headerTitle: meal.title,

        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        iconSize={30}
                        title="Favorite"
                        iconName={isFavouriteMeal ? "star" : "star-outline"}
                        onPress={toggleFavouriteHandler}
                    />
                </HeaderButtons>
            )
        },
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        iconSize={40}
                        title="back"
                        iconName="arrow-back-outline"
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    />
                </HeaderButtons>
            )
        }

    }); return (
        <ScrollView>

            <View style={styles.screen}>
                <Image source={{ uri: meal.imageUrl }} style={styles.bgImage}></Image>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', height: 25, marginVertical: 10 }}>
                    <View>
                        <Text style={styles.subTitle}>{meal.duration}M</Text>
                    </View>
                    <View >
                        <Text style={styles.subTitle}>{meal.complexity.toUpperCase()}</Text>
                    </View>
                    <View>
                        <Text style={styles.subTitle}>{meal.affordability.toUpperCase()}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{
                        fontFamily: 'open-sans-bold',
                        fontSize: 25
                    }}>ingredients</Text>

                </View>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    {meal.ingredients.map((data) => <View style={{ marginVertical: 10, borderColor: 'black', borderWidth: 1, width: "80%", marginHorizontal: 30, height: 40, padding: 8 }}><Text style={{ fontSize: 15 }}>{data}</Text></View>)}
                </View>
                <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
                    <Text style={{
                        fontFamily: 'open-sans-bold',
                        fontSize: 25
                    }}>Steps</Text>

                </View>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    {meal.steps.map((data) => <View style={{ marginVertical: 10, borderColor: 'black', borderWidth: 1, width: "80%", marginHorizontal: 30, height: 40, padding: 8 }}><Text style={{ fontSize: 15 }}>{data}</Text></View>)}
                </View>

                <Button title="Go Back" onPress={() => props.navigation.goBack()}></Button>
                <Button title="Go Back to categories" onPress={() => props.navigation.popToTop()}></Button>


            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    bgImage: {
        height: 250,
        width: '100%',
    },
    subTitle: {
        fontFamily: 'open-sans',
        fontSize: 15,
    },
})


export default MealDetailsScreen
