import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const MealDetailsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Details Screen</Text>
            <Button title="Go Back" onPress={() => props.navigation.goBack()}></Button>
            <Button title="Go Back to categories" onPress={() => props.navigation.popToTop()}></Button>


        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default MealDetailsScreen
