import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Container, Text, Content, Button } from "native-base";
import { useSelector } from "react-redux";

import Colors from "../constants/Colors";
import CompanyItem from "../components/CompanyItem";


const HomeScreen = (props) => {
  const [companies, setCompanies] = useState([{id: 'a', name: 'Google'}, {id: 'b', name: 'Apple'}, {id: 'b', name: "Microsoft"}]);
// const [newData, setNewData] = useState({});

// const newData = useSelector(state => state.company.company);
// console.log("newData " + newData);

// const newCompanyHandler = (companyData) => {
//     console.log(companyData)
// }

  if (companies.length === 0) {
    return (
      
        <Container>
          <Content contentContainerStyle={styles.screen}>
            <Text>Welcome to Invester!</Text>
            <Text>Short explanation about the purpose of the app</Text>
            <Button rounded style={styles.buttonOne} onPress={() => {
                props.navigation.navigate({routeName: 'AddCompanyScreen'});
            }}>
              <Text>New Company</Text>
            </Button>
            <Button rounded bordered style={styles.buttonTwo} onPress={() => {
                props.navigation.navigate({routeName: 'AboutScreen'});
            }}>
              <Text style={styles.buttonText}>More Info</Text>
            </Button>
          </Content>
        </Container>
      
    );
  } else {
    return (
      
    
            <View>
            <FlatList
            data={companies}
            renderItem={({item}) => (
                  <CompanyItem name={item.name}/>
                // <Text>{item.name}</Text>
            )}
            keyExtractor={ (item, index) => index.toString() }
            
            />
            </View>
            
         
      
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOne: {
    backgroundColor: Colors.primaryColor,
    margin: 10,
    width: '50%',
    justifyContent: "center",
  },
  buttonTwo: {
      borderColor: Colors.primaryColor,
      margin: 10,
      width: '50%',
      justifyContent: "center", 
  },
  buttonText: {
      color: Colors.primaryColor
  }
});

export default HomeScreen;
