import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavigationActions } from "react-navigation";

import MainNavigator from "./AppNavigator";

const NavigationContainer = (props) => {
  const navRef = useRef();
  const isAuth = useSelector((state) => !!state.auth.token); // !! means to force something to be true or false. if is there it will be true

  useEffect(() => {
    if (!isAuth) {
      navRef.current.dispatch(
        NavigationActions.navigate({ routeName: 'Auth' })
      );
    }
  }, [isAuth]);

  return <MainNavigator ref={navRef} />;
};

export default NavigationContainer;
