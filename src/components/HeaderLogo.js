import React from "react";
import {
  Image, 
  Platform,
  StyleSheet
} from "react-native";

import Device from "./Device";

const styles = StyleSheet.create({
  logo: {
      width: Platform.OS === "ios" ? 180 : 200,
      height: Platform.OS === "ios" ? 30 : 20,
      resizeMode: "contain",
      ...Platform.select({
        ios: {
          marginTop: Device.isIphoneX ? -40 : true ? -4 : -15,
        },
        android: {
          marginTop: 2,
          marginLeft: 10,
        },
      }),
  }
})

class HeaderLogo extends React.Component{
  render(){
    return(
      <Image source={require('../../assets/images/monkey-logo.png')} style={styles.logo} />
    )
  }
}

export default HeaderLogo;