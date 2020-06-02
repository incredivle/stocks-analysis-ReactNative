import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Content } from "native-base";
import { Ionicons } from "@expo/vector-icons";


import Colors from "../../constants/Colors";

const StepTwo = (props) => {
  return (
    <Content contentContainerStyle={styles.screen}>
      {/* SECTION ONE    */}
      <View style={styles.stepOneBackground}>
        <Text style={styles.stepOneTitle}>Step 2:</Text>
        <Text style={styles.stepOneText}>
          But how do I calculate the future stock price from future earnings?
        </Text>
      </View>

      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "200",
          textAlign: "center",
        }}
      >
        We know!
      </Text>
      <Text
        style={{
          color: "white",
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 15,
          paddingBottom: 15,
          textAlign: "center",
        }}
      >
        Since we know the future earnings, we can use the Price to Earnings
        ratio calculation to determine the future stock price.
      </Text>

      <View style={styles.explanation}>
        <Text style={styles.boldText}>
          What is the Price to Earnings ratio?
        </Text>

        <Text style={styles.normalText}>
          The price to earnings ratio (PE Ratio) is the measure of the share
          price relative to the annual net income earned by the company per
          share. PE ratio shows current investor demand for a company share.
        </Text>

        <Text
          style={{
            color: Colors.accentColor,
            fontWeight: "bold",
            padding: 30,
            fontSize: 15,
          }}
        >
          The PE ratio = Stock Price (per share) / Earnings (per share)
        </Text>
      </View>

      <Text style={styles.scrollText}>Keep scrolling!</Text>
      <Ionicons
        name="ios-arrow-down"
        size={24}
        color="white"
        style={styles.downArrow}
      />

      {/* SECTION 2 */}

      <View style={styles.explanation}>
        <Text style={styles.normalText}>
          From Step 1, the profit increased from $100M to $259M over the 10
          years. If the company has 50M shares, the earnings per share will have
          increased from $2 to $5.19.
        </Text>
      </View>

      <View style={styles.stepOneBackground}>
        <Text style={styles.stepOneText}>
          If the future PE ratio remains at 10, what is the future stock price?
        </Text>
      </View>

      <View style={styles.explanation}>
        <Text style={styles.boldText}>
          What is the Price to Earnings ratio?
        </Text>

        <Text style={styles.normalText}>
          By rearranging the PE ratio calculation, the equation becomes:
        </Text>

        <Text
          style={{
            color: Colors.accentColor,
            fontWeight: "bold",
            padding: 30,
            fontSize: 15,
          }}
        >
          Future Stock price = PE ratio x future Earnings per Share
        </Text>

        <Text style={styles.boldText}>
         Future stock price = 10 x $5.19 = $51.90
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={{ paddingBottom: 40 }}
      >
        <Text style={styles.scrollText}>Back</Text>
      </TouchableOpacity>
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
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.accentColor,
  },
  stepOneBackground: {
    backgroundColor: Colors.nonBlueBackground,
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
    marginTop: 20,
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
  blueTextBold: {
    color: Colors.primaryColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  blueTextBoldLeft: {
    color: Colors.primaryColor,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 5,
  },
  blueText: {
    color: Colors.primaryColor,
    textAlign: "center",
  },
  scrollText: {
    color: "white",
    fontWeight: "200",
    fontSize: 20,
    marginTop: 50,
  },
  downArrow: {
    marginBottom: 100,
  },
  diagram: {
    flexDirection: "row",
    paddingBottom: 5,
  },
  blueBox: {
    backgroundColor: Colors.primaryColor,
    color: "white",
    padding: 5,
    margin: 5,
    width: "55%",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  greenBox: {
    backgroundColor: Colors.accentColor,
    color: "white",
    padding: 5,
    margin: 5,
    width: "40%",
    textAlign: "center",
    justifyContent: "center",
  },
  blueBoxTwo: {
    backgroundColor: Colors.primaryColor,
    color: "white",
    padding: 5,
    marginTop: 5,
    marginRight: 0,
    marginLeft: 5,
    marginBottom: 5,
    width: "50%",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 20,
    marginTop: 15,
  },
  darkBlueBox: {
    backgroundColor: Colors.darkBlue,
    color: "white",
    padding: 5,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 0,
    marginBottom: 5,
    width: "23%",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  redBox: {
    backgroundColor: Colors.red,
    color: "white",
    padding: 5,
    margin: 5,
    width: "23%",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 14,
    marginTop: 15,
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

export default StepTwo;
