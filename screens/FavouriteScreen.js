import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data.js'
import { StyleSheet, View, Text } from 'react-native'
import MealList from "../components/MealList";

const FavouriteScreen = (props) => {
    const favMeals = MEALS.filter((data) => data.id === 'm1' || data.id === 'm2')
    return (
        <MealList navigation={props.navigation} mealData={favMeals}>

        </MealList>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default FavouriteScreen
