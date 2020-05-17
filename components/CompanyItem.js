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
    <View style={styles.companyContainer}>
      <View style={styles.companyItem}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
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
    backgroundColor: "white",
  },
  companyContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  text: {
    color: Colors.primaryColor,
    marginLeft: 20,
  },
  companyItem: {
    backgroundColor: "white",
    height: 60,
    width: "90%",
    justifyContent: "center",

    borderColor: Colors.accentColor,
    borderWidth: 0.5,
    borderRadius: 30,
    // margin: 10,
  },
});

export default CompanyItem;
