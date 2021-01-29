import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, View, Text, Button, Switch } from 'react-native'
import { useDispatch } from "react-redux";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import colors from '../constants/color'
import { filteredMeals } from "../store/actions/meals";


const FiltersScreen = (props) => {

    const dispatch = useDispatch()
    const FiltersSwitch = (props) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "80%", marginVertical: 10 }}>
                <Text style={{ fontSize: 18, fontFamily: 'open-sans' }}>{props.switchLabel}</Text>
                <Switch
                    label={props.switchLabel}
                    trackColor={{ true: colors.primaryColor }}
                    onValueChange={props.onChange}
                    value={props.state}
                ></Switch>
            </View>

        )
    }
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVeganFree, setIsVeganFree] = useState(false)
    const [isVegitarianFree, setIsVegitarianFree] = useState(false)

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree, lactoseFree: isLactoseFree, veganFree: isVeganFree, vegitarianFree: isVegitarianFree
        }
        dispatch(filteredMeals(appliedFilters))
    }, [isGlutenFree, isLactoseFree, isVeganFree, isVegitarianFree, dispatch])

    useEffect(() => {
        // props.navigation.setOptions({
        //     save: saveFilters
        // })
        props.navigation.setParams({ save: saveFilters });
    }, [saveFilters])

    props.navigation.setOptions({
        headerTitle: 'filters',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        iconSize={40}
                        title="back"
                        iconName="menu-outline"
                        onPress={() => { props.navigation.toggleDrawer(); }


                        }
                    />
                </HeaderButtons>
            )
        },
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        iconSize={30}
                        title="back"
                        iconName="ios-save"
                        onPress={() => { props.route.params.save() }


                        }
                    />
                </HeaderButtons>
            )
        }
    })
    return (
        <View style={styles.screen}>
            <Text style={{ fontSize: 25, paddingVertical: 5, fontFamily: 'open-sans-bold', textAlign: 'center' }} numberOfLines={2}>Available Filters / Restrictions</Text>

            <FiltersSwitch
                switchLabel="Gluten-free"
                onChange={(currValue) => setIsGlutenFree(currValue)}
                state={isGlutenFree}
            ></FiltersSwitch>
            <FiltersSwitch
                switchLabel="Lactose-free"
                onChange={(currValue) => setIsLactoseFree(currValue)}
                state={isLactoseFree}
            ></FiltersSwitch>
            <FiltersSwitch
                switchLabel="Vegan-free"
                onChange={(currValue) => setIsVeganFree(currValue)}
                state={isVeganFree}
            ></FiltersSwitch>
            <FiltersSwitch
                switchLabel="Vegitarian-free"
                onChange={(currValue) => setIsVegitarianFree(currValue)}
                state={isVegitarianFree}
            ></FiltersSwitch>

            <Button title="Go Back" onPress={() => props.navigation.goBack()}></Button>

        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
        // justifyContent: 'center'
    }
})


export default FiltersScreen
