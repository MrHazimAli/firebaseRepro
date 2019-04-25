import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Main from '../screens/Main';
import More from '../screens/More';

export default createMaterialBottomTabNavigator({
  Main: { screen: Main },
  More: { screen: More }
}, {
  initialRouteName: 'Main',
  labeled: true,
  activeTintColor: '#4F1A6C', 
  inactiveTintColor: '#949292',
  barStyle: { backgroundColor: '#fff' }
});