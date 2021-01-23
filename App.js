import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

import MealsNavigator from './navigation/MealsNavigator'
import TabNavigator from './navigation/TabNavigator'
import DrawerNavigation from "./navigation/DrawerNavigator";


enableScreens();


const FetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoading, setFontLoading] = useState(false)

  if (!fontLoading) {
    return (<AppLoading startAsync={FetchFonts} onFinish={() => setFontLoading(true)} onError={() => console.log('font loading in error')}></AppLoading>)
  }
  return (
    // <View style={styles.container}>
    //   <Text style={{ fontFamily: 'open-sans-bold' }}>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <DrawerNavigation>

      </DrawerNavigation>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
