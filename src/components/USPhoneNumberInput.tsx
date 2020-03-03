
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

export default (props) => (

  <View style={s.container}>
    <TextInputMask 
      type='cel-phone'
      options={{
        dddMask: '+99 99'
      }}
    />
  </View>



)

const s = StyleSheet.create({
  container : {
    backgroundColor: '#eee',
    borderColor: '#e11',
    borderWidth: 2, 
  }
})