import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import SplashScreen from 'react-native-splash-screen'

//redux
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

//firebase
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rrfProps}  from './src/config/fbConfig';
import analytic from './src/helpers/analytic';

//navigation
import AppNavigator from './src/navigation/AppNavigator';

//yellowbox warning
console.disableYellowBox = true;

class App extends Component{

  // gets the current screen from navigation state
  getActiveRouteName(navigationState) {
    
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return this.getActiveRouteName(route);
    }
    return route.routeName;
  }

  componentDidMount = () => {
    SplashScreen.hide();
  }

  render(){
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
              <AppNavigator 
                onNavigationStateChange={(prevState, currentState, action) => { 
                  //this.getActiveRouteName(currentState);
                  const currentRouteName = this.getActiveRouteName(currentState);
                  const previousRouteName = this.getActiveRouteName(prevState);
                  if (previousRouteName !== currentRouteName) {
                    
                    // the line below uses the @react-native-firebase/analytics tracker
                    // change the tracker here to use other Mobile analytics SDK.
                    analytic.setCurrentScreen(currentRouteName, currentRouteName);
                    //console.log(currentRouteName);
                  }
                }}
              />
            </ReactReduxFirebaseProvider>
        </Provider>
      </View>   
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default App;