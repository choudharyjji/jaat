import React, { Component } from 'react'
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import * as theme from '../constants/theme';

const { width } = Dimensions.get('window');

export default class Button extends Component {
  render() {
    const { style, full, opacity, children, ...props } = this.props;
    const buttonStyles = [
      styles.button,
      full && styles.full,
      style,
    ];

    return (
      <TouchableOpacity
        style={buttonStyles}
        activeOpacity={opacity || 0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6b00fd',
    borderRadius: 4,
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#8c38ff'
  },
  full: {
    width: width - 50,
  }
});
