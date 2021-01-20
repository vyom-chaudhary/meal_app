import React from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import { CATEGORIES } from '../data/dummy-data.js'
import colors from '../constants/color'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = (props) => {

    console.log(CATEGORIES)
    const renderGridItem = (itemData) => {

        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={() => props.navigation.navigate({
                routeName: 'CategoryMeals', params: {
                    categoryId: itemData.item.id
                }
            })} ></ CategoryGridTile>

            //// <TouchableOpacity style={styles.gridItem} onPress={() => props.navigation.navigate({
            //     routeName: 'CategoryMeals', params: {
            //         categoryId: itemData.item.id
            //     }
            // })}>
            //     <View >
            //         <Text>{itemData.item.title}</Text>
            //     </View>
            // </TouchableOpacity>
        )
    }
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}></FlatList>
        // <Button title="Go to Meals" onPress={() => props.navigation.navigate({ routeName: 'CategoryMeals' })}></Button>


    )
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Category Meals',
    // headerStyle: {
    //     backgroundColor: colors.primaryColor
    // },
    // headerTintColor: 'white'
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,

    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default CategoriesScreen