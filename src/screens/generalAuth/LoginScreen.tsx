import React, { useState } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  KeyboardAvoidingView,
} from 'react-native'


import { 
  ButtonPlus, 
  TextInputPlus, 
  TextLink, 
  USPhoneNumberInput,
} from '../../components'

import theme from '../../style/theme'
import { emailValidator, passwordValidator } from '../../util/validate'
import { NavProps } from '../../types'

export default ({ navigation }: NavProps) => {

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const _onLoginPressed = () => {
    
    /*
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)

    
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    */

    navigation.navigate('Dashboard')
  }

  return (
    <KeyboardAvoidingView style={s.inner} behavior="position">
      <USPhoneNumberInput 
        label="Phone Number"
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
      <View style={s.forgotPassword}>
        <TextLink onPress={() => navigation.navigate('ForgotPasswordScreen')} textStyle={s.label}>Forgot your password?</TextLink>
      </View>
      <ButtonPlus mode="contained" onPress={_onLoginPressed}>Login</ButtonPlus>
      <View style={s.row}>
        <Text style={s.label}>Don’t have an account?</Text>
        <TextLink onPress={() => navigation.navigate('RegisterScreen')} textStyle={s.link}>Sign up</TextLink>
      </View>
    </KeyboardAvoidingView>
  )
}

const s = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  inner: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(4),
  },
  logo: {
    marginBottom: theme.spacing(1)
  },
  label: {
    color: theme.colors.accent,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
    paddingLeft: 4
  },
})

