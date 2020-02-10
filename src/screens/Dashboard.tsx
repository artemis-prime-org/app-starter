import React from 'react';

import { 
  Header, 
  Button, 
  Paragraph, 
} from '../components'

import { NavProps } from '../types'

export default ({ navigation }: NavProps) => (
  <>
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('AuthScreen')}>
      Logout
    </Button>
  </>
)

