import React, { Component } from 'react';
import { Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

//redux
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';

import { Block, Text } from './index';

class HeaderDiamonds extends Component {

    render() {
        const { navigation, diamonds } = this.props;
        if(!isLoaded(diamonds)){
            return (
                <Block
                    style={{
                        marginRight: 10,
                    }}
                >
                    <Text
                        size={13}
                        color={'#fff'}
                        medium
                    >...</Text>
                </Block>
            )
        }else{
            //console.log(diamonds)
            if(diamonds !== null){
                return (
                    <Block
                        style={{
                            marginRight: 10,
                        }}
                    >
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('ReedemDiamonds')}
                        >
                            <Block
                                style={{
                                    flex: 0
                                }}
                                row
                            >
                                <Image 
                                    source={require('../../assets/images/diamond.png')}
                                    style={{
                                        height: 20,
                                        width: 18,
                                        marginRight: 5
                                    }}
                                />
                                <Text
                                    size={13}
                                    color={'#fff'}
                                    medium
                                >
                                    {diamonds.totalDiamonds ? diamonds.totalDiamonds.toFixed(2) : 0}
                                </Text>
                            </Block>
                        </TouchableOpacity>
                    </Block>
                )
            }else{
                return (
                    <Block
                        style={{
                            marginRight: 10,
                        }}
                    >
                        <TouchableOpacity 
                            onPress={() => Alert.alert(
                                'Please Update Profile',
                                'Please update your profile from main menu in order to do check diamonds',
                                [
                                  {
                                    text: 'Cancel',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel',
                                  },
                                  {
                                      text: 'OK', onPress: () => navigation.navigate('EditProfile')},
                                ]
                            )}
                        >
                            <Block
                                style={{
                                    flex: 0
                                }}
                                row
                            >
                                <Image 
                                    source={require('../../assets/images/diamond.png')}
                                    style={{
                                        height: 20,
                                        width: 18,
                                        marginRight: 5
                                    }}
                                />
                                <Text
                                    size={13}
                                    color={'#fff'}
                                    medium
                                >
                                    0
                                </Text>
                            </Block>
                        </TouchableOpacity>
                    </Block>
                )
            }
            
        }
        
    }
}

const mapStateToProps = (state) => {
    //console.log()
    return {
        auth: state.firebase.auth,
        diamonds: state.firestore.data['diamondsAmount']
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        const userid = props.auth.uid;
        if (!userid) return [];

        return [
            {
                collection: 'users', 
                doc: userid,
                storeAs: 'diamondsAmount'
            }
        ]
    })
)(HeaderDiamonds);