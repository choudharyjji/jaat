import React from 'react';
import { View, StyleSheet } from 'react-native';

const ControlLayout = props => {
    return (
        <View style={props.isToolbarHide ? styles.hide : styles.container}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,.7)',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 40,
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    hide: {
        backgroundColor: 'rgba(255,255,255,.7)',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 0,
        flexDirection: 'column',
        paddingHorizontal: 10,
        opacity: 0,
        zIndex: -5
    }
});

export default ControlLayout;