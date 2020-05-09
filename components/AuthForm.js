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

import Colors from "../constants/Colors";

const AuthForm = (props) => {

 
 

  return (
    <View>
      <Form style={styles.screen}>
        <Item>
          <Input
            blurOnSubmit
            autoCorrect={false}
            autoCompleteType="off"
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(text) => {props.changeEmailHandler(text)}}
            value={props.email}
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
            onChangeText={(text) => {props.changePasswordHandler(text)}}
            value={props.password}
          />
        </Item>
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
});

export default AuthForm;
