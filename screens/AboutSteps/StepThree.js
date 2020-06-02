import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,

} from "react-native";
import { Container, Header, Content, Accordion } from "native-base";


import Colors from "../../constants/Colors";

const StepThree = (props) => {
  return (
    <Content contentContainerStyle={styles.screen}>
      {/* SECTION ONE    */}
      <View style={styles.stepOneBackground}>
        <Text style={styles.stepOneTitle}>Step 3:</Text>
        <Text style={styles.stepOneText}>
          Now we can calculate the total return by including all the dividends
          with the future stock price.
        </Text>
      </View>

      <View style={styles.explanation}>
        <Text style={styles.normalText}>
          We've just calculated the future stock price as $51.90.
        </Text>

        <Text style={styles.normalText}>
          The sum of dividends over the 10 years totals $926M. Since the company
          has 50M shares, the total dividends per share = $18.53.
        </Text>

        <Text style={styles.normalText}>
          The total return for this stock is the sum of the future stock price
          and the dividends per share. In this example, the total = $70.43.
        </Text>

        <View style={styles.diagram}>
          <Text style={styles.greenBox}>$51.90 Future Price</Text>
          <Text
            style={{ color: Colors.grey, fontWeight: "bold", paddingTop: 22 }}
          >
            +
          </Text>
          <Text style={styles.redBox}>$18.53 Div</Text>
          <Text style={{ color: Colors.yellow, fontWeight: "bold", paddingTop: 22 }}>
            {" "}
            = $70.43
          </Text>
        </View>
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

StepThree.navigationOptions = {
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
    backgroundColor: Colors.yellow,
  },
  stepOneBackground: {
    backgroundColor: Colors.nonYellowBackground,
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
    justifyContent: 'center'
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

export default StepThree;
