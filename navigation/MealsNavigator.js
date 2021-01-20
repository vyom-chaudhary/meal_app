import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import colors from '../constants/color'



const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        // navigationOptions: {
        //     headerStyle: {
        //         backgroundColor: colors.primaryColor
        //     },
        //     headerTintColor: 'white'
        // }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        // navigationOptions: {
        //     headerStyle: {
        //         backgroundColor: colors.primaryColor
        //     },
        //     headerTintColor: 'white'
        // }
    },

    MealDetail: MealDetailsScreen

},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.primaryColor
            },
            headerTintColor: 'white'
        }
    })
export default createAppContainer(MealsNavigator)