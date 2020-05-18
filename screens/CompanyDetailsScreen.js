import React, { useState, useEffect } from "react";
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
import {
  LineChart,
  Grid,
  XAxis,
  YAxis,
  StackedBarChart,
} from "react-native-svg-charts";
import { Slider } from "react-native-elements";

import Colors from "../constants/Colors";

const CompanyDetailsScreen = (props) => {
  const company = props.navigation.getParam("company");
  
  const [sliderBarDividendPercentage, setSliderBarDividendPercentage] = useState(company.data.dividendPayoutRatio);
  const [sliderBarVisibleValue, setsliderBarVisibleValue] = useState(sliderBarDividendPercentage * 100)
  const [dividendReturnsYearly, setDividendReturnsYearly] = useState(company.data.dividendReturnsYearly);
  const [retainedEarningsYearly, setRetainedEarningsYearly] = useState(company.data.retainedEarningsYearly);
  const [graphData, setGraphData] = useState([])

  let graphYAxisMax =
    Math.max(...company.data.retainedEarningsYearly) +
    Math.max(...company.data.dividendReturnsYearly);

  

  const adjustDividend = (sliderBarDividendPercentage) => {
    setSliderBarDividendPercentage(sliderBarDividendPercentage);
    setsliderBarVisibleValue(sliderBarDividendPercentage * 100);

    
    // Calculate Compounding ROE : i_CompoundROE = (c_EPS - c_Dividend) / c_EPS * i_ROE
    let compoundingROE =
      ((company.data.currentEarningsPerShare - sliderBarDividendPercentage) /
        company.data.currentEarningsPerShare) *
      company.data.ROE;

    // Future Equity Per Share : i_FuturePerShareEquity = EquityPerShare() * ((1 + i_CompoundROE) ^ i_AnalysisPeriod)
    let futureEquityPerShare =
      company.data.currentEquityPerShare * Math.pow(1 + compoundingROE, 10);

    // Future Earnings Per Share : i_FutureEPS = i_FuturePerShareEquity * i_ROE
    let futureEarningsPerShare = futureEquityPerShare * company.data.ROE;

    let retainedEarningsPerShare =
      company.data.currentEarningsPerShare * (1 - sliderBarDividendPercentage);
    let sumOfDividends =
      company.data.currentEarningsPerShare * sliderBarDividendPercentage;

    // After 1st year
    let totalEquityValue = company.data.currentEquityPerShare;
    totalEquityValue = totalEquityValue + retainedEarningsPerShare;

    // Now sum the retained earnings and paid out dividends
    let perShareEarning = 0;
    var counter = 0;
    let epsReturnsYearlyChanged = [];
    let dividendReturnsYearlyChanged = [];
    let retainedEarningsYearlyChanged = [];


    while (counter < company.data.timePeriodAnalysed) {
      perShareEarning = totalEquityValue * company.data.ROE;

      epsReturnsYearlyChanged.push(perShareEarning);
      sumOfDividends =
        sumOfDividends + perShareEarning * sliderBarDividendPercentage;

      dividendReturnsYearlyChanged.push(perShareEarning * sliderBarDividendPercentage);

      totalEquityValue =
        totalEquityValue +
        perShareEarning * company.data.retainedEarningsPercentage;

      retainedEarningsYearlyChanged.push(
        perShareEarning * company.data.retainedEarningsPercentage
      );
      counter++;
    }

    // Now use current PE ratio to calculate future price
    let futureStockPrice =
      futureEarningsPerShare * company.data.priceToEarningsRatio +
      sumOfDividends;

    // Calculate compounding return between today's share price and future share price
    let compoundingReturn =
      Math.pow(
        futureStockPrice / company.data.currentStockPrice,
        1 / company.data.timePeriodAnalysed
      ) - 1;

      setDividendReturnsYearly(dividendReturnsYearlyChanged);
      setRetainedEarningsYearly(retainedEarningsYearlyChanged);

    // console.log("epsReturnsYearly: ", epsReturnsYearly);
    // console.log("dividendReturnsYearly: ", dividendReturnsYearlyChanged);
    // console.log("retainedearningsYearly: ", retainedEarningsYearlyChanged);
    // console.log("Future stock price: ", futureStockPrice);
    // console.log("Sum of dividends: ", sumOfDividends);
    // console.log(
    //   "Future earnings per share: ",
    //   company.data.futureEarningsPerShare
    // );
  };

  useEffect(() => {
    
    let data = []
    // Load graph data
    for (let i = 0; i < company.data.timePeriodAnalysed; i++) {
      let item = {
        year: i + 1,
        dividend: dividendReturnsYearly[i],
        retainedEarnings: retainedEarningsYearly[i]
      }
      data.push(item)
    }
    
    setGraphData(data)
    
  }, [retainedEarningsYearly, dividendReturnsYearly]);

  
  const contentInset = { top: 20, bottom: 20, left: 20, right: 20 };
  const colors = [Colors.primaryColor, Colors.accentColor];
  const keys = ["retainedEarnings", "dividend"];

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
                The current stock price is $
                {company.data.currentStockPrice.toFixed(2)}. In 10 years, the
                future stock price is projected to be $
                {company.data.futureStockPrice.toFixed(2)}.
              </Text>

              <Text style={styles.text}>
                This generates a compounding rate of return of{" "}
                {company.data.compoundingReturn.toFixed(2) * 100}%
              </Text>
              <Text style={styles.text}>
                {company.data.stockName}'s current profit is $
                {company.data.totalCurrentProfit.toFixed(2)}{" "}
              </Text>
              <Text style={styles.text}>
                In 10 years, the total profit will be $
                {(
                  company.data.totalNumberOfShares *
                  company.data.futureEarningsPerShare
                ).toFixed(2)}
                {/* Round to million/billion */}
              </Text>

              <Text style={styles.text}>Time period: 10 years</Text>
              <Text style={styles.text}>
                Total Dividends: ${company.data.totalDividends.toFixed(2)}
              </Text>
            </Body>
          </CardItem>
        </Card>
        <View
          style={{ height: 200, padding: 10, marginLeft: 30, marginRight: 30 }}
        >
          <View style={{ flex: 1, marginLeft: 0, marginRight: 50 }}>
            <YAxis
              data={graphData}
              contentInset={contentInset}
              svg={{
                fill: "grey",
                fontSize: 10,
              }}
              numberOfTicks={10}
              formatLabel={(value) => `$${value}`}
              style={{ width: 30, height: 200 }}
              yAccessor={({ index }) => index}
              min={0}
              max={graphYAxisMax}
            />
          </View>
          <View style={{ marginLeft: 20 }}>
            <StackedBarChart
              style={{ height: 200 }}
              keys={keys}
              colors={colors}
              data={graphData}
              showGrid={true}
              contentInset={contentInset}
              spacingInner={0.02}

              // valueAccessor={({ item, key }) => item[key].value}
            />
          </View>

          <View style={{ marginLeft: 10 }}>
            <XAxis
              // style={{ marginHorizontal: -10 }}
              data={graphData}
              // formatLabel={(value, index) => index}
              contentInset={contentInset}
              svg={{ fontSize: 10, fill: "grey" }}
              style={{ height: 10, margin: 10 }}
              spacingInner={0.02}
            />
          </View>
        </View>
        <View style={styles.slider}>
          <Text style={styles.text}>Dividend Payout Percentage</Text>
          <Slider
            value={sliderBarDividendPercentage}
            thumbTintColor={Colors.primaryColor}
            minimumValue={0}
            maximumValue={1}
            onValueChange={(value) => adjustDividend(value)}
          />
          <Text style={styles.text}>{(sliderBarVisibleValue).toFixed(2)}%</Text>
        </View>
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
    backgroundColor: "white",
  },
  image: {
    width: 150,
    height: 58,
  },
  card: {
    backgroundColor: "white",
  },
  text: {
    color: Colors.primaryColor,
  },
  slider: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 20,
  },
});

export default CompanyDetailsScreen;
