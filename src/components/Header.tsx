import React from 'react'
import { StyleSheet, Text } from 'react-native'
import theme from '../style/theme'

type Props = {
  children: React.ReactNode
};

export default ({ children }: Props) => (
  <Text style={styles.header}>{children}</Text>
)

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
})

