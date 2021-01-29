import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { CATEGORIES, MEALS } from '../data/dummy-data.js'
import colors from '../constants/color'
// import { FlatList } from 'react-native-gesture-handler'
import MealItem from '../components/MealItem'

const CategoryMealsScreen = ({ navigation, route }) => {
    const catId = route.params.categoryId

    const availableMeals = useSelector(state => state.meals.filteredMeals)
    const selectedCategory = CATEGORIES.find((data) => data.id === catId)

    const displayMeals = availableMeals.filter((data) => {
        return data.categoryIds.indexOf(catId) >= 0
    })
    const renderMealItem = (itemData) => {
        const data = itemData.item
        return (
            <MealItem mealData={data} onSelectMeal={() => navigation.navigate(
                'MealDetailsScreen',
                {
                    mealId: itemData.item.id
                }
            )}></MealItem>
            // <View>
            //     <Text>{itemData.item.title}</Text>
            // </View>
        )
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: selectedCategory.title,
        });
    }, [navigation])

    return (

        <FlatList style={{ marginTop: 20 }} keyExtractor={(item, index) => item.id} data={displayMeals} renderItem={renderMealItem} numColumns={1}></FlatList>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default CategoryMealsScreen
