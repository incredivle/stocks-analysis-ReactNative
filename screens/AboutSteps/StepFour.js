import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Content } from "native-base";
import { Ionicons } from "@expo/vector-icons";


import Colors from "../../constants/Colors";

const StepFour = (props) => {
  return (
    <Content contentContainerStyle={styles.screen}>
      {/* SECTION ONE    */}
      <View style={styles.stepOneBackground}>
        <Text style={styles.stepOneTitle}>Step 4:</Text>
        <Text style={styles.stepOneText}>
          What is the annual return to make a stock go from $20 to $70.41 over a
          10 year period?
        </Text>
      </View>

      <View style={styles.explanation}>
        <Text style={{ color: Colors.red, fontWeight: "bold", padding: 5 }}>
          Compounding Return = (Future stock price / current stock price)^(1 /
          time period) - 1
        </Text>
        <Text style={styles.boldText}>Answer: 13.41%</Text>
      </View>

      <Text style={styles.scrollText}>Keep scrolling!</Text>
      <Ionicons
        name="ios-arrow-down"
        size={24}
        color="white"
        style={styles.downArrow}
      />

      <View style={styles.final}>
        <Text style={styles.normalText}>
          We estimated the future stock price would increase from $20 to $51.87.
          The compounding return, including dividends over a 10 year period was
          13.41%.
        </Text>
      </View>

      <Text style={styles.endText}>Well done!</Text>
      <Text style={{ color: "white" }}>Let's start using the app!</Text>

      <View
        style={{
          backgroundColor: Colors.accentColor,
          marginTop: 30,
          marginBottom: 110,
          padding: 20,
          borderWidth: 0.5,
          borderColor: Colors.accentColor,
          borderRadius: 20,
          maxWidth: '80%'
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            backgroundColor: Colors.accentColor,
            textAlign: 'center',
            fontWeight: '200',
            padding: 5,
            
          }}
        >
          Click on the Add button below to start analysing a company!
        </Text>
      </View>

      <TouchableOpacity onPress={() => props.navigation.goBack()} style={{paddingBottom: 40}}>
          <Text style={styles.scrollText}>Back</Text>
        </TouchableOpacity>
    </Content>
  );
};

StepFour.navigationOptions = {
  headerTitle: "About",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.red,
  },
  stepOneBackground: {
    backgroundColor: Colors.nonRedBackground,
    width: "90%",
    borderWidth: 0.5,
    borderColor: Colors.lightBlue,
    borderRadius: 20,
    padding: 20,
    marginTop: 60,
    marginBottom: 20,
  },
  explanation: {
    backgroundColor: "white",
    width: "90%",
    borderWidth: 0.5,
    borderColor: Colors.lightBlue,
    borderRadius: 20,
    padding: 20,
    marginTop: 40,
    marginBottom: 20,
  },
  final: {
    backgroundColor: "white",
    width: "90%",
    borderWidth: 0.5,
    borderColor: Colors.lightBlue,
    borderRadius: 20,
    padding: 20,
    marginTop: 100,
    marginBottom: 20,
  },
  normalText: {
    color: Colors.grey,
    padding: 10,
  },
  boldText: {
    color: Colors.grey,
    fontWeight: "bold",
    padding: 10,
  },
  scrollText: {
    color: "white",
    fontWeight: "200",
    fontSize: 20,
    marginTop: 50,
  },
  endText: {
    color: "white",
    fontWeight: "200",
    fontSize: 30,
    marginTop: 50,
  },
  downArrow: {
    marginBottom: 100,
  },
  diagram: {
    flexDirection: "row",
    paddingBottom: 5,
    justifyContent: "center",
  },

  greenBox: {
    backgroundColor: Colors.accentColor,
    color: "white",
    padding: 5,
    margin: 5,
    width: "30%",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 7,
  },

  redBox: {
    backgroundColor: Colors.red,
    color: "white",
    padding: 5,
    margin: 5,
    width: "23%",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  rightText: {
    color: Colors.grey,
    textAlign: "right",
    maxWidth: "30%",
    marginLeft: 200,
    padding: 10,
  },
  leftText: {
    color: Colors.grey,
    padding: 15,
    textAlign: "left",
    maxWidth: "80%",
  },
  stepsContainer: {
    alignItems: "center",
  },
  step: {
    backgroundColor: "white",
    padding: 15,
    margin: 10,
    width: "80%",
    borderWidth: 0.5,
    borderColor: "white",
    borderRadius: 20,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  stepOneTitle: {
    color: Colors.grey,
    fontWeight: "bold",
    textAlign: "left",
  },
  stepOneText: {
    color: Colors.grey,
  },
  stepTwoTitle: {
    color: Colors.accentColor,
    fontWeight: "bold",
    textAlign: "left",
  },
  stepTwoText: {
    color: Colors.accentColor,
  },
  stepThreeTitle: {
    color: Colors.yellow,
    fontWeight: "bold",
    textAlign: "left",
  },
  stepThreeText: {
    color: Colors.yellow,
  },
  stepFourTitle: {
    color: Colors.red,
    fontWeight: "bold",
    textAlign: "left",
  },
  stepFourText: {
    color: Colors.red,
  },
  aboutText: {
    color: Colors.primaryColor,
    margin: 20,
  },
  accordion: {
    borderWidth: 0,
    margin: 10,
    color: "white",
  },
});

export default StepFour;
