import React from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Animated } from 'react-native'
import { CATEGORIES } from '../data/dummy-data.js'
import colors from '../constants/color'


const CategoryGridTile = (props) => {

    return (
        <Animated.View style={{ ...styles.screen, ...props.style }}>
            <TouchableOpacity style={{ ...styles.gridItem, backgroundColor: props.color }} onPress={props.onSelect}>
                <View >
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,

    },
    gridItem: {
        flex: 1,
        margin: 15,
        padding: 15,
        height: 150,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.50,
        shadowRadius: 10,
        elevation: 3
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22
    }
})
export default CategoryGridTile