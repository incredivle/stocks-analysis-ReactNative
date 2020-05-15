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

    <View style={styles.companyItem}>
        <Text style={styles.text}>{props.name}</Text>
    </View>


    
    // <View>

   
      
    //       <Card transparent >
    //         <CardItem header bordered style={styles.card}>
    //           <Body>
    //             <Text style={styles.text}>{props.name}</Text>
    //           </Body>
    //         </CardItem>
    //       </Card>
        
    //       </View>

  );
};

const styles = StyleSheet.create({
    card: {
        // width: 300,
        // height: 100,
        backgroundColor: Colors.primaryColor
        
    },
    text: {
      color: 'white',
      marginLeft: 10
      
    },
    companyItem: {
      backgroundColor: Colors.primaryColor,
      height: 60,
      width: '100%',
      justifyContent: 'center',
      borderBottomColor: 'white',
      borderBottomWidth: 0.5,
       
    }
})

export default CompanyItem;
