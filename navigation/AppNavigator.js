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
import StepOne from "../screens/AboutSteps/StepOne";
import StepTwo from "../screens/AboutSteps/StepTwo";
import StepThree from "../screens/AboutSteps/StepThree";
import StepFour from "../screens/StepFour";
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
    About: {
      screen: About,
      navigationOptions: {
        headerShown: false
      }
    }

  
  },
  {
    headerMode: 'screen'
}
  
);


const NewCompanyNavigator = createStackNavigator({
  AddCompanyScreen: AddCompany,
});

const AboutNavigator = createStackNavigator({
  AboutScreen: {
    screen: About,
    navigationOptions: {
      headerShown: false
    }
  },
  StepOne: {
    screen: StepOne,
    navigationOptions: {
      headerShown: false
    }
  },
  StepTwo: {
    screen: StepTwo,
    navigationOptions: {
      headerShown: false
    }
  },
  StepThree: {
    screen: StepThree,
    navigationOptions: {
      headerShown: false
    }
  },
  StepFour: {
    screen: StepFour,
    navigationOptions: {
      headerShown: false
    }
  },
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
      screen: AboutNavigator,
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
        // headerShown: false
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
      showLabel: true,
    },
    resetOnBlur: true
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
