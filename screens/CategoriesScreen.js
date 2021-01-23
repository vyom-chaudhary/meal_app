import React, { useRef } from 'react'

import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Animated } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CATEGORIES } from '../data/dummy-data.js'
import colors from '../constants/color'
import CategoryGridTile from '../components/CategoryGridTile'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'

import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = (props) => {
    const ITEM_SIZE = 180
    const scrollY = useRef(new Animated.Value(0)).current
    const renderGridItem = (itemData) => {
        const inputRange = [
            -1,
            0,
            ITEM_SIZE * itemData.index,
            ITEM_SIZE * (itemData.index + 2)
        ]
        const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * itemData.index,
            ITEM_SIZE * (itemData.index + 1)
        ]
        const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0]
        })
        const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0]
        })
        return (
            <CategoryGridTile style={{ transform: [{ scale }], opacity }} title={itemData.item.title} color={itemData.item.color} scale={scale} inputRange={inputRange} onSelect={() => props.navigation.navigate(
                "CategoryMealsScreen", {
                categoryId: itemData.item.id
            }
            )} ></ CategoryGridTile>

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
    props.navigation.setOptions({
        headerTitle: 'Categories',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        iconSize={40}
                        title="back"
                        iconName="menu-outline"
                        onPress={() =>

                            props.navigation.toggleDrawer()


                        }
                    />
                </HeaderButtons>
            )
        }
    })
    return (
        <Animated.FlatList
            keyExtractor={(item, index) => item.id}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
            )}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={1}></Animated.FlatList>
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