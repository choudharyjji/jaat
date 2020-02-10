import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

export default class Block extends Component {
  render() {
    const { flex, row, center, middle, bottom, right, space, end, style, children, ...props } = this.props;
    const blockStyles = [
      styles.block,
      flex && { flex },
      flex === 'disabled' && { flex: 0 },
      center && styles.center,
      middle && styles.middle,
      right && styles.right,
      bottom && styles.bottom,
      space && { justifyContent: `space-${space}` },
      row && styles.row,
      end && styles.end,
      style,
    ];

    return (
      <View style={blockStyles} {...props}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row'
  },
  center: {
    alignItems: 'center'
  },
  bottom: {
    alignItems: 'flex-end'
  },
  end: {
    justifyContent: 'flex-end'
  },
  middle: {
    justifyContent: 'center'
  },
  right: {
    justifyContent: 'flex-end'
  },
});
