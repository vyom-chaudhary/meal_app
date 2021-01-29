import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

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
import color from '../constants/color';


const Stack = createStackNavigator();
const MealsNavigator = () => {
    return (
        // <NavigationContainer independent={true}>
        <Stack.Navigator
            initialRouteName="CategoriesScreen" screenOptions={{
                headerTintColor: color.primaryColor,

            }}
        >
            <Stack.Screen
                name="CategoriesScreen"
                component={CategoriesScreen}
            // options={{ title: 'My app' }}    
            />
            <Stack.Screen
                name="CategoryMealsScreen"
                component={CategoryMealsScreen}
            // options={{ title: 'My app' }}    
            />
            <Stack.Screen
                name="MealDetailsScreen"
                component={MealDetailsScreen}
            // initialParams={{ user: 'me' }}
            />
        </Stack.Navigator>
        // </NavigationContainer>
    );
}

const FavouriteNavigator = () => {
    return (
        // <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{
            headerTintColor: color.primaryColor,

        }}>
            <Stack.Screen name="Favourites" component={FavouriteScreen}></Stack.Screen>
            <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen}></Stack.Screen>

        </Stack.Navigator >
        // </NavigationContainer>
    )
}

const FiltersNavigator = () => {
    return (
        // <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{
            headerTintColor: color.primaryColor,

        }} initialRouteName="filters">
            <Stack.Screen name="filters" component={FiltersScreen}></Stack.Screen>
        </Stack.Navigator>
        // </NavigationContainer>
    )
}
// const MealsNavigator = createStackNavigator({
//     Categories: {
//         screen: CategoriesScreen,
//         // navigationOptions: {
//         //     headerStyle: {
//         //         backgroundColor: colors.primaryColor
//         //     },
//         //     headerTintColor: 'white'
//         // }
//     },
//     CategoryMeals: {
//         screen: CategoryMealsScreen,
//         // navigationOptions: {
//         //     headerStyle: {
//         //         backgroundColor: colors.primaryColor
//         //     },
//         //     headerTintColor: 'white'
//         // }
//     },

//     MealDetail: MealDetailsScreen

// },
//     {
//         defaultNavigationOptions: {
//             // headerStyle: {
//             //     backgroundColor: colors.primaryColor
//             // },
//             // headerTintColor: 'white'
//         }
//     })

export { MealsNavigator, FavouriteNavigator, FiltersNavigator }
// const Tab = createBottomTabNavigator();
// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator screenOptions={({ route }) => ({
//                 // tabBarIcon: ({ focused, color, size }) => {
//                 //     let iconName;

//                 //     if (route.name === 'Meals') {
//                 //         iconName = focused
//                 //             ? 'ios-information-circle'
//                 //             : 'ios-information-circle-outline';
//                 //     } else if (route.name === 'Favourites') {
//                 //         iconName = focused ? 'ios-list-box' : 'ios-list';
//                 //     }

//                 //     // You can return any component that you like here!
//                 //     return <Ionicons name={iconName} size={size} color={color} />;
//                 // },
//                 tabBarIcon: (tabInfo) => {
//                     if (route.name === 'Meals') {
//                         return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}></Ionicons>
//                     } else {
//                         return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}></Ionicons>
//                     }
//                 }
//             })}>
//                 <Tab.Screen name="Meals" component={MealsNavigator} />
//                 <Tab.Screen name="Favourites" component={FavouriteScreen} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }

    // const MealsFavTabNavigation = createBottomTabNavigator({
    //     Meals: {
    //         screen: MealsNavigator, navigationOptions: {
    //             tabBarIcon: (tabInfo) => {
    //                 return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}></Ionicons>
    //             }
    //         }
    //     },
    //     Favourites: {
    //         screen: FavouriteScreen,
    //         navigationOptions: {
    //             tabBarIcon: (tabInfo) => {
    //                 return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}></Ionicons>
    //             }
    //         }
    //     }
    // }, {
    //     tabBarOptions: {
    //         activeTintColor: colors.primaryColor
    //     }
    // })
