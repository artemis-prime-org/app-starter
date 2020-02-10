import React, { useState } from 'react'

import { 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  KeyboardAvoidingView
 } from 'react-native'

import { 
  Button, 
  TextInput, 
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

      <Button mode="contained" onPress={_onSendPressed} style={s.button}>
        Send Reset Instructions
      </Button>

      <TouchableOpacity
        style={s.back}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={s.label}>← Back to login</Text>
      </TouchableOpacity>
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

