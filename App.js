import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Fb from './screens/fb.js'
import In from './screens/in.js'

export default class App extends React.Component {
render() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
   );
  }
}

const TabNavigator = createBottomTabNavigator() ({
  Fb: {screens: Fb},
  In: {screens: In}
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
