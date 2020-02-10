import React from 'react'
import { 
  TouchableOpacity, 
  Image, 
  StyleSheet 
} from 'react-native'

import { getStatusBarHeight } from 'react-native-status-bar-height'

const backArrow = require('../../assets/icon.png') // temp

type Props = {
  goBack: () => void
}

export default ({ goBack }: Props) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <Image style={styles.image} source={backArrow} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 10,
  },

  image: {
    width: 24,
    height: 24,
  },
  
})

