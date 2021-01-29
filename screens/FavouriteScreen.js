import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data.js'
import { StyleSheet, View, Text } from 'react-native'
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavouriteScreen = (props) => {
    //   favoriteMeals
    const favMeals = useSelector(state => state.meals.favoriteMeals)
    // const favMeals = availableMeals.filter((data) => data.id === 'm1' || data.id === 'm2')
    props.navigation.setOptions({
        headerTitle: 'Your Favorites',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        iconSize={40}
                        title="back"
                        iconName="menu-outline"
                        onPress={() => { props.navigation.toggleDrawer(); }


                        }
                    />
                </HeaderButtons>
            )
        }
    })
    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>No meals found Start adding meals to favourite</Text>
            </View>
        )
    } else {
        return (
            <MealList navigation={props.navigation} mealData={favMeals}>

            </MealList>
        )
    }

}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default FavouriteScreen
