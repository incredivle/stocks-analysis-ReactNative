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


    
    <View>

   
      
          <Card transparent>
            <CardItem header bordered style={styles.card}>
              <Body>
                <Text style={styles.text}>{props.name}</Text>
              </Body>
            </CardItem>
          </Card>
        
          </View>

  );
};

const styles = StyleSheet.create({
    card: {
        // width: 300,
        // height: 100,
        
    },
    text: {
      color: Colors.primaryColor  
    }
})

export default CompanyItem;
