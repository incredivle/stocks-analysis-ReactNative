import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
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
import background from "../assets/background_image.png";
import getEnvVars from "../environment";
const { clearbitApiKey } = getEnvVars();
const { iexApiKey } = getEnvVars();

const AddCompanyScreen = (props) => {
  const [newCompany, setNewCompany] = useState("");
  const [companyData, setCompanyData] = useState({});
  const [displayData, setDisplayData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [domain, setDomain] = useState("");
  const [logo, setLogo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const changeTextHandler = (inputText) => {
    setNewCompany(inputText);
  };

  const submitHandler = () => {
    setIsLoading(true);

    // API Call
    axios
      .get(`https://stockanalysisapi.herokuapp.com/${newCompany}/10`)
      .then((response) => {
        if (response.data === null) {
          setErrorMessage("Could not find company");
        } else {
          setCompanyData(response.data);
          console.log(response.data);

          // setIsLoading(false);
          // setDisplayData(true);

          // axios
          //       .get(
          //         `https://cloud.iexapis.com/stable/stock/${newCompany}/logo?token=${iexApiKey}`
          //       )
          //       .then((response) => {
          //         console.log(response.data);
          //         setLogo(response.data.url);
          //       })
          //       .catch((errors) => {
          //         console.log(errors);
          //         setIsLoading(false);
          //         setDisplayData(true);
          //         return null
          //       });

          axios

            // The param needs to be sliced because these companies have Inc. at the end.
            .get(
              `https://company.clearbit.com/v1/domains/find?name=${response.data.stockName.slice(
                0,
                response.data.stockName.length - 5
              )}`,
              { headers: { Authorization: `Bearer ${clearbitApiKey}` } }
            )
            .then((response) => {
              setDomain(response.data.domain);
              setLogo(response.data.logo);
            })

            // Need to catch errors
            .catch((err) => {
              console.log(err);
              setIsLoading(false);
              setDisplayData(true);

              return null;
            });


        }
      })

      .catch((err) => {
        console.log(err);
        setErrorMessage("Could not find company");
        setIsLoading(false);
        return null;
      });

    // Add in urls from Clearbit api if using it.
  };

  useEffect(() => {
    if (logo != "") {
      console.log(logo);
      console.log(domain);
      setDisplayData(true);
      setIsLoading(false);
    }
  }, [logo, domain]);

  const saveHandler = () => {
    props.addNewCompany(companyData, logo, domain);
    setDisplayData(false);
    setNewCompany("");
    setLogo("");
    setDomain("");
    props.navigation.navigate({ routeName: "Home" });
  };

  const discardHandler = () => {
    // Set state to be an empty object
    setCompanyData({});
    setDisplayData(false);
    setNewCompany("");
    setLogo("");
    setDomain("");
  };

  const refreshHandler = () => {
    setCompanyData({});
    setDisplayData(false);
    setNewCompany("");
    setErrorMessage("");
    setLogo("");
    setDomain("");
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        style={styles.loading}
        size="large"
        color={Colors.primaryColor}
      />
    );
  } else if (errorMessage != "") {
    return (
      // <Container contentContainerStyle={styles.screen}>
        
          <Content>
            <View style={styles.errorPage}>
            <Text style={styles.errorText}>{errorMessage}</Text>
            <Button
              rounded
              bordered
              onPress={refreshHandler}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>New Company</Text>
            </Button>
            </View>
          </Content>
        
      // </Container>
    );
  } else if (!displayData) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.screen}
      >
        
          <View style={styles.outerFormContainer}>
            <View style={styles.formContainer}>
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
                    placeholderTextColor={Colors.primaryColor}
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
        <Content contentContainerStyle={styles.screen}>
          <Card>
            <CardItem header>
              <Text>
                {companyData.stockName} ({companyData.stockSymbol})
              </Text>
              <View>
                {logo != "" && (
                  <Image
                    resizeMode="center"
                    style={styles.image}
                    source={{ uri: logo }}
                  />
                )}
                {/* Domain */}
              </View>
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
                <Text style={styles.submitButtonText}>Save</Text>
              </Button>
              <Button
                rounded
                bordered
                style={styles.optionsButton}
                onPress={discardHandler}
              >
                <Text style={styles.submitButtonText}>Discard</Text>
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
    backgroundColor: Colors.primaryColor,
  },
  outerFormContainer: {
    // flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "90%",
    height: 200,
    justifyContent: "center",
  },
  errorPage: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accentColor,
    borderRadius: 30,
    padding: 20
  },
  input: {
    color: Colors.primaryColor,
  },
  submitButtonContainer: {
    alignItems: "center",
    marginTop: 20,
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
  errorText: {
    color: Colors.primaryColor,
    margin: 10
    // justifyContent: "center",
    // alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  return { company: state.company };
};

export default connect(mapStateToProps, {
  addNewCompany: addNewCompany,
})(AddCompanyScreen);
