import React, { Component } from 'react';
import { StyleSheet, Image, StatusBar, ActivityIndicator, Dimensions  } from 'react-native';

const { width, height } = Dimensions.get('window');

//import firebase
import { db } from '../config/fbConfig';

import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";

const styles = StyleSheet.create({
    container : {
      flex: 1,
    }, 
    loader : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

import { Block, Text } from '../components';

class AuthLoadingScreen extends Component {

    componentDidMount(){
        db.auth().onAuthStateChanged(async user => {
            this.props.navigation.navigate(user ? 'App' : 'Auth');
        })
    }

    render() {
        return (
            <Block center middle>
                <StatusBar
                    backgroundColor="#1c313a"
                    barStyle="light-content"
                />
                {/* {!isLoaded(this.props.auth) ? (
                    <Block style={styles.loader}>
                        <Image 
                            source={require('../../assets/images/intro/splash-screen.jpg')}
                            style={{
                                width: width,
                                height: height
                            }}
                        />
                    </Block>
                ) : isEmpty(this.props.auth) ? (
                    null
                ) : ( console.log("ready to transition") )} */}
            </Block>
        )
    }
}

export default compose(
    //withRouter, if you use react router to redirect
    firebaseConnect(), // withFirebase can also be used
    connect(({ firebase: { auth } }) => ({ auth }))
)(AuthLoadingScreen);