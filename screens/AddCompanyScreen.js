import React, { useState, useCallback } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import {
  Container,
  Text,
  Content,
  Button,
  Form,
  Item,
  Input,
  Header,
  Card,
  CardItem,
  Body,
} from "native-base";
import axios from "axios";
import { useSelector, connect } from "react-redux";
import { StackRouter } from "react-navigation";

import Colors from "../constants/Colors";
import { addNewCompany } from "../store/actions/companies";

const AddCompanyScreen = (props) => {
  const [newCompany, setNewCompany] = useState("");
  const [companyData, setCompanyData] = useState({});
  const [displayData, setDisplayData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const changeTextHandler = (inputText) => {
    setNewCompany(inputText);
  };

  const submitHandler = () => {
    setIsLoading(true);
    // API Call
    axios
      .get(`https://stockanalysisapi.herokuapp.com/${newCompany}/10`)
      .then((response) => {
        setCompanyData(response.data);
        setDisplayData(true);
        setIsLoading(false);
      });
  };

  const saveHandler = () => {
    props.addNewCompany(companyData);
    setDisplayData(false);
    setNewCompany("");
    props.navigation.navigate({ routeName: "Home" });

    //save to database

    //navigate back to home page
  };

  const discardHandler = () => {
    // Set state to be an empty object
    setCompanyData({});
    setDisplayData(false);
    setNewCompany("");
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        style={styles.loading}
        size="large"
        color={Colors.primaryColor}
      />
    );
  } else if (!displayData) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.screen}
      >
        <View>
          {/* <Container>
        <Content > */}
          <Form>
            <Item>
              <Input
                blurOnSubmit
                autoCapitalize="characters"
                autoCorrect={false}
                autoCompleteType="off"
                placeholder="Company Symbol"
                onChangeText={changeTextHandler}
                value={newCompany}
              />
            </Item>
          </Form>
          <View style={styles.submitButtonContainer}>
            <Button
              rounded
              bordered
              style={styles.submitButton}
              onPress={submitHandler}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </Button>
          </View>
          {/* </Content>
      </Container> */}
        </View>
      </KeyboardAvoidingView>
    );
  } else {
    // make this card into a component - keep buttons in this one
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>
                {companyData.stockName} ({companyData.stockSymbol})
              </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Compounding rate of return: {companyData.compoundingReturn}
                </Text>
                <Text>
                  Future earnings per share:{" "}
                  {companyData.futureEarningsPerShare}
                </Text>
                <Text>Time period: 10 years</Text>
                <Text>Total Dividends: {companyData.totalDividends}</Text>
              </Body>
            </CardItem>
            <View style={styles.options}>
              <Button
                rounded
                bordered
                style={styles.optionsButton}
                onPress={submitHandler}
              >
                <Text style={styles.submitButtonText} onPress={saveHandler}>
                  Save
                </Text>
              </Button>
              <Button
                rounded
                bordered
                style={styles.optionsButton}
                onPress={submitHandler}
              >
                <Text style={styles.submitButtonText} onPress={discardHandler}>
                  Discard
                </Text>
              </Button>
            </View>
          </Card>
        </Content>
      </Container>
    );
  }
};

AddCompanyScreen.navigationOptions = {
  headerTitle: "New Company",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
  },
  submitButtonContainer: {
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: Colors.primaryColor,
    borderColor: Colors.primaryColor,
    margin: 10,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
  },
  options: {
    flexDirection: "row",
    justifyContent: "center",
  },
  optionsButton: {
    backgroundColor: Colors.primaryColor,
    borderColor: Colors.primaryColor,
    margin: 10,
    width: "30%",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => {
  return { company: state.company };
};

export default connect(mapStateToProps, {
  addNewCompany: addNewCompany,
})(AddCompanyScreen);
