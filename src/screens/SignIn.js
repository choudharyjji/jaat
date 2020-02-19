import React, { Component } from 'react';
import { TouchableWithoutFeedback, Keyboard, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import PhoneInput from 'react-native-phone-input';

//import database firebase
import { db, fs } from '../config/fbConfig';
//import analytic from '../helpers/analytic';

import { Block, Text, Button, Input } from '../components';

class SignIn extends Component {

    state = {
        isSentConfirmCode: false,
        confirmationResult: null,
        confirmCode: '',
        phoneLoading: false
    }

    componentDidMount(){
        //analytic.setCurrentScreen("SignIn");
    }

    confirmCode = (code) => {
        this.setState({
            phoneLoading: true
        })
            
        if(this.state.confirmationResult && code.length > 5) {
            
            this.state.confirmationResult.confirm(code).then( async (user) => {
                // check if user already exsits
                //analytic.logEvent('user_login', data);
                this.setState({
                    phoneLoading: false
                })
                
            }).catch(error => {
                Alert.alert(
                    'Invalid OTP code',
                    'Please type your OTP code you have recieved from ML Guide. Check your messages or contact app administrator',
                    [
                        {
                            text: 'OK', onPress: () => console.log(error)
                        },
                    ]
                );

            });
        }else{
            this.setState({
                phoneLoading: false
            })
            Alert.alert(
                'Invalid OTP code',
                'Please type your OTP code you have recieved from ML Guide. Check your messages.',
                [
                    {
                        text: 'OK', onPress: () => console.log('OK Pressed')
                    },
                ]
            );
            
        }        
    }

    _attemptSignIn = () => {
        this.setState({
            phoneLoading: true
        })
        const phoneNumber = this.phone.getValue();
        let regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
        let verified = regexp.test(phoneNumber);
        
        if(verified){
            db.auth().signInWithPhoneNumber(phoneNumber, true).then( async confirmationResult => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                //this.setState({ confirmResult })
                this.setState({phoneLoading: false, isSentConfirmCode: true, confirmationResult: confirmationResult});
                
            }).catch(error => {
                this.setState({
                    phoneLoading: false
                })
                alert(error.message)
      
                console.log(error)
            })
        }else{
            this.setState({
                phoneLoading: false
            })
            alert('Invalid Phone Number')
        }
    }

    changePhoneNumber = () => {
        this.setState({ confirmResult: null, verificationCode: '' })
    }

    render() {
        if(this.state.isSentConfirmCode){
            const disabledButton = !(this.state.confirmCode.length > 5);
            return (
                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    contentContainerStyle={styles.container}
                    scrollEnabled={true}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <Block 
                            middle
                            style={{ backgroundColor: '#20242A', paddingHorizontal: 20 }}
                        >
                            <Text
                                bold
                                style={{ marginBottom: 50}}
                                size={18}
                            >
                                Type your OTP here
                            </Text>
                            <Input
                                number
                                label={'Enter OTP Here'}
                                style={{
                                    height: 60,
                                    fontSize: 18, 
                                    fontFamily: 'Montserrat-Light', 
                                    color: '#000',
                                    backgroundColor: '#fff',
                                    borderWidth: 0.4,
                                    borderColor: 'rgba(51,51,51,1)'
                                }}
                                onChangeText={text => this.setState({ confirmCode: text })}
                            />
                            {this.state.phoneLoading ? (
                                <Button
                                    style={{ height: 60, marginTop: 10, marginBottom: 10}}
                                >
                                    <ActivityIndicator size="large" color="#fff" />
                                </Button>
                            ) : (
                            <Button
                                disabled={disabledButton}
                                style={{ height: 60, marginTop: 10, marginBottom: 10}}
                                onPress={() => this.confirmCode(this.state.confirmCode)}
                            >
                                <Text
                                    bold
                                    size={18}
                                >Confirm OTP Code</Text>
                            </Button>
                            )}
                        </Block>
                    </TouchableWithoutFeedback>
                </KeyboardAwareScrollView>
            )
        }else{
            return (
                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    contentContainerStyle={styles.container}
                    scrollEnabled={true}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <Block 
                            middle
                            style={{ backgroundColor: '#20242A', paddingHorizontal: 20 }}
                        >
                            <Text
                                bold
                                style={{ marginBottom: 50}}
                                size={18}
                            >
                                Login with your phone number
                            </Text>
                            <Text
                                medium
                            >Phone Number</Text>
                            <PhoneInput
                                style={{
                                    backgroundColor: '#F5F5F6',
                                    padding: 20,
                                    borderRadius: 10,
                                    marginVertical: 5
                                }}
                                ref={ref => {
                                    this.phone = ref;
                                }}
                                initialCountry="in"
                            />
                            
                            {this.state.phoneLoading ? (
                                <Button
                                    style={{ height: 60, marginTop: 10, marginBottom: 10}}
                                >
                                    <ActivityIndicator size="large" color="#fff" />
                                </Button>
                            ) : (
                                <Button
                                    style={{ height: 60, marginTop: 10, marginBottom: 10}}
                                    onPress={() => this._attemptSignIn()}
                                >
                                    <Text
                                        bold
                                        size={18}
                                    >Login</Text>
                                </Button>
                            )}
                            <Text size={10} color={'rgba(255,255,255,.2)'}>We will not, in any circumstances, share your personal information with other individuals or organizations without your permission, including public organizations, corporations or individuals, except when applicable by law.</Text>
                        </Block>
                    </TouchableWithoutFeedback>              
                </KeyboardAwareScrollView>
            )
        }
        
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E1E2E1",
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})

export default SignIn;