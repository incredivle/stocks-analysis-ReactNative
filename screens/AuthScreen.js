import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Container, Content, Form, Input, Item, Button } from "native-base";
import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import AuthForm from "../components/AuthForm";
import * as authActions from "../store/actions/auth";

// Need to do error checking on forms. Custom component maybe?

const AuthScreen = (props) => {
  const [signUpView, setSignUpView] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmailHandler = (inputText) => {
    setEmail(inputText);

  };

  const changePasswordHandler = (inputText) => {
    setPassword(inputText);
  };

  const handleLoginSubmit = () => {

    console.log(email, password)
  }

  const dispatch = useDispatch();

  const signUpHandler = () => {
    dispatch(
      authActions.signup(
        email,
        password
      )
    );
  };

  if (!signUpView) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.screen}
      >
        <Content>
          <AuthForm
            emailValue={email}
            passwordValue={password}
            changeEmailHandler={changeEmailHandler}
            changePasswordHandler={changePasswordHandler}
          />
          <View style={styles.submitButtonContainer}>
            <Button
              rounded
              bordered
              style={styles.submitButton}
              onPress={() => {handleLoginSubmit()}}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </Button>
          </View>
          <View style={styles.signUp}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => setSignUpView(true)}>
              <Text style={styles.signUpButton}>Sign up.</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.screen}
      >
        <Content>
          <AuthForm 
          emailValue={email}
          passwordValue={password}
          changeEmailHandler={changeEmailHandler}
          changePasswordHandler={changePasswordHandler}/>
          <View style={styles.submitButtonContainer}>
            <Button
              rounded
              bordered
              style={styles.submitButton}
              onPress={() => {signUpHandler()}}
            >
              <Text style={styles.submitButtonText}>Sign up</Text>
            </Button>
          </View>
        </Content>
      </KeyboardAvoidingView>
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  submitButtonContainer: {
    justifyContent: "center",
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
  signUp: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    color: Colors.primaryColor,
    fontWeight: "bold",
  },
});

export default AuthScreen;
