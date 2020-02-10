import React from 'react'
import { View, StyleSheet } from 'react-native'
import { inject, observer } from 'mobx-react'

import {  Button, Paragraph } from '../components'
import { NavProps } from '../types'
import theme from '../style/theme'


export default inject('store')(observer(({ navigation, store }: NavProps) => {

  return (
    <View style={s.inner} >
      <Paragraph>
        Your amazing app starts here. Open you favourite code editor and start
        editing this project. {store.movieStore.movies.length} movies!
      </Paragraph>
      <Button mode="outlined" onPress={() => navigation.navigate('AuthScreen')}>
        Logout
      </Button>
    </View>
  )
}))


const s = StyleSheet.create({
  
  inner: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    paddingBottom: theme.spacing(4),
    padding: theme.spacing(1)
  },

  button: {
    borderColor: theme.colors.secondary
  }
})

