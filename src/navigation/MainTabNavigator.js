import React from 'react';
import { Platform, TouchableOpacity, Image, Dimensions } from 'react-native';

import { colors } from '../constants/theme';
import { Text, TabBarIcon } from '../components';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import DrawerItems from '../components/DrawerItems';

import DashBoard from '../screens/Dashboard';
import History from '../screens/History';
import Trending from '../screens/Trending';
import Heroes from '../screens/Heroes';
import Popular from '../screens/Popular';

const { width, height } = Dimensions.get('window');

const HomeStack = createStackNavigator({
    Home: DashBoard,
});

HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    let routeIndex = navigation.state.index;
    if( routeIndex >= 1 ) {
      tabBarVisible = false
    }
    return {
      tabBarVisible,
      tabBarLabel: ({ focused }) => (<Text center size={10} color={focused ? '#39ccdd' : colors.gray } style={{marginBottom: 5}}>Home</Text>),
      tabBarIcon: ({ focused }) => (
        focused ? (
            <Image 
            source={require('../../assets/images/icons/home-focused.png')}
            style={{
              marginTop: 5,
              width: 20,
              height: 20
            }}
          />) : (
            <Image 
            source={require('../../assets/images/icons/home.png')}
            style={{
              marginTop: 5,
              width: 20,
              height: 20
            }}
        />)
      ),
    }
};

const HistoryStack = createStackNavigator({
    History: History
});
  
HistoryStack.navigationOptions = {
    tabBarLabel: ({ focused }) => (
          <Text center size={10} color={focused ? '#39ccdd' : colors.gray } style={{marginBottom: 5}}>History</Text>
        ),
    tabBarIcon: ({ focused }) => (
      focused ? (
        <Image 
        source={require('../../assets/images/icons/history-focused.png')}
        style={{
          marginTop: 5,
          width: 20,
          height: 20
        }}
      />) : (
        <Image 
        source={require('../../assets/images/icons/history.png')}
        style={{
          marginTop: 5,
          width: 20,
          height: 20
        }}
      />) 
    ),
};

const TrendingStack = createStackNavigator({
    Trending: Trending
});
  
TrendingStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    let routeIndex = navigation.state.index;
    if( routeIndex == 1 ) {
      tabBarVisible = false
    }
    return {
      tabBarVisible,
      tabBarLabel: ({ focused }) => (<Text center size={10} color={focused ? '#39ccdd' : colors.gray } style={{marginBottom: 5}}>Trending</Text>),
      tabBarIcon: ({ focused }) => (
        focused ? (
            <Image 
            source={require('../../assets/images/icons/trending-focused.png')}
            style={{
              marginTop: 5,
              width: 20,
              height: 20
            }}
          />) : (
            <Image 
            source={require('../../assets/images/icons/trending.png')}
            style={{
              marginTop: 5,
              width: 20,
              height: 20
            }}
        />)
      ),
    }
};

const HeroesStack = createStackNavigator({
  Heroes: Heroes
});

HeroesStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  let routeIndex = navigation.state.index;
  if( routeIndex >= 1 ) {
    tabBarVisible = false
  }
  return {
    tabBarVisible,
    tabBarLabel: ({ focused }) => (<Text center size={10} color={focused ? '#39ccdd' : colors.gray } style={{marginBottom: 5}}>Heroes</Text>),
    tabBarIcon: ({ focused }) => (
        focused ? (
            <Image 
            source={require('../../assets/images/icons/heroes-focused.png')}
            style={{
              marginTop: 5,
              width: 20,
              height: 20
            }}
          />) : (
            <Image 
            source={require('../../assets/images/icons/heroes.png')}
            style={{
              marginTop: 5,
              width: 20,
              height: 20
            }}
        />)
    ),
  }
};

const PopularStack = createStackNavigator({
    Popular: Popular,
});
  
PopularStack.navigationOptions = ({navigation}) => {
    return {
      tabBarLabel: ({ focused }) => (<Text center size={10} color={focused ? '#39ccdd' : colors.gray } style={{marginBottom: 5}}>Popular</Text>),
      tabBarIcon: ({ focused }) => (
        focused ? (
            <Image 
            source={require('../../assets/images/icons/popular-focused.png')}
            style={{
              marginTop: 5,
              width: 20,
              height: 20
            }}
          />) : (
            <Image 
            source={require('../../assets/images/icons/popular.png')}
            style={{
              marginTop: 5,
              width: 20,
              height: 20
            }}
        />)
      ),
    }
};

const AppTabNavigator = createBottomTabNavigator({
          HomeStack,
          HistoryStack,
          TrendingStack,
          HeroesStack,
          PopularStack,
        },{
        tabBarOptions: {
          style: {
            borderTopWidth: 0.5,
            borderTopColor: 'rgba(51,51,51,0.9)',
            backgroundColor: '#20242A',
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0
          },
        }
});

const AppStackNavigator = createStackNavigator({ 
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions:({navigation}) => {
      return {
        header: null
      }
      
    }
  }
})

const DrawerConfig = {
    drawerPosition: 'left',
    contentComponent: ({ navigation }) => {
      return (<DrawerItems navigation={navigation} />)
    }
}

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: AppStackNavigator,
  },
  DrawerConfig
)
export default AppDrawerNavigator;