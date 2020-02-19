import React, { Component } from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from 'react-native';

import { Block, Text, TabBarIcon } from '../components';

class Heroes extends Component {

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
                        bold
                        style={{marginLeft: 8}}
                        color={'#fff'}
                        size={18}
                    >
                        जाटों के महाराजा 
                    </Text> 
                </Block>
            )
        }
    };

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <StatusBar backgroundColor="#16191D" barStyle="light-content" />
                <Block style={{backgroundColor: '#20242A'}}>
                    <ScrollView
                        style={{
                            flex: 1
                        }}
                    >
                        <Block>
                            <Block 
                                center
                                middle
                            >
                                <Text bold>
                                    कार्य प्रगति पर है 
                                </Text>
                            </Block>
                        </Block>
                    </ScrollView>
                </Block>
            </SafeAreaView>
        )
    }
}

export default Heroes;