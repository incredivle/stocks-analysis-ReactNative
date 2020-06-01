import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";
import { Container, Header, Content, Accordion } from "native-base";

import Colors from "../constants/Colors";
import StepOne from "../screens/AboutSteps/StepOne";
import StepTwo from "../screens/AboutSteps/StepTwo";
import StepThree from "../screens/AboutSteps/StepThree";
import StepFour from "../screens/StepFour";


const AboutScreen = (props) => {
  return (
    <Content>
    <View style={styles.screen}>
      {/* <ImageBackground source={background} style={styles.image}> */}
        {/* <View style={styles.mainContainer}> */}
          <Text style={styles.aboutTitle}>
            How does Invester calculate the future stock price and compounding return?
            </Text>
            <Text style={styles.subHeadingText}>
              Tap each step to find out more.
            </Text>

          <View style={styles.stepsContainer}>
             
            
          <TouchableOpacity activeOpacity={1} style={styles.step} onPress={() => props.navigation.navigate({routeName: 'StepOne'})}> 
            <Text style={styles.stepOneTitle}>
              Step 1:
            </Text>
            <Text style={styles.stepOneText}>
            Calculate the future earnings and dividends using the Return on Equity ratio
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} style={styles.step} onPress={() => props.navigation.navigate({routeName: 'StepTwo'})}> 
            <Text style={styles.stepTwoTitle}>
            Step 2:
            </Text>
            <Text style={styles.stepTwoText}>
            Calculate the future stock price using the Price to Earnings ratio
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} style={styles.step} onPress={() => props.navigation.navigate({routeName: 'StepThree'})}> 
            <Text style={styles.stepThreeTitle}>
            Step 3:
            </Text>
            <Text style={styles.stepThreeText}>
            Calculate total returns that include dividends
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} style={styles.step} onPress={() => props.navigation.navigate({routeName: 'StepFour'})}> 
            <Text style={styles.stepFourTitle}>
            Step 4:
            </Text>
            <Text style={styles.stepFourText}>
            Calculate the compounding stock return from today's price to future price
            </Text>
          </TouchableOpacity>

          </View> 
        
    </View>
    </Content>
  );
};

AboutScreen.navigationOptions = {
  headerTitle: "About",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    // alignItems: 'center',
    backgroundColor: Colors.primaryColor,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  // mainContainer: {
  //   flex: 1,
  //   backgroundColor: 'white',
  //   marginTop: 100,
  //   borderTopLeftRadius: 30,
  //   borderTopRightRadius: 30

  // },  
  aboutTitle: {
    color: 'white',
    margin: 20,
    fontSize: 30,
    fontWeight: '200',
    textAlign: 'center'
  },
  subHeadingText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '200',
  },
  stepsContainer: {
    alignItems: 'center'
  },
  step: {
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    width: '80%',
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 20
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  stepOneTitle: {
    color: Colors.primaryColor,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  stepOneText: {
    color: Colors.primaryColor
  },
  stepTwoTitle: {
    color: Colors.accentColor,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  stepTwoText: {
    color: Colors.accentColor
  },
  stepThreeTitle: {
    color: Colors.yellow,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  stepThreeText: {
    color: Colors.yellow
  },
  stepFourTitle: {
    color: Colors.red,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  stepFourText: {
    color: Colors.red
  },
  aboutText: {
    color: Colors.primaryColor,
    margin: 20
  },
  accordion: {
    borderWidth: 0,
    margin: 10,
    color: 'white'
  },
});

export default AboutScreen;
