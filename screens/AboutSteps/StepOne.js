import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Container, Header, Content, Accordion } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const StepOne = (props) => {
  return (
    <Content contentContainerStyle={styles.screen}>
      {/* SECTION ONE    */}
      <View style={styles.stepOneBackground}>
        <Text style={styles.stepOneTitle}>Step 1:</Text>
        <Text style={styles.stepOneText}>
          What is the Return on Equity ratio?
        </Text>
      </View>

      <View style={styles.explanation}>
        <Text style={styles.normalText}>"Return on Equity" is defined as:</Text>

        <Text style={styles.boldText}>
          The amount of net income returned as a percentage of shareholders
          equity.
        </Text>

        <Text style={styles.normalText}>
          Return on equity measures a corporation's profitability by revealing
          how much profit a company generates with the money shareholders have
          invested.
        </Text>
      </View>

      <Text style={styles.scrollText}>Keep scrolling!</Text>
      <Ionicons
        name="ios-arrow-down"
        size={24}
        color="white"
        style={styles.downArrow}
      />

      {/* SECTION TWO */}

      <View style={styles.explanation}>
        <Text style={styles.boldText}>
          How to calculate Return on Equity (ROE)?
        </Text>

        <Text style={styles.normalText}>
          For example, a company has equity $500M and this year's profit is
          $100M.
        </Text>

        <Text style={styles.blueTextBold}>
          ROE = Profit / Equity = $100M / $500M = 20 %
        </Text>
      </View>

      <View style={styles.stepOneBackground}>
        <Text style={styles.stepOneText}>
          But how do I calculate future earnings using the Return on Equity
          calculation?
        </Text>
      </View>

      <View style={styles.explanation}>
        <Text style={styles.normalText}>
          To calculate profit, turn the ROE equation around to:
        </Text>
        <Text style={styles.blueTextBold}>Profit = ROE x Equity</Text>
      </View>

      <Text style={styles.scrollText}>Keep scrolling!</Text>
      <Ionicons
        name="ios-arrow-down"
        size={24}
        color="white"
        style={styles.downArrow}
      />

      {/* SECTION 3  */}
      <View style={styles.explanation}>
        <Text style={styles.boldText}>
          Using Return on Equity to calculate profit for one year:
        </Text>

        <View style={styles.diagram}>
          <Text style={styles.blueBox}>$500M Equity</Text>
          <Text style={styles.greenBox}>
            {" "}
            $100M Profit Equity * ROE $500 * 20%
          </Text>
        </View>

        <Text style={styles.rightText}>Profit split in half</Text>

        <View style={styles.diagram}>
          <Text style={styles.blueBoxTwo}>$500M Equity</Text>
          <Text style={styles.darkBlueBox}> $50M Retained Earnings</Text>
          <Text style={styles.redBox}> $100M Dividend</Text>
        </View>

        <Text style={styles.leftText}>
          Now future Equity has increased by $50M, by retaining half of the
          profit, to $550M.
        </Text>
      </View>

      <View style={styles.stepOneBackground}>
        <Text style={styles.stepOneText}>
          Yay! I get to keep some money as a dividend!
        </Text>
      </View>

      <Text style={styles.scrollText}>Keep scrolling!</Text>
      <Ionicons
        name="ios-arrow-down"
        size={24}
        color="white"
        style={styles.downArrow}
      />

      {/* SECTION 4  */}
      <View style={styles.explanation}>
        <Text style={styles.boldText}>
          Using Return on Equity to calculate profit estimate, over 10 years:
        </Text>

        <Text style={styles.normalText}>
          Remember, in this example half of the profit is paid out as dividends
          each year.
        </Text>

        <Text style={styles.blueTextBoldLeft}>2020</Text>
        <View style={styles.diagram}>
          <Text
            style={{
              backgroundColor: Colors.primaryColor,
              color: "white",
              padding: 5,
              marginLeft: 5,
              width: "20%",
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 20,
              paddingBottom: 20,
              fontSize: 12
            }}
          >
            $500M Equity
          </Text>
          
          <Text
            style={{
              backgroundColor: Colors.accentColor,
              color: "white",
              padding: 5,

              width: "17%",
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 20,
              fontSize: 12
            }}
          >
            $100M Profit
          </Text>
          <AntDesign
            name="arrowright"
            size={24}
            color={Colors.grey}
            style={{ marginLeft: 30, paddingTop: 20 }}
          />
          <Text
            style={{
              backgroundColor: Colors.red,
              color: "white",
              padding: 5,
              marginLeft: 80,
              width: "15%",
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 20,
              fontSize: 12
            }}
          >
            {" "}
            $50M Div
          </Text>
        </View>

        <Text style={styles.blueTextBoldLeft}>2021</Text>
        <View style={styles.diagram}>
          <Text
            style={{
              backgroundColor: Colors.primaryColor,
              color: "white",
              padding: 5,
              marginLeft: 5,
              width: "25%",
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 20,
              paddingBottom: 20,
              fontSize: 12,
            }}
          >
            $500M Equity + $50M
          </Text>
          <Text
            style={{
              backgroundColor: Colors.darkBlue,
              color: "white",
              padding: 5,

              width: "12%",
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 20,
              fontSize: 12,
            }}
          >
            {" "}
            
          </Text>
          <Text
            style={{
              backgroundColor: Colors.accentColor,
              color: "white",
              padding: 5,

              width: "20%",
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 20,
              fontSize: 12,
            }}
          >
            $110M Profit
          </Text>
          <AntDesign
            name="arrowright"
            size={24}
            color={Colors.grey}
            style={{ marginLeft: 20, paddingTop: 20 }}
          />
          <Text
            style={{
              backgroundColor: Colors.red,
              color: "white",
              padding: 5,
              marginLeft: 32,
              width: "15%",
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 20,
              fontSize: 12
            }}
          >
            {" "}
            $55M Div
          </Text>
        </View>

        <Text style={styles.blueTextBoldLeft}>2022</Text>
        <View style={styles.diagram}>
          <Text
            style={{
              backgroundColor: Colors.primaryColor,
              color: "white",
              padding: 5,
              marginLeft: 5,
              width: "28%",
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 20,
              paddingBottom: 20,
              fontSize: 12,
            }}
          >
            $500M Equity + $50M
          </Text>
          <Text
            style={{
              backgroundColor: Colors.darkBlue,
              color: "white",
              padding: 5,

              width: "15%",
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 20,
              fontSize: 12,
            }}
          >
            {" "}
            
          </Text>
          <Text
            style={{
              backgroundColor: Colors.accentColor,
              color: "white",
              padding: 5,

              width: "23%",
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 20,
              fontSize: 12,
            }}
          >
            $110M Profit
          </Text>
          <AntDesign
            name="arrowright"
            size={24}
            color={Colors.grey}
            style={{ marginLeft: 10, paddingTop: 20 }}
          />
          <Text
            style={{
              backgroundColor: Colors.red,
              color: "white",
              padding: 5,
              marginLeft: 10,
              width: "18%",
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 20,
              fontSize: 12
            }}
          >
            {" "}
            $60.5M Div
          </Text>
        </View>

        <Text style={styles.normalText}>After 10 years</Text>

        <Text style={styles.blueTextBoldLeft}>2030</Text>
        <View style={styles.diagram}>
          <Text
            style={{
              backgroundColor: Colors.primaryColor,
              color: "white",
              padding: 5,
              marginLeft: 5,
              width: "45%",
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 20,
              paddingBottom: 20,
              fontSize: 12
            }}
          >
            $1,296M Equity
          </Text>
          
          <Text
            style={{
              backgroundColor: Colors.accentColor,
              color: "white",
              padding: 5,

              width: "30%",
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 20,
              fontSize: 12
            }}
          >
            $259M Profit
          </Text>
         
          <Text
            style={{
              backgroundColor: Colors.red,
              color: "white",
              padding: 5,
              marginLeft: 15,
              width: "20%",
              textAlign: "center",
              justifyContent: "center",
              paddingTop: 15,
              fontSize: 12
            }}
          >
            {" "}
            $926M Total Div
          </Text>
        </View>

       

      </View>

      <TouchableOpacity onPress={() => props.navigation.goBack()} style={{paddingBottom: 40}}>
          <Text style={styles.scrollText}>Back</Text>
        </TouchableOpacity>
    </Content>
  );
};

StepOne.navigationOptions = {
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
    backgroundColor: Colors.primaryColor,
  },
  stepOneBackground: {
    backgroundColor: Colors.lightBlue,
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
    marginLeft: 5
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
    paddingBottom: 5
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

export default StepOne;
