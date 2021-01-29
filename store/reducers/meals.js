import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVOURITE } from "../actions/meals";
import { FILTERED_MEALS } from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}
const mealReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            // const meal = state.meals.find((data) => data.id === action.mealId)
            // return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
            const exist = state.favoriteMeals.filter((data) => data.id === action.mealId)
            if (exist.length >= 1) {
                const updatedMeallist = state.favoriteMeals.filter((data) => data.id !== action.mealId)
                return { ...state, favoriteMeals: updatedMeallist }
            } else {
                const meal = state.meals.find((data) => data.id === action.mealId)
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
            }
        case FILTERED_MEALS:
            const filter = state.meals.filter((meal) => {
                if (action.filters.glutenFree && !meal.isGlutenFree) {
                    return false
                }
                if (action.filters.lactoseFree && !meal.isLactoseFree) {
                    return false
                }
                if (action.filters.veganFree && !meal.isVeganFree) {
                    return false
                }
                if (action.filters.vegitarianFree && !meal.isVegitarianFree) {
                    return false
                }
                return true
            })
            return { ...state, filteredMeals: filter }

        default:
            return state;
    }

}


export default mealReducer