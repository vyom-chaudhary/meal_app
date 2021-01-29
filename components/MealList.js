import React from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data.js'
import colors from '../constants/color'


const MealList = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('MealDetailsScreen', {
                mealId: itemData.item.id,
                mealTitle: itemData.item.title
            })} activeOpacity={0.9} style={{ flex: 1, marginHorizontal: 15, marginBottom: 5, borderRadius: 20, overflow: "hidden" }}>
                <View style={styles.grid}>
                    <View>
                        <ImageBackground source={{ uri: itemData.item.imageUrl }} style={styles.bgImage}>
                            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: 50, padding: 10 }}>
                                <Text style={styles.title} numberOfLines={2}>{itemData.item.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>

                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: "#d7dbd5", height: 25 }}>
                    <View style={{ marginHorizontal: 50 }}>
                        <Text styles={styles.subTitle}>{itemData.item.duration}m</Text>
                    </View>
                    <View style={{ marginHorizontal: 50 }}>
                        <Text styles={styles.subTitle}>{itemData.item.complexity}</Text>
                    </View>
                    <View style={{ marginHorizontal: 50 }}>
                        <Text styles={styles.subTitle}>pricey</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={props.mealData}
            renderItem={renderGridItem}
            numColumns={1}></FlatList>
    )
}
const styles = StyleSheet.create({
    grid: {
        flex: 1,
        height: 250,
        width: '100%',
        // marginTop: 20,
        backgroundColor: 'grey'
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    subTitle: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
    },
    rowContainer: {
        // flex: 1
    }
})
export default MealList
