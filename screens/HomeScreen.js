import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground
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
import background from "../assets/background_image.png"

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
    ///////////// Error checking if there is no logo/domain ////////////
    return (
      <Container>
        <Content contentContainerStyle={styles.introScreen}>
          <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome to Invester!</Text>
          </View>
          

          <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Do you want to know how to estimate a company's future stock price and the compounding annual return?</Text>
          </View>

          <View style={styles.welcomeContainer}>
          
          <Text style={styles.clickText} onPress={() => props.navigation.navigate({routeName: "About"})}>Click here to find out!</Text>
          </View>
          
          {/* <Button
            rounded
            style={styles.buttonOne}
            onPress={() => {
              props.navigation.navigate({ routeName: "AddCompanyScreen" });
            }}
          >
            <Text style={styles.buttonText}>New Company</Text>
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
          </Button> */}
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
      // <Container >

      
      // <Content >
      <View style={styles.topView}>
        <ImageBackground source={background} style={styles.image}>

        
        <View style={styles.secondView}>

        
        <Text style={styles.headerText}>My Saved Companies</Text>
        <SwipeListView
          data={props.savedCompanies}
          renderItem={(data, rowMap) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                props.navigation.navigate({
                  routeName: "CompanyDetailsScreen",
                  params: {
                    company: data.item.data,
                  },
                });
              }}
            >
              <CompanyItem name={data.item.data.data.stockName} />
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
        <View style={styles.logoutButtonContainer}>

        
        <Button
          rounded
          bordered
          style={styles.logoutButton}
          onPress={() => {
            dispatch(authActions.logout());
            // props.navigation.navigate('Auth'); This is already being done through NavigationContainer
          }}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </Button>
        </View>
        </View>
        </ImageBackground>
      </View>
      // </Content>
      // </Container>
    );
  }
};

// HomeScreen.navigationOptions = {
//   headerMode: 'none'
  
// };



const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
  },
  introScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryColor
   
  },
  welcomeContainer: {
    paddingBottom: 30
  },
  welcomeText: {
    fontSize: 50,
    fontWeight: '200',
    color: 'white',
    alignItems: 'center',
    textAlign: 'center'
  },
  topView: {
    flex: 1,
    backgroundColor: Colors.primaryColor
    
  },
  secondView: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  questionContainer: {
    backgroundColor: Colors.lightBlue,
    padding: 20,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: Colors.lightBlue
    
  },
  questionText: {
    color: Colors.grey,
    
  },
  clickText: {
    fontSize: 30,
    fontWeight: '200',
    color: 'white',
    paddingTop: 10
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
 headerText: {
    color: Colors.primaryColor,
    margin: 20,
    fontSize: 30
  
 },
  buttonOne: {
    backgroundColor: Colors.accentColor,
    margin: 10,
    width: "50%",
    justifyContent: "center",
  },
  buttonTwo: {
    borderColor: 'white',
    margin: 10,
    width: "50%",
    justifyContent: "center",
  },
  buttonText: {
    color: 'white'
  },
  deleteButton: {
    marginLeft: 20,
    marginRight: 0,
    maxWidth: '40%',
    height: 60,
    borderRadius: 30,
    marginTop: 10

  },
  deleteText: {
    color: "white",
  },
  logoutButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  logoutButton: {
    borderColor: Colors.primaryColor,
    // backgroundColor: Colors.primaryColor,
    margin: 10,
    width: "50%",
    alignSelf: 'center',
    justifyContent: 'center',
    
  },
  logoutButtonText: {
    color: Colors.primaryColor,
  },
  
});

// This function allows the returned state to be under props in the HomeScreen component, ie. props.company
const mapStateToProps = (state) => {
  
  return { company: state.company, savedCompanies: state.fetchCompanies };
};

export default connect(mapStateToProps)(HomeScreen);
