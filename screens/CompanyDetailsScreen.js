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
import {
  LineChart,
  Grid,
  XAxis,
  YAxis,
  StackedBarChart,
} from "react-native-svg-charts";

import Colors from "../constants/Colors";

const CompanyDetailsScreen = (props) => {
  const company = props.navigation.getParam("company");

  // const [sliderBarDividendPercentage, setSliderBarDividendPercentage] = useState(0);

  const adjustDividend = (sliderBarDividendPercentage) => {
    
    

    // Calculate Compounding ROE : i_CompoundROE = (c_EPS - c_Dividend) / c_EPS * i_ROE
    let compoundingROE =
      ((company.data.currentEarningsPerShare - sliderBarDividendPercentage) /
        company.data.currentEarningsPerShare) * company.data.ROE;

    // Future Equity Per Share : i_FuturePerShareEquity = EquityPerShare() * ((1 + i_CompoundROE) ^ i_AnalysisPeriod)
    let futureEquityPerShare =
      company.data.currentEquityPerShare * Math.pow(1 + compoundingROE, 10);

    // Future Earnings Per Share : i_FutureEPS = i_FuturePerShareEquity * i_ROE
    let futureEarningsPerShare = futureEquityPerShare * company.data.ROE;

    retainedEarningsPerShare =
      company.data.currentEarningsPerShare * (1 - sliderBarDividendPercentage);
    sumOfDividends =
      company.data.currentEarningsPerShare * sliderBarDividendPercentage;

    // After 1st year
    let totalEquityValue = company.data.currentEquityPerShare;
    totalEquityValue = totalEquityValue + retainedEarningsPerShare;

    // Now sum the retained earnings and paid out dividends
    let perShareEarning = 0;
    var counter = 0;
    let epsReturnsYearly = [];
    let dividendReturnsYearly = [];
    let retainedEarningsYearly = [];
    while (counter < company.data.timePeriodAnalysed) {
      perShareEarning = totalEquityValue * company.data.ROE;
      epsReturnsYearly.push(perShareEarning);
      sumOfDividends =
        sumOfDividends + perShareEarning * sliderBarDividendPercentage;

      dividendReturnsYearly.push(perShareEarning * sliderBarDividendPercentage);

      totalEquityValue =
        totalEquityValue +
        perShareEarning * company.data.retainedEarningsPercentage;

      retainedEarningsYearly.push(
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

    console.log("epsReturnsYearly: ", epsReturnsYearly);
    console.log("dividendReturnsYearly: ", dividendReturnsYearly);
    console.log("retainedearningsYearly: ", retainedEarningsYearly);
    console.log("Future stock price: ", futureStockPrice);
    console.log("Sum of dividends: ", sumOfDividends);
    console.log(
      "Future earnings per share: ",
      company.data.futureEarningsPerShare
    );
  };

  adjustDividend(0.2);

  const axesSvg = { fontSize: 10, fill: Colors.primaryColor };
  const verticalContentInset = { top: 10, bottom: 10 }; // set this dynamically: a bit below min of array and bit above max of array
  const xAxisHeight = 30; // set as 10 for 10 years
  // // Labelled axis?

  const data = [
    {
      year: 1,
      dividend: company.data.dividendReturnsYearly[0],
      retainedEarnings: company.data.retainedEarningsYearly[0],
    },
    {
      year: 2,
      dividend: company.data.dividendReturnsYearly[1],
      retainedEarnings: company.data.retainedEarningsYearly[1],
    },
    {
      year: 3,
      dividend: company.data.dividendReturnsYearly[2],
      retainedEarnings: company.data.retainedEarningsYearly[2],
    },
    {
      year: 4,
      dividend: company.data.dividendReturnsYearly[3],
      retainedEarnings: company.data.retainedEarningsYearly[3],
    },
    {
      year: 5,
      dividend: company.data.dividendReturnsYearly[4],
      retainedEarnings: company.data.retainedEarningsYearly[4],
    },
    {
      year: 6,
      dividend: company.data.dividendReturnsYearly[5],
      retainedEarnings: company.data.retainedEarningsYearly[5],
    },
    {
      year: 7,
      dividend: company.data.dividendReturnsYearly[6],
      retainedEarnings: company.data.retainedEarningsYearly[6],
    },
    {
      year: 8,
      dividend: company.data.dividendReturnsYearly[7],
      retainedEarnings: company.data.retainedEarningsYearly[7],
    },
    {
      year: 9,
      dividend: company.data.dividendReturnsYearly[8],
      retainedEarnings: company.data.retainedEarningsYearly[8],
    },
    {
      year: 9,
      dividend: company.data.dividendReturnsYearly[9],
      retainedEarnings: company.data.retainedEarningsYearly[9],
    },
  ];

  const colors = [Colors.primaryColor, Colors.accentColor];
  const keys = ["dividend", "retainedEarnings"];

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
              showGrid={true}
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
});

export default CompanyDetailsScreen;
