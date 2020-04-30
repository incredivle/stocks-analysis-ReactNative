import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import {Container, Content, Form, Input, Item, Button} from "native-base";

import Colors from "../constants/Colors";

// Need to do error checking on forms. Custom component maybe? 

const AuthScreen = (props) => {
  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50}>
      <Container>
        <ScrollView>
          <Content contentContainerStyle={styles.screen}>
            <Form>
              <Item>
                <Input
                  blurOnSubmit
                  autoCapitalize="characters"
                  autoCorrect={false}
                  autoCompleteType="off"
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={() => {}}
                  //value
                />
              </Item>
              <Item>
                <Input
                  blurOnSubmit
                  autoCorrect={false}
                  autoCompleteType="off"
                  placeholder="Password"
                  keyboardType="default"
                  secureTextEntry
                  onChangeText={() => {}}
                  //value
                />
              </Item>
            </Form>
            <Button
              rounded
              bordered
              style={styles.submitButton}
              onPress={() => {}}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </Button>
          </Content>
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: Colors.primaryColor,
    borderColor: Colors.primaryColor,
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

export default AuthScreen;
