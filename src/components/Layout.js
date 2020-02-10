import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';


const Layout = props => {
    if (props.isFullScreen) {
        return (
            <View style={styles.container}>
                <Modal
                    onRequestClose={() => {}}
                >
                    <View style={styles.videoContainer}>
                        {props.video}
                        {props.playPause}
                    </View>
                    <View style={styles.overlay}>
                        {props.loading &&
                            props.loader
                        }
                    </View>
                    {props.controls}
                </Modal>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.videoContainer}>
                    {props.video}
                    {props.playPause}
                </View>
                <View style={styles.overlay}>
                {props.loading &&
                    props.loader
                }
                </View>
                {props.controls}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        paddingTop: '56.25%'
    },
    videoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: 'black',
    },
    overlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Layout;