import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Container, Content, Form, Input, Item, Button } from "native-base";
import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import AuthForm from "../components/AuthForm";
import * as authActions from "../store/actions/auth";

// Need to do error checking on forms. Custom component maybe?
// have only one form
// be able to switch back and forth, not just one way

const AuthScreen = (props) => {
  const [signUpView, setSignUpView] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const changeEmailHandler = (inputText) => {
    setEmail(inputText);
  };

  const changePasswordHandler = (inputText) => {
    setPassword(inputText);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert("An error occured!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const authHandler = async () => {
    let action;
    if (signUpView) {
      action = authActions.signup(email, password);

      setSignUpView(false);
    } else {
      action = authActions.login(email, password);
    }
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      props.navigation.navigate("App");
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  if (!signUpView) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.screen}
      >
        {/* <Content > */}
          <AuthForm
            emailValue={email}
            passwordValue={password}
            changeEmailHandler={changeEmailHandler}
            changePasswordHandler={changePasswordHandler}
          />

          <View style={styles.submitButtonContainer}>
            {isLoading ? (
              <ActivityIndicator size="small" color={Colors.primaryColor} />
            ) : (
              <Button
                rounded
                bordered
                style={styles.submitButton}
                onPress={() => {
                  authHandler();
                }}
              >
                <Text style={styles.submitButtonText}>Login</Text>
              </Button>
            )}
          </View>
          <View style={styles.signUp}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => setSignUpView(true)}>
              <Text style={styles.signUpButton}>Sign up.</Text>
            </TouchableOpacity>
          </View>
        {/* </Content> */}
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.screen}
      >
        <Content >
          <AuthForm
            emailValue={email}
            passwordValue={password}
            changeEmailHandler={changeEmailHandler}
            changePasswordHandler={changePasswordHandler}
          />
          <View style={styles.submitButtonContainer}>
            {isLoading ? (
              <ActivityIndicator size="small" color={Colors.primaryColor} />
            ) : (
              <Button
                rounded
                bordered
                style={styles.submitButton}
                onPress={() => {
                  authHandler();
                }}
              >
                <Text style={styles.submitButtonText}>Sign up</Text>
              </Button>
            )}
          </View>
        </Content>
      </KeyboardAvoidingView>
    );
  }
};

// child component is messing with centering here I think
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    
  },
 
  submitButtonContainer: {
    // justifyContent: "center",
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
  // options: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  // },
  // optionsButton: {
  //   backgroundColor: Colors.primaryColor,
  //   borderColor: Colors.primaryColor,
  //   margin: 10,
  //   width: "30%",
  //   justifyContent: "center",
  // },
  signUp: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    
  },
  signUpButton: {
    color: Colors.primaryColor,
    fontWeight: "bold",
  },
});

export default AuthScreen;
