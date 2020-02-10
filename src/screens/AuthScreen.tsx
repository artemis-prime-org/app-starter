import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { Button } from '../components'
import { NavProps } from '../types'
import theme from '../style/theme'

const bgImage = require('../../assets/collage.png')

export default ({ navigation }: NavProps) => (
  <ImageBackground
    source={bgImage}
    style={styles.background}
  >
    <View style={styles.inner} >
      <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      <Button mode="outlined" color={theme.colors.secondary} style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
        Sign Up
      </Button>
    </View>
  </ImageBackground>
)

const styles = StyleSheet.create({
  
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    paddingBottom: theme.spacing(4)
  },

  inner: {
    padding: theme.spacing(1)
  },

  button: {
    borderColor: theme.colors.secondary
  }

})

