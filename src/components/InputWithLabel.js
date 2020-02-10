
import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Dimensions } from 'react-native';

import Text from './Text';
import * as theme from '../constants/theme';

const { width } = Dimensions.get("window");

export default class InputWithLabel extends Component {
  render() {
    const { label, verified, withLabel, lastHalf, rightLabel, half, email, phone, number, password, style, ...props } = this.props;
    const inputStyles = [
      styles.input,
      half && styles.half,
      lastHalf && styles.lastHalf,
      style,
    ];

    const labelStyles = [
        styles.label,
        lastHalf && styles.lastHalf
    ]

    const inputType = email
      ? 'email-address' : number
      ? 'numeric' : phone
      ? 'phone-pad' : 'default';

    return (
      <View>
        <View style={styles.labelContainer}>
          <Text caption medium style={labelStyles}>
            {withLabel}
          </Text>
          {verified ? (
            <Text caption medium style={styles.verifiedStyles}>verified</Text>
          ): (
            <Text caption medium style={labelStyles}>{rightLabel}</Text>
          )}
          
        </View>
        <TextInput
          placeholder={label}
          placeholderTextColor={'rgba(255,255,255,0.6)'}
          style={inputStyles}
          secureTextEntry={password}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={inputType}
          {...props}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    //backgroundColor: theme.colors.input,
    borderWidth: 0.2,
    borderColor: theme.colors.border,
    borderRadius: 5,
    fontSize: theme.sizes.font,
    color: theme.colors.white,
    height: 40,
    paddingVertical: 11,
    paddingHorizontal: 16,
  },
  label: {
    textTransform: 'uppercase',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  half: {
    width: ((width - 40) / 2) - 5,
  },
  lastHalf:{
      marginLeft: 10
  },verifiedStyles:{ 
    color: 'green'
  }
});
