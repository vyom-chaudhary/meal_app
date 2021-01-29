import React, { useRef, useLayoutEffect } from 'react'

import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Animated } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import { CATEGORIES } from '../data/dummy-data.js'
import colors from '../constants/color'
import CategoryGridTile from '../components/CategoryGridTile'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'




const CategoriesScreen = ({ navigation }) => {
    const ITEM_SIZE = 180
    const scrollY = useRef(new Animated.Value(0)).current
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={() => navigation.navigate(
                "CategoryMealsScreen", {
                categoryId: itemData.item.id
            }
            )} ></ CategoryGridTile>


        )
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Categories',
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        iconSize={40}
                        title="back"
                        iconName="menu-outline"
                        onPress={() => navigation.toggleDrawer()}
                    />
                </HeaderButtons>
            )

        })
    }, [navigation])
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            // onScroll={Animated.event(
            //     [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            //     { useNativeDriver: true }
            // )}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}></FlatList>


    )
};

// CategoriesScreen.navigationOptions = {
//     headerTitle: 'Category Meals',
//     // headerStyle: {
//     //     backgroundColor: colors.primaryColor
//     // },
//     // headerTintColor: 'white'
// }
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