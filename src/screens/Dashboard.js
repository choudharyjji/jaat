import React, { Component } from 'react';
import { Image, SafeAreaView, StatusBar, Dimensions, AsyncStorage, Linking, Alert, TouchableOpacity, ScrollView, Platform } from 'react-native';

import { Block, Text, TabBarIcon } from '../components';

class Dashboard extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: null,
            headerStyle: {
                backgroundColor: '#16191D',
                borderBottomWidth: 0
            },
            headerTintColor: '#ffffff',
            headerLeft: () => (
                <Block row center middle style={{paddingHorizontal: 10}}>
                    <TouchableOpacity 
                        style={{
                            width: 30,
                            alignItems: 'center'
                        }}
                        onPress = {() => navigation.toggleDrawer()}
                    >
                        <TabBarIcon
                            size={20}
                            name={'bars'}
                        />
                    </TouchableOpacity>   
                    <Text
                        style={{marginLeft: 8}}
                        medium
                        color={'#fff'}
                        size={14}
                    >
                        Welcome To JAAT
                    </Text> 
                </Block>
            )
        }
    };

    render() {
        return (
            <Block>
                <Text>
                    Dashboard
                </Text>
            </Block>
        )
    }
}

export default Dashboard;