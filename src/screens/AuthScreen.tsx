import React from 'react'
import {
  ImageBackground,
  StyleSheet,
} from 'react-native'

import { Logo, Button } from '../components'
import { NavProps } from '../types'

const bgImage = require('../../assets/collage.png')

export default ({ navigation }: NavProps) => (
  <ImageBackground
    source={bgImage}
    style={styles.background}
  >
    <Logo />
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('RegisterScreen')}>
      Sign Up
    </Button>
  </ImageBackground>
)

const styles = StyleSheet.create({
  
  background: {
    flex: 1,
    width: '100%',
  },

})

