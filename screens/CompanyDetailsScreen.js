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

  console.log(
    "Max retainedEarningsYearly: ",
    Math.max(...company.data.retainedEarningsYearly)
  );
  console.log("retainedEarningsYearly: ", company.data.retainedEarningsYearly);
  console.log(
    "Max dividendReturnsYearly: ",
    Math.max(...company.data.dividendReturnsYearly)
  );
  console.log("dividendReturnsYearly: ", company.data.dividendReturnsYearly);

  let graphYAxisMax =
    Math.max(...company.data.retainedEarningsYearly) +
    Math.max(...company.data.dividendReturnsYearly);

  // const [sliderBarDividendPercentage, setSliderBarDividendPercentage] = useState(0);

  const adjustDividend = (sliderBarDividendPercentage) => {
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

    // console.log("epsReturnsYearly: ", epsReturnsYearly);
    // console.log("dividendReturnsYearly: ", dividendReturnsYearly);
    // console.log("retainedearningsYearly: ", retainedEarningsYearly);
    // console.log("Future stock price: ", futureStockPrice);
    // console.log("Sum of dividends: ", sumOfDividends);
    // console.log(
    //   "Future earnings per share: ",
    //   company.data.futureEarningsPerShare
    // );
  };

  adjustDividend(0.2);

  const axesSvg = { fontSize: 10, fill: Colors.primaryColor };
  const verticalContentInset = { top: 10, bottom: 10 }; // set this dynamically: a bit below min of array and bit above max of array
  const xAxisHeight = 30; // set as 10 for 10 years
  // // Labelled axis?
  const contentInset = { top: 20, bottom: 20, left: 20, right: 20 };

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
  const keys = ["retainedEarnings", "dividend" ];

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
              data={data}
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
              data={data}
              showGrid={true}
              contentInset={contentInset}
              spacingInner={0.02}

              // valueAccessor={({ item, key }) => item[key].value}
            />
          </View>

          <View style={{ marginLeft: 10 }}>
            <XAxis
              // style={{ marginHorizontal: -10 }}
              data={data}
              // formatLabel={(value, index) => index}
              contentInset={contentInset}
              svg={{ fontSize: 10, fill: "grey" }}
              style={{ height: 10, margin: 10 }}
              spacingInner={0.02}
            />
          </View>
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
});

export default CompanyDetailsScreen;
