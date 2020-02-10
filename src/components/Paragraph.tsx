import React from 'react'
import { StyleSheet, Text } from 'react-native'
import theme from '../style/theme'

type Props = {
  children: React.ReactNode;
}

export default ({ children }: Props) => (
  <Text style={styles.text}>{children}</Text>
)

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: theme.colors.secondary,
    textAlign: 'left',
    marginBottom: 14,
  },
})

