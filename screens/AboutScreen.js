import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Accordion } from "native-base";

import Colors from '../constants/Colors';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];

const AboutScreen = props => {
return (
    
        <View style={styles.screen}>

        
          <Accordion
            dataArray={dataArray}
            headerStyle={{  color: 'white' }}
            contentStyle={{ backgroundColor: 'white' }}
          />

          <Text>Created my free logo at LogoMakr.com</Text>
      </View>
)
}

AboutScreen.navigationOptions = {
    headerTitle: 'About',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
    }
});

export default AboutScreen