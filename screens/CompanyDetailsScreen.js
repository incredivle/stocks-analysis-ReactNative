import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {
    Container,
    Text,
    Content,
    Button,
    Form,
    Item,
    Input,
    Header,
    Card,
    CardItem,
    Body,
  } from "native-base";
import Colors from '../constants/Colors';


const CompanyDetailsScreen = props => {
    const company = props.navigation.getParam('company');
    console.log(company)
return (
    <View style={styles.screen}>
         
        <Content>
          <Card>
            <CardItem header>
              <Text>
                {company.stockName} ({company.stockSymbol})
              </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Compounding rate of return: {company.compoundingReturn}
                </Text>
                <Text>
                  Future earnings per share:{" "}
                  {company.futureEarningsPerShare}
                </Text>
                <Text>Time period: 10 years</Text>
                <Text>Total Dividends: {company.totalDividends}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      
    </View>
)
}

CompanyDetailsScreen.navigationOptions = {
    headerTitle: 'Company Details',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    }
});

export default CompanyDetailsScreen