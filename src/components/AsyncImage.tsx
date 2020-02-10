// eslint-disable-line no-unused-vars
import React, { Component, useState } from 'react'

import { Image, View } from 'react-native'

type Style = number | string 

type Props = {
  placeholderColor?: string,
  style: {
    width: number,
    height: number,
    [key: string]: Style
  },
  source: {
    uri: string
  }
}


export default ({ source, placeholderColor, style}: Props)  => {
  
  const [loaded, setLoaded] = useState(false)


  return (
    <View
      style={style}>

      <Image
        source={source}
        resizeMode={'contain'}
        style={[
          style,
          {
            position: 'absolute',
            resizeMode: 'contain'
          }
        ]}
        onLoad={() => setLoaded(true)} />

      {!loaded &&
        <View
          style={[
            style,
            {
              backgroundColor: placeholderColor || '#90a4ae',
              position: 'absolute'
            }
          ]} />
      }

    </View>
  )
}
