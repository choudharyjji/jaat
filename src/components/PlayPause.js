import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Vector from './Vector';

const PlayPause = props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={props.isToolbarHide ? styles.hide : styles.container}
        >
            {props.paused ?
                <Vector
                    size={30}
                    viewBox={'0 0 32 32'}
                    color={props.isToolbarHide ? 'transparent' : 'black'}
                    path={['M6 4l20 12-20 12z']}
                />
                :
                <Vector
                    size={30}
                    viewBox={'0 0 32 32'}
                    color={props.isToolbarHide ? 'transparent' : 'black'}
                    path={['M4 4h10v24h-10zM18 4h10v24h-10z']}
                />
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,.7)',
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hide: {
        backgroundColor: 'rgba(255,255,255,.7)',
        height: 0,
        width: 0,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0
    }
});

export default PlayPause;