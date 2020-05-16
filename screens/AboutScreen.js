import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Container, Header, Content, Accordion } from "native-base";

import Colors from "../constants/Colors";
import background from "../assets/background_image.png";

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
];

const AboutScreen = (props) => {
  return (
    <View style={styles.screen}>
      <ImageBackground source={background} style={styles.image}>
        <View style={styles.mainContainer}>
    <Text>
      Welcome to Invester! This app is designed to help you decide what stocks to invest in. Add a new company on the 'Add'
      page and check out your potential returns.
      Click save to add it to your homepage.
    </Text>
        
        <Accordion
          dataArray={dataArray}
          headerStyle={{ color: "white" }}
          contentStyle={{ backgroundColor: "white" }}
          style={styles.accordion}
        />

        <Text>Created my free logo at LogoMakr.com</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

AboutScreen.navigationOptions = {
  headerTitle: "About",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    // alignItems: 'center',
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30

  },  
  accordion: {
    borderWidth: 0,
  },
});

export default AboutScreen;
