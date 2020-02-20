import React, { Component } from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from 'react-native';

import { Block, Text, TabBarIcon } from '../components';

//Redux
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';

class History extends Component {

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
                        जाटों का इतिहास 
                    </Text> 
                </Block>
            )
        }
    };

    render() {
        const { navigation, auth, history } = this.props;

        return (
            <SafeAreaView style={{flex: 1}}>
                <StatusBar backgroundColor="#16191D" barStyle="light-content" />
                <Block style={{backgroundColor: '#20242A'}}>
                    <ScrollView
                        style={{
                            flex: 1
                        }}
                    >
                        <Block
                            style={{ padding: 20}}
                        >
                            <Block style={{ marginBottom: 10 }}>
                                <Text style={{ marginBottom: 10 }}>जाट इतिहास को समझने के लिए इसे संपूर्णता में पढना जरूरी है। अधिकतर इतिहासकारों ने थोड़ा सा पढ़कर इनके उत्पत्ति के संबंध में व्याख्या दी गई हैं जो सही रूप नहीं दिखा पाते। जाट इतिहास को समझने के लिए एक कहानी है:</Text>
                                <Text style={{ marginBottom: 10 }}>एक गांव में चार अन्धे रहते थे। एक बार गांव में हाथी आ गया। अंधे भी हाथी के पास जाकर उसे टटोलने लगे, एक के हाथ में पूंछ आगई वह बोला यह तो सांप है। दसरे के हाथ में कान आया वह बोला नहीं यह तो छाज है। तीसरे के हाथ में पांव अाया तोवह बोला यह तो खम्बा है। चौथे का हाथ पेट पर पड़ा तो वह बोला, क्यूं झूठ बोलते हो यह तो तख्त है।</Text>
                                <Text style={{ marginBottom: 10 }}>इसी प्रकार जाट इतिहास को विभिन्न लोगों ने अलग-अलग ढंग से समझा तदनुसार इनके उत्पत्ति की व्याख्याएँ कर दी गई हैं।</Text>
                                <Text style={{ marginBottom: 10 }}>हमें यह ध्यान रखना चाहिए कि इतिहास केवल विजेताओं का ही लिखा गया है। दो संस्कृतियों के द्वंद्व में पराजित संस्कृति को मिटने के लिए बाध्य किया जाता है। विजेता इतिहास की पुस्तकों को इस प्रकार लिखता है जिसमें उसका गुणगान हो, और विजित को अपमानित किया गया हो। हर नया विजेता सत्तासीन होते ही अपनी कीर्ति-कथा गढ़ने में जुट जाता है। इसके लिए वह बुद्धिजीवियों की मदद लेता है। उसका एकमात्र उद्देश्य होता है, पराजित समुदायों के दिलोदिमाग पर कब्जा कर लेना। इस तरीके से वह पराजित लोगों के इतिहास बोध को दूषित कर देता है। इस संदर्भ में जार्ज आरवेल ने कहा था कि ‘किसी समाज को नष्ट करने का सबसे कारगर तरीका है, उसके इतिहास बोध को दूषित और खारिज कर दिया जाए।’ जाट इतिहास को भी पूर्व में इसी तरह से नष्ट करने के प्रयास किए गए हैं।</Text>
                                <Text style={{ marginBottom: 10 }}>हिन्दी भाषा में निम्न पुस्तकों और लेखों के माध्यम से इस अप्प पर जाट इतिहास उपलब्ध कराने का प्रयास किया गया है:</Text>
                            </Block>
                            <Block style={{ marginBottom: 60 }}>

                                {history && history.map((book, i) => {
                                   
                                    return (
                                        <TouchableOpacity
                                            key={i}
                                            style={{ marginBottom: 10 }}
                                            onPress={() => navigation.navigate('JaatEtihaas', {'bookid' : book.id})}
                                        >
                                            <Text bold>
                                                {i+1}) {book.bookName}{book.bookAuthor.length > 0 ? `: ${book.bookAuthor}` : null}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                })}
                                
                                
                            </Block>
                        </Block>
                    </ScrollView>
                </Block>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        history: state.firestore.ordered.history,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect( props => {
        return [
            {
                collection: 'jaatHistoryBook', 
                orderBy: ['createdAt', 'desc'],
                storeAs: 'history'
            },
        ]
    })
)(History);