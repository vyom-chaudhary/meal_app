export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE'
export const FILTERED_MEALS = 'FILTERED_MEALS'

export const toggleFavourite = (id) => {
    return { type: TOGGLE_FAVOURITE, mealId: id }
}
export const filteredMeals = (appliedFilters) => {
    return { type: FILTERED_MEALS, filters: appliedFilters }
}