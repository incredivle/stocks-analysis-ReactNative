import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import MainNavigator from "./navigation/AppNavigator";
import NavigationContainer from "./navigation/NavigationContainer";
import { newCompanyReducer } from "./store/reducers/companies";
import { fetchCompaniesReducer } from "./store/reducers/companies";
import { authReducer } from "./store/reducers/auth";
import reducers from "./store/reducers/companies";

const rootReducer = combineReducers({
  company: newCompanyReducer,
  fetchCompanies: fetchCompaniesReducer,
  auth: authReducer
})



const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <Provider store={store}><NavigationContainer /></Provider>;
}
