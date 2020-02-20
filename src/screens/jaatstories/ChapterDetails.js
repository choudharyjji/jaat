import React, { Component } from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from 'react-native';

//Redux
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';

import { Block, Text, TabBarIcon } from '../../components';

class ChapterDetails extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: null,
            headerStyle: {
                backgroundColor: '#16191D',
                borderBottomWidth: 0
            },
            headerTintColor: '#ffffff',
        }
    };

    render() {
        //console.log(this.props.navigation.state.params.bookid);
        const { chapterText } = this.props.navigation.state.params.chapter;
        //console.log(this.props.navigation.state.params.chapter)
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
                            <Text>
                                {chapterText}
                            </Text>
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
        chapters: state.firestore.ordered.chapters
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect( props => {
        //console.log()
        let bookId = props.navigation.state.params.bookid;
        return [
            {
                collection: 'chapterInDetail', 
                where: [['bookId', '==', bookId]],
                storeAs: 'chapters'
            },
        ]
    })
)(ChapterDetails);