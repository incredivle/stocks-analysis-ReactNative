import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from "../screens/HomeScreen";
import CompanyDetails from "../screens/CompanyDetailsScreen";
import AddCompany from "../screens/AddCompanyScreen";
import About from "../screens/AboutScreen";
import AuthScreen from "../screens/AuthScreen";
import Colors from "../constants/Colors";

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    CompanyDetailsScreen: CompanyDetails,
    AddCompanyScreen: AddCompany,
    AboutScreen: About
});

const NewCompanyNavigator = createStackNavigator({
    AddCompanyScreen: AddCompany,

});

const AboutNavigator = createStackNavigator({
    AboutScreen: About,

});

const TabNavigator = createBottomTabNavigator({
    Home: {screen: AppNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-home' size={24} color={tabInfo.tintColor}/>
        }
    }},
    AddCompanyScreen: {screen: NewCompanyNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='md-add' size={24} color={tabInfo.tintColor}/>
        }
    }},
    AboutScreen: {screen: AboutNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-information-circle-outline' size={24} color={tabInfo.tintColor}/>
        }
    }}

}, {
    tabBarOptions: {
        activeTintColor: Colors.primaryColor,
        showLabel: false
    }
});

const MainNavigator = createSwitchNavigator({
    Auth: AuthScreen,
    App: TabNavigator
})

export default createAppContainer(MainNavigator);