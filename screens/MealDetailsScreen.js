import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES, MEALS } from '../data/dummy-data.js'
import HeaderButton from '../components/HeaderButton';

const MealDetailsScreen = (props) => {

    const mealId = props.route.params.mealId
    const meal = MEALS.find((data) => data.id === mealId)
    props.navigation.setOptions({
        headerTitle: meal.title,

        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        iconSize={30}
                        title="Favorite"
                        iconName="ios-star"
                        onPress={() => {
                            console.log('Mark as favorite!');
                        }}
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
        <View style={styles.screen}>
            <Text>{meal.title}</Text>
            <Button title="Go Back" onPress={() => props.navigation.goBack()}></Button>
            <Button title="Go Back to categories" onPress={() => props.navigation.popToTop()}></Button>


        </View>
    )
}
MealDetailsScreen.navigationOptions = (props) => {
    const mealId = props.route.params.mealId
    const meal = MEALS.find((data) => data.id === mealId)
    return {
        headerTitle: meal.title,

        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    iconSize={30}
                    title="Favorite"
                    iconName="ios-star"
                    onPress={() => {
                        console.log('Mark as favorite!');
                    }}
                />
            </HeaderButtons>
        ),
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
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default MealDetailsScreen
