import React from 'react'
import { StyleSheet, Text } from 'react-native'
import theme from '../style/theme'

type Props = {
  children: React.ReactNode,
  style: any
}

export default ({ children, style }: Props) => (
  <Text style={[styles.text, style]}>{children}</Text>
)

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: theme.colors.accent,
    textAlign: 'left',
    marginBottom: 14,
  },
})

