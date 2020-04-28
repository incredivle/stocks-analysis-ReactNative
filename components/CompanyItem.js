import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";


import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,

} from "native-base";

const CompanyItem = (props) => {
    
  return (

    // <View>
    //     <Text>{props.name}</Text>
    // </View>


    
    <TouchableOpacity>
      
          <Card>
            <CardItem header bordered>
              <Body>
                <Text>{props.name}</Text>
              </Body>
            </CardItem>
          </Card>
        
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 100
    }
})

export default CompanyItem;
