import React, { Component } from 'react';
import { ScrollView, Dimensions, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { connect } from 'react-redux';
import { signOut } from '../redux/actions/authActions';
import Storage from "../helpers/Storage";

import Share from 'react-native-share';

import { Block, Text, Button } from './index'; 

import { version } from '../../package.json';
const { width, height } = Dimensions.get('window');

class DrawerItems extends Component {
    
    logOut = async (e) => {
        e.preventDefault();
        Storage.delete("auth");
        Storage.delete("fcmToken");
        
        this.props.signOut();
    }

    _shareButton(){
    
        const shareOptions = {
            title: 'Share via',
            message: 'जाटों के इतिहास के बारे में जाने और जाट समाज से जुड़े',
            url: 'https://play.google.com/store/apps/details?id=com.jaat',
        };
        
        return Share.open(shareOptions)
                .then((res) => { console.log(res) })
                .catch((err) => { err && console.log(err); });
    }

    render(){
        const { currentUser, navigation } = this.props;
        return (
            <Block
                style={{
                    backgroundColor: '#222224',
                    paddingBottom: 20
                }}
            >
                <SafeAreaView>
                    <ScrollView
                        style={{
                            flex: 0,
                        }}
                        forceInset={{top: 'always', horizontal: 'never'}}
                    >   
                        <Block>
                            <Block center style={{ marginBottom: 20, marginTop: 20 }}>
                                <TouchableOpacity
                                    //onPress={() => this.props.navigation.navigate('EditProfile')}
                                    style={{
                                        borderStyle: 'dashed',
                                        borderRadius: 10,
                                        borderWidth: 1,
                                        borderColor: 'rgba(51,51,51,1)',
                                        height: 90, 
                                        width: 90,
                                        justifyContent:'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    {currentUser.userPhoto !== "" ? (
                                        <Image 
                                        style={{
                                            borderRadius: 10,
                                            borderWidth: 1,
                                            borderColor: 'rgba(51,51,51,1)',
                                            width: 70,
                                            height: 70,
                                            marginBottom: 20,
                                            justifyContent:'center',
                                            alignItems: 'center'
                                        }}
                                        source={{ uri: currentUser.userPhoto }}
                                    />
                                    ) : (
                                        <Text style={{ textTransform: 'uppercase'}}>
                                            {currentUser.initials !== '' && currentUser.initials !== undefined ? currentUser.initials : 'Edit Photo'}
                                        </Text>
                                    )}
                                </TouchableOpacity>
                                
                            </Block>
                            <Block>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#3b3b3d',
                                        paddingVertical: 10,
                                        paddingHorizontal: 20,
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'rgba(255,255,255,.2)'
                                    }}
                                    //onPress={() => navigation.navigate('EditProfile')}
                                >
                                    <Text
                                        size={14}
                                        color={'#fff'}
                                    >
                                        Edit Profile
                                    </Text>
                                </TouchableOpacity>
                            </Block>
                            
                            <Block>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#3b3b3d',
                                        paddingVertical: 10,
                                        paddingHorizontal: 20,
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'rgba(255,255,255,.2)'
                                    }}
                                    onPress={() => Alert.alert(
                                        'Coming Soon',
                                        'Thanks for showing your support',
                                        [
                                            {
                                            text: 'Okay',
                                                onPress: () => {
                                                    console.log('Okay')
                                                },
                                            },
                                        ],
                                    )}
                                >
                                    <Text
                                        size={14}
                                        color={'#fff'}
                                    >
                                        Donate
                                    </Text>
                                </TouchableOpacity>
                                
                            </Block>
                            <Block
                                style={{ marginBottom: 20 }}
                            >
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#3b3b3d',
                                        paddingVertical: 10,
                                        paddingHorizontal: 20,
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'rgba(255,255,255,.2)'
                                    }}
                                    onPress={() => this._shareButton()}
                                >
                                    <Text
                                        size={14}
                                        color={'#fff'}
                                    >
                                        Share App
                                    </Text>
                                </TouchableOpacity>
                                
                            </Block>
                            <Block>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#3b3b3d',
                                        paddingVertical: 10,
                                        paddingHorizontal: 20,
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'rgba(255,255,255,.2)'
                                    }}
                                    onPress={() => navigation.navigate('ContactUs')}
                                >
                                    <Text
                                        size={14}
                                        color={'#fff'}
                                    >
                                        Contact Us / Support
                                    </Text>
                                </TouchableOpacity>
                                
                            </Block>
                            <Block
                                style={{
                                    justifyContent: 'flex-end',
                                    paddingHorizontal: 20,
                                    marginTop: 10
                                }}
                            >   
                                <Text
                                    center
                                    medium
                                    color={'#fff'}
                                    style={{
                                        marginBottom: 5
                                    }}
                                >   
                                    
                                    Version : {version}
                                </Text>
                                <Button
                                    style={{ 
                                        backgroundColor: 'transparent',
                                        borderColor: '#FFF',
                                        borderWidth: 1,
                                        marginBottom: 10
                                        }}
                                    onPress={this.logOut}
                                >
                                    <Text paragraph color="#FFF">Log Out</Text>
                                </Button>
                            </Block> 
                        </Block>
                    </ScrollView>
                </SafeAreaView>
            </Block>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.firebase.profile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerItems);