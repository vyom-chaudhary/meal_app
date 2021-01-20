import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data.js'
import colors from '../constants/color'
// import { FlatList } from 'react-native-gesture-handler'
import MealItem from '../components/MealItem'

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId')
    const displayMeals = MEALS.filter((data) => {
        return data.categoryIds.indexOf(catId) >= 0
    })
    const renderMealItem = (itemData) => {
        const data = itemData.item
        return (
            <MealItem mealData={data}></MealItem>
            // <View>
            //     <Text>{itemData.item.title}</Text>
            // </View>
        )
    }
    return (
        // <View style={styles.screen}>
        //     <Text>The Category Meals screen</Text>
        //     <Button title="Meal details" onPress={() => props.navigation.navigate({ routeName: 'MealDetail' })}></Button>
        //     <Button title="Go Back" onPress={() => props.navigation.goBack()}></Button>
        // </View>
        <FlatList style={{ marginTop: 20 }} keyExtractor={(item, index) => item.id} data={displayMeals} renderItem={renderMealItem} numColumns={1}></FlatList>
    )
}
CategoryMealsScreen.navigationOptions = (props) => {
    const catId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find((data) => data.id === catId)

    return {
        headerTitle: selectedCategory.title,
        // headerStyle: {
        //     backgroundColor: colors.primaryColor
        // },
        // headerTintColor: 'white'
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default CategoryMealsScreen
