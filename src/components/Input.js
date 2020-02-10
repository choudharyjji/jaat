
import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Dimensions } from 'react-native'
import Text from './Text';
import * as theme from '../constants/theme';

const { width } = Dimensions.get("window");

export default class Input extends Component {
  render() {
    const { label, full, email, phone, number, password, style, ...props } = this.props;
    const inputStyles = [
      styles.input,
      full && styles.full,
      style,
    ];

    const inputType = email
      ? 'email-address' : number
      ? 'numeric' : phone
      ? 'phone-pad' : 'default';

    return (
      <View>
        <TextInput
          placeholder={label}
          placeholderTextColor={'#333333'}
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
    marginBottom: 8,
  },
  full: {
    width: width - 50,
  }
});
