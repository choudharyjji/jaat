import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Vector = props => {
    return (
        <Svg width={props.size} height={props.size} viewBox={props.viewBox}>
                {props.path.map(i => <Path fill={props.color} d={i}/>)}
        </Svg>
    );
};

export default Vector;