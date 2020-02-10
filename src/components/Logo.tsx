import React from 'react'
import { 
  Image, 
  StyleSheet, 
  ViewStyle 
} from 'react-native'

const img = {
  source: require('../../assets/esx-logo.png'),
  w: 220,
  h: 127
}
  
interface Props {
  width?: number,
  height?: number,
  style?: ViewStyle,
}

export default (props: Props) => {

  const dim = {
    width: ('width' in props) ? props.width : img.w,
    height: ('height' in props) ? props.height : img.h
  }

  return (
    <Image source={img.source} style={('style' in props) ? [s.image, props.style, dim] : [s.image, dim]}/>
  )
}

const s = StyleSheet.create({
  image: {
    alignSelf: 'center'
  },
})
