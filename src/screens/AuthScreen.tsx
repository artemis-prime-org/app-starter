import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { Button, Logo } from '../components'
import { NavProps } from '../types'
import theme from '../style/theme'

const bgImage = require('../../assets/collage.png')

export default ({ navigation }: NavProps) => (
  <ImageBackground
    source={bgImage}
    style={s.background}
  >
    <View style={s.inner} >
      <Logo width={100} height={100 * 127 / 220}/>
      <View>
        <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
          Login
        </Button>
        <Button mode="outlined" color={theme.colors.secondary} style={s.button} onPress={() => navigation.navigate('RegisterScreen')}>
          Sign Up
        </Button>
      </View>
    </View>
  </ImageBackground>
)

const s = StyleSheet.create({
  
  background: {
    flex: 1,
    width: '100%',
    paddingBottom: theme.spacing(4)
  },

  inner: {
    flex: 1,
    justifyContent: 'space-between',
    padding: theme.spacing(1),
    paddingTop: theme.spacing(4)
  },

  button: {
    borderColor: theme.colors.secondary
  }

})

