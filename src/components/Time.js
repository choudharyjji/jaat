import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Time = props => (<Text style={styles.time}>{props.time}</Text>);

const styles = StyleSheet.create({
    time: {
        marginLeft: 12
    }
})

export default Time;