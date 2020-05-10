import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Container, Text, Content, Button } from "native-base";
import { useSelector, connect, useDispatch } from "react-redux";
import { SwipeListView } from "react-native-swipe-list-view";

import Colors from "../constants/Colors";
import CompanyItem from "../components/CompanyItem";
import { fetchSavedCompanies } from "../store/actions/companies";
import { deleteCompany } from "../store/actions/companies";
import * as authActions from "../store/actions/auth";

const HomeScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSavedCompanies());
  }, [dispatch, props.savedCompanies]);

  // have another loading indicator until receive data - only show welcome page if empty after that

  if (props.savedCompanies === null || props.savedCompanies.length === 0) {
    return (
      <Container>
        <Content contentContainerStyle={styles.screen}>
          <Text>Welcome to Invester!</Text>
          <Text>Short explanation about the purpose of the app</Text>
          <Button
            rounded
            style={styles.buttonOne}
            onPress={() => {
              props.navigation.navigate({ routeName: "AddCompanyScreen" });
            }}
          >
            <Text>New Company</Text>
          </Button>
          <Button
            rounded
            bordered
            style={styles.buttonTwo}
            onPress={() => {
              props.navigation.navigate({ routeName: "AboutScreen" });
            }}
          >
            <Text style={styles.buttonText}>More Info</Text>
          </Button>
          <Button
            rounded
            bordered
            style={styles.buttonTwo}
            onPress={() => {
              dispatch(authActions.logout());
              // props.navigation.navigate('Auth'); This is already being done through NavigationContainer
            }}
          >
            <Text style={styles.buttonText}>Logout</Text>
          </Button>
        </Content>
      </Container>
    );
  } else {
    return (
      <View>
        <SwipeListView
          data={props.savedCompanies}
          renderItem={(data, rowMap) => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate({
                  routeName: "CompanyDetailsScreen",
                  params: {
                    company: data.item.data,
                  },
                });
              }}
            >
              <CompanyItem name={data.item.data.stockName} />
            </TouchableOpacity>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View>
              <Button style={styles.deleteButton} danger onPress={() => {dispatch(deleteCompany(data.item.id))}}>
                {/* // CHANGE TEXT TO BE RIGHT ALIGNED */}
                <Text style={styles.deleteText}>Delete</Text>
              </Button>
            </View>
          )}
          // leftOpenValue={85}
          rightOpenValue={-85}

          keyExtractor={(item, index) => index.toString()}
        />

        {/* <FlatList
          data={props.savedCompanies}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate({
                  routeName: "CompanyDetailsScreen",
                  params: {
                    company: item.data,
                  },
                });
              }}
            >
              <CompanyItem name={item.data.stockName} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        /> */}
        <Button
          rounded
          bordered
          style={styles.buttonTwo}
          onPress={() => {
            dispatch(authActions.logout());
            // props.navigation.navigate('Auth'); This is already being done through NavigationContainer
          }}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </Button>
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
    width: "50%",
    justifyContent: "center",
  },
  buttonTwo: {
    borderColor: Colors.primaryColor,
    margin: 10,
    width: "50%",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.primaryColor,
  },
  deleteButton: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  deleteText: {
    color: 'white'
  }
});

// This function allows the returned state to be under props in the HomeScreen component, ie. props.company
const mapStateToProps = (state) => {
  return { company: state.company, savedCompanies: state.fetchCompanies };
};

export default connect(mapStateToProps)(HomeScreen);
