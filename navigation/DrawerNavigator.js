import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavouriteScreen from '../screens/FavouriteScreen'
import FiltersScreen from '../screens/FiltersScreen'
import colors from '../constants/color'
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { MealsNavigator, FavouriteNavigator, FiltersNavigator } from "./MealsNavigator";
import TabNavigator from "./TabNavigator";


// const Drawer = createDrawerNavigator();


// // <Drawer.Screen name="Meals" component={TabNavigator} />

// // <Drawer.Screen name="Filters" component={FiltersNavigator} />

// const DrawerNavigation = () => {
//     return (
//         // <NavigationContainer independent={true}>
//         <Drawer.Navigator initialRouteName="Meals">

//             <Drawer.Screen name="Meals" component={MealsNavigator} />

//             <Drawer.Screen name="Filters" component={FavouriteScreen} />
//         </Drawer.Navigator>
//         // </NavigationContainer>
//     );
// }
function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
            />
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={MealsNavigator} />
            <Drawer.Screen name="Notifications" component={FavouriteScreen} />
        </Drawer.Navigator>
    );
}

export default MyDrawer