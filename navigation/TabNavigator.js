import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons } from '@expo/vector-icons'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavouriteScreen from '../screens/FavouriteScreen'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MealsNavigator, FavouriteNavigator } from "./MealsNavigator";
import color from '../constants/color';



const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator initialRouteName="Meals"
                activeTintColor='white'
                shifting={true}
                barStyle={
                    { backgroundColor: color.primaryColor }
                }
            >
                <Tab.Screen name="Meals" component={MealsNavigator} options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="ios-restaurant" size={25} color={color}></Ionicons>
                    },
                    tabBarColor: color.primaryColor
                }} />
                <Tab.Screen name="Favourites" component={FavouriteNavigator} options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="ios-star" size={25} color={color}></Ionicons>
                    },
                    tabBarColor: color.accentColor
                }} />
            </Tab.Navigator>
        </NavigationContainer >
    );
}




export default TabNavigator