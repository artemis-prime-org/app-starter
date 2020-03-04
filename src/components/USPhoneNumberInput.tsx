
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import theme from '../style/theme'

export default (props) => {

  const [text, setText] = useState('')

  return (
    <View style={s.container}>
      <TextInputMask 
        type='custom'
        options={{
          mask: '1 (999) 999-9999'
        }}
        value={text}
        onChangeText={ t => setText(t) }
        keyboardType='numeric'
        placeholder='(999) 999-9999'
        returnKeyType='done'
        style={s.input}
      />
    </View>
  )
} 


const s = StyleSheet.create({
  container : {
    backgroundColor: '#eee',
    borderColor: '#e11',
    borderWidth: 2, 
    color: "#111",
  },

  input: {
    backgroundColor: theme.colors.surface,
    paddingHorizontal: 14,

    //color: theme.colors.accent // BUG  no way to set text color
  },

})
/*
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

*/