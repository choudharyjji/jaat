import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../constants/theme';

export default class TabBarIcon extends React.Component {
  render() {
    const { name, size, ...props } = this.props;
    return (
      <Icon
        name={name}
        size={size}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? '#39ccdd' : colors.gray}
        {...props}
      />
    );
  }
}