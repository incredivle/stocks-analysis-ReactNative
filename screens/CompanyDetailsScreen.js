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
import * as Svg from 'react-native-svg';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'

import Colors from '../constants/Colors';


const CompanyDetailsScreen = props => {
    const company = props.navigation.getParam('company');
    

    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30

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

          <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={data}
                        contentInset={verticalContentInset}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                    >
                        <Grid/>
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={data}
                        formatLabel={(value, index) => index}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                </View>
            </View>

          {/* <LineChart
                style={{ height: 200 }}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid />
            </LineChart> */}

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
        backgroundColor: 'white'
    }
});

export default CompanyDetailsScreen