import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import CompanyDetails from "../screens/CompanyDetailsScreen";
import AddCompany from "../screens/AddCompanyScreen";
import About from "../screens/AboutScreen";
import AuthScreen from "../screens/AuthScreen";
import StartupScreen from "../screens/StartupScreen";
import Colors from "../constants/Colors";

const AppNavigator = createStackNavigator(
  {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    CompanyDetailsScreen: {
        screen: CompanyDetails,
        // navigationOptions: {
        //     headerTitle: 'Company Details'
        // }
    },
    

    // AddCompanyScreen: AddCompany,
    // AboutScreen: About
  },
  {
    headerMode: 'screen'
}
  
);

const NewCompanyNavigator = createStackNavigator({
  AddCompanyScreen: AddCompany,
});

const AboutNavigator = createStackNavigator({
  AboutScreen: About,
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-home" size={24} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Add: {
      screen: AddCompany,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="md-add" size={24} color={tabInfo.tintColor} />;
        },
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-information-circle-outline"
              size={24}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
      showLabel: true,
    },
  },
//   {
//       navigationOptions: {
//           header: null
//       }
//   }
);

const MainNavigator = createSwitchNavigator({
  Startup: StartupScreen,
  Auth: AuthScreen,
  App: TabNavigator,
});

export default createAppContainer(MainNavigator);
