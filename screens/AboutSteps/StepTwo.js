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

import Colors from "../../constants/Colors";
import background from "../../assets/background_image.png";



const StepTwo = (props) => {
  return (
    <Content>
    <View style={styles.screen}>
      <Text>Step One</Text>
    </View>
    </Content>
  );
};

StepTwo.navigationOptions = {
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

export default StepTwo;
