import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Container, Text, Content, Button } from "native-base";
import { useSelector, connect, useDispatch } from "react-redux";
import { SwipeListView } from "react-native-swipe-list-view";

import Colors from "../constants/Colors";
import CompanyItem from "../components/CompanyItem";
import { fetchSavedCompanies } from "../store/actions/companies";
import { deleteCompany } from "../store/actions/companies";
import * as authActions from "../store/actions/auth";
import { set } from "react-native-reanimated";

const HomeScreen = (props) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    async function getCompanies(){
      await dispatch(fetchSavedCompanies());
      setIsLoading(false);
    }

    getCompanies();
    
  }, [dispatch, props.savedCompanies]);



  if (isLoading) {
    return <ActivityIndicator style={styles.loading} size="large" color={Colors.primaryColor} />;
  } else if (
    props.savedCompanies === null ||
    props.savedCompanies.length === 0
  ) {
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
      <Container contentContainerStyle={styles.screen}>

      
      {/* <Content> */}
      <View >
        <SwipeListView
          data={props.savedCompanies}
          renderItem={(data, rowMap) => (
            <TouchableOpacity
              activeOpacity={0.7}
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
              <Button
                style={styles.deleteButton}
                danger
                onPress={() => {
                  dispatch(deleteCompany(data.item.id));
                }}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </Button>
            </View>
          )}
          leftOpenValue={85}
          // rightOpenValue={-85}

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
      {/* </Content> */}
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
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
    marginRight: 10,
    marginBottom: 10,
  },
  deleteText: {
    color: "white",
  },
  logoutButton: {
    
    justifyContent: 'center'
  },
  
});

// This function allows the returned state to be under props in the HomeScreen component, ie. props.company
const mapStateToProps = (state) => {
  return { company: state.company, savedCompanies: state.fetchCompanies };
};

export default connect(mapStateToProps)(HomeScreen);
