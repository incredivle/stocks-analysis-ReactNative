import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
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
import * as Svg from "react-native-svg";
import { LineChart, Grid, XAxis, YAxis, StackedBarChart } from "react-native-svg-charts";

import Colors from "../constants/Colors";

const CompanyDetailsScreen = (props) => {
  const company = props.navigation.getParam("company");

  // const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  // const dataTwo = [40, 0, 30, 85, -14, -34, 75, 81, 25, 43, -63, 14, 40, -30, -70];
  const axesSvg = { fontSize: 10, fill: Colors.primaryColor };
  const verticalContentInset = { top: 10, bottom: 10 }; // set this dynamically: a bit below min of array and bit above max of array
  const xAxisHeight = 30; // set as 10 for 10 years
  // // Labelled axis?

  const data = [
    {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
        oranges: 400,
    },
    {
        month: new Date(2015, 1, 1),
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400,
    },
    {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400,
    },
    {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400,
    },
]

const colors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6']
const keys = ['apples', 'bananas', 'cherries', 'dates']

  return (
    <View style={styles.screen}>
      <Content>
        <Card transparent>
          <CardItem header style={styles.card}>
            <Text style={styles.text}>
              {company.data.stockName} ({company.data.stockSymbol})
            </Text>
            <View>
              {company.logo != "" && (
                <View>
                  <Image
                    resizeMode="center"
                    style={styles.image}
                    source={{ uri: company.logo }}
                  />
                </View>
              )}
              {/* Domain */}
            </View>
          </CardItem>
          <CardItem style={styles.card}>
            <Body>
              <Text style={styles.text}>
                Compounding rate of return: {company.data.compoundingReturn}
              </Text>
              <Text style={styles.text}>
                Future earnings per share: {company.data.futureEarningsPerShare}
              </Text>
              <Text style={styles.text}>Time period: 10 years</Text>
              <Text style={styles.text}>Total Dividends: {company.data.totalDividends}</Text>
            </Body>
          </CardItem>
        </Card>

        {/* <StackedBarChart
                style={{ height: 200 }}
                keys={keys}
                colors={colors}
                data={data}
                showGrid={false}
                contentInset={{ top: 30, bottom: 30 }}
            /> */}

        <View style={{ height: 200, padding: 20, flexDirection: "row" }}>
          <YAxis
            data={data}
            style={{ marginBottom: xAxisHeight, height: xAxisHeight }}
            contentInset={verticalContentInset}
            svg={axesSvg}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
          <StackedBarChart
                style={{ height: 200 }}
                keys={keys}
                colors={colors}
                data={data}
                showGrid={false}
                contentInset={{ top: 30, bottom: 30 }}
            />
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
  );
};

CompanyDetailsScreen.navigationOptions = {
  headerTitle: "Company Details",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    // alignItems: 'center'
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 58,
  },
  card: {
    backgroundColor: 'white'
  },
  text: {
    color: Colors.primaryColor
  }
});

export default CompanyDetailsScreen;
