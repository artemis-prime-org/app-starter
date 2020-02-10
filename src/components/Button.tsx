import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'

import theme from '../style/theme'

type Props = React.ComponentProps<typeof PaperButton>

export default ({ mode, style, children, ...props }: Props) => (
  <PaperButton
    style={[
      styles.button,
      //mode === 'outlined' && { color: theme.colors.secondary },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
)

const styles = StyleSheet.create({

  button: {
    width: '100%',
    marginVertical: 10,
  },
  
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },

})
