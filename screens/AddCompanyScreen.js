import React, { useState, useCallback } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Image,
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
import getEnvVars from "../environment";
const { clearbitApiKey } = getEnvVars();

const AddCompanyScreen = (props) => {
  const [newCompany, setNewCompany] = useState("");
  const [companyData, setCompanyData] = useState({});
  const [displayData, setDisplayData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [domain, setDomain] = useState('');
  const [logo, setLogo] = useState('');

  const changeTextHandler = (inputText) => {
    setNewCompany(inputText);
  };

  const submitHandler = () => {
    setIsLoading(true);
    // API Call

    // Combine two api calls here using the method in the API. Save both to setCompanyData?



    // async/await with axios: https://medium.com/better-programming/how-to-use-async-await-with-axios-in-react-e07daac2905f
    axios
      .get(`https://stockanalysisapi.herokuapp.com/${newCompany}/10`)
      .then((response) => {
        setCompanyData(response.data);
        // setDisplayData(true);
        // setIsLoading(false);


        // Need to catch errors
      //   .catch(err => {
      //     console.log(err);
      //     return null;
      // });
        console.log(
          response.data.stockName.slice(0, response.data.stockName.length - 5)

        );
        axios
          // .get(
          //   `https://company.clearbit.com/v1/domains/find?name=${response.data.stockName.slice(
          //     0,
          //     response.data.stockName.length - 5
          //   )}`,

          // The param needs to be sliced because these companies have Inc. at the end. 
            .get(
              `https://company.clearbit.com/v1/domains/find?name=${response.data.stockName.slice(
                    0,
                    response.data.stockName.length - 5
                  )}`,
            { headers: { 'Authorization': `Bearer ${clearbitApiKey}` } }
          )
          .then((response) => {
            console.log(response.data);
            setDomain(response.data.domain);
            setLogo(response.data.logo);
            console.log(response.data.logo)
            
            setDisplayData(true);
            setIsLoading(false);
            
          });

              // Need to catch errors
      //   .catch(err => {
      //     console.log(err);
      //     return null;
      // });
      });

      // A useEffect hook for the logo and domain? 

   
    // Add in urls from Clearbit api if using it.
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
                style={styles.input}
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
                onPress={saveHandler}
              >
                <Text style={styles.submitButtonText} >
                  Save
                </Text>
              </Button>
              <Button
                rounded
                bordered
                style={styles.optionsButton}
                onPress={discardHandler}
              >
                <Text style={styles.submitButtonText} >
                  Discard
                </Text>
              </Button>
            </View>
          </Card>
          <View style={styles.imageContainer}>
            <Text>Image Container</Text>
          <Image source={{uri: logo}}/>
          </View>
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
  imageContainer: {
    backgroundColor: 'red'
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    alignContent: "center",
  },
  submitButtonContainer: {
    alignItems: "center",
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
