import React from 'react';
import { View, TouchableOpacity, StyleSheet, Slider } from 'react-native';
import Vector from './Vector';

const Bar = props => {
    return (
        <View style={styles.container}>
            <Slider
                style={styles.slider}
                value={props.value}
                onValueChange={props.onValueChange}
                thumbTintColor={'black'}
                minimumTrackTintColor={'black'}
            />
            <TouchableOpacity
                onPress={props.onPress}
            >
                <Vector
                    size={14}
                    viewBox={'0 0 32 32'}
                    color={'black'}
                    path={['M32 0h-13l5 5-6 6 3 3 6-6 5 5z', 'M32 32v-13l-5 5-6-6-3 3 6 6-5 5z', 'M0 32h13l-5-5 6-6-3-3-6 6-5-5z', 'M0 0v13l5-5 6 6 3-3-6-6 5-5z']}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    slider: {
        flex: 1
    }
})

export default Bar;