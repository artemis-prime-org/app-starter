import React from 'react'
import { 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native'

import { Entypo } from '@expo/vector-icons'

import { getStatusBarHeight } from 'react-native-status-bar-height'

type Props = {
  goBack: () => void
}

export default ({ goBack }: Props) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <Entypo name='chevron-left' size={32} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    top: 4 + getStatusBarHeight(),
    left: 4,
    zIndex: 100,
    width: 32,
    height: 32,
  },

  
})
