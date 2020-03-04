import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  View
} from 'react-native'

import { ButtonPlus, Logo } from '../../components'
import { NavProps } from '../../types'
import theme from '../../style/theme'

const bgImage = require('../../../assets/collage.png')

export default ({ navigation }: NavProps) => (
  <ImageBackground
    source={bgImage}
    style={s.background}
  >
    <View style={s.inner} >
      <Logo width={100} height={100 * 127 / 220}/>
      <View>
        <ButtonPlus mode="contained" onPress={() => navigation.navigate('LoginScreen')}>Login</ButtonPlus>
        <ButtonPlus mode="outlined" color={theme.colors.accent} style={s.button} onPress={() => navigation.navigate('RegisterScreen')}>Sign Up</ButtonPlus>
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
    borderColor: theme.colors.accent,
    borderWidth: 1
  }

})

