import React, { useState } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  KeyboardAvoidingView 
} from 'react-native'

import { 
  ButtonPlus, 
  TextInputPlus, 
  TextLink
} from '../../components'

import theme from '../../style/theme'
import { NavProps } from '../../types'
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../../util/validate'


export default ({ navigation }: NavProps) => {

  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    navigation.navigate('Dashboard')
  }

  return (
    <KeyboardAvoidingView style={s.inner} behavior="position">
      <TextInputPlus
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInputPlus
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInputPlus
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <ButtonPlus mode="contained" onPress={_onSignUpPressed} style={s.button}>
        Sign Up
      </ButtonPlus>

      <View style={s.row}>
        <Text style={s.label}>Already have an account? </Text>
        <TextLink onPress={() => navigation.navigate('LoginScreen')} textStyle={s.link} >Login</TextLink>
      </View>
    </KeyboardAvoidingView>
  )
}

const s = StyleSheet.create({

  inner: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(4),
  },

  label: {
    color: theme.colors.accent,
  },

  button: {
    marginTop: 24,
  },

  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
