import React, { useState, useCallback } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
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

  const changeTextHandler = (inputText) => {
    setNewCompany(inputText);
  };

  const submitHandler = () => {
    // API Call
    axios
      .get(`https://stockanalysisapi.herokuapp.com/${newCompany}/10`)
      .then((response) => {
        setCompanyData(response.data);
        setDisplayData(true);
      });
  };


  const saveHandler = () => {
    props.addNewCompany(companyData);
    setDisplayData(false);
    setNewCompany("");
    props.navigation.navigate({routeName: "Home"});

    //save to database

    //navigate back to home page
  }

  const discardHandler = () => {
      // Set state to be an empty object
      setCompanyData({});
      setDisplayData(false);
      setNewCompany("");
  }

  

  if (!displayData) {
    return (
      <Container>
        <Content contentContainerStyle={styles.screen}>
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
          <Button
            rounded
            bordered
            style={styles.submitButton}
            onPress={submitHandler}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  } else {
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
                <Text style={styles.submitButtonText} onPress={saveHandler}>Save</Text>
              </Button>
              <Button
                rounded
                bordered
                style={styles.optionsButton}
                onPress={submitHandler}
              >
                <Text style={styles.submitButtonText} onPress={discardHandler}>Discard</Text>
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
  screen: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  submitButton: {
    backgroundColor: Colors.primaryColor,
    margin: 10,
    width: "50%",
    justifyContent: "center",
    // alignItems: 'center'
  },
  submitButtonText: {
    color: "white",
  },
  options: {
      flexDirection: "row",
      justifyContent: "center"
  },
  optionsButton: {
    backgroundColor: Colors.primaryColor,
    margin: 10,
    width: "30%",
    justifyContent: "center",
  },
});

const mapStateToProps = state => {
  // console.log(state.company);
  return {company: state.company}
}

export default connect(mapStateToProps, {
  addNewCompany: addNewCompany
})(AddCompanyScreen);
