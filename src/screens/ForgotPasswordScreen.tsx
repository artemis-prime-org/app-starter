import React, { useState } from 'react'

import { 
  StyleSheet, 
  KeyboardAvoidingView
 } from 'react-native'

import { 
  Button, 
  TextInput, 
  TextLink, 
} from '../components'

import theme from '../style/theme'
import { emailValidator } from '../util/validate'
import { NavProps } from '../types'

export default ({ navigation }: NavProps) => {
  const [email, setEmail] = useState({ value: '', error: '' });

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    navigation.navigate('LoginScreen');
  };

  return (
    <KeyboardAvoidingView style={s.inner} behavior="position">
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <Button mode="contained" onPress={_onSendPressed} style={s.button}>Send Reset Instructions</Button>
      <TextLink onPress={() => navigation.navigate('LoginScreen')} textStyle={s.label} outerStyle={s.back}>← Back to login</TextLink>
    </KeyboardAvoidingView>
  );
};

const s = StyleSheet.create({
  inner: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(4),
  },

  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
})

