import React from 'react'
import { 
  View, 
  StyleSheet, 
  Text 
} from 'react-native';

import { TextInput as Input } from 'react-native-paper'
import theme from '../style/theme'

type Props = React.ComponentProps<typeof Input> & 
  { errorText?: string, outerStyle?: string, inputStyle?: string }

export default ({ errorText, ...props }: Props) => (
  <View style={('outerStyle' in props) ? [s.container, props.outerStyle] : s.container}>
    <Input
      style={('inputStyle' in props) ? [s.input, props.inputStyle] : s.input}
      selectionColor={theme.colors.primary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={s.error}>{errorText}</Text> : null}
  </View>
)

const s = StyleSheet.create({

  container: {
    width: '100%',
    marginVertical: 12,
  },

  input: {
    backgroundColor: theme.colors.surface,
    //color: theme.colors.accent // BUG  no way to set text color
  },

  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },

})

