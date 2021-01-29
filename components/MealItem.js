import React from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data.js'
import colors from '../constants/color'



const MealItem = (props) => {


    return (
        <TouchableOpacity onPress={props.onSelectMeal} activeOpacity={0.9} style={{ flex: 1, marginHorizontal: 15, marginBottom: 5, borderRadius: 20, overflow: "hidden" }}>
            <View style={styles.grid}>
                <View>
                    <ImageBackground source={{ uri: props.mealData.imageUrl }} style={styles.bgImage}>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: 50, padding: 10 }}>
                            <Text style={styles.title} numberOfLines={2}>{props.mealData.title}</Text>
                        </View>
                    </ImageBackground>
                </View>

            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: "#d7dbd5", height: 25 }}>
                <View style={{ marginHorizontal: 50 }}>
                    <Text styles={styles.subTitle}>{props.mealData.duration}M</Text>
                </View>
                <View style={{ marginHorizontal: 50 }}>
                    <Text styles={styles.subTitle}>{props.mealData.complexity.toUpperCase()}</Text>
                </View>
                <View style={{ marginHorizontal: 50 }}>
                    <Text styles={styles.subTitle}>{props.mealData.affordability.toUpperCase()}</Text>
                </View>
            </View>
        </TouchableOpacity>



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


export default MealItem