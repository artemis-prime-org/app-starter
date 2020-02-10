import React from 'react'
import { Image, StyleSheet } from 'react-native'

const img = require('../../assets/esx-logo.png')
  
export default (props) => (
  <Image width="220" height="127" source={img} style={('style' in props) ? [s.image, props.style] : s.image}/>
)

const s = StyleSheet.create({
  image: {
    alignSelf: 'center'
  },
})
