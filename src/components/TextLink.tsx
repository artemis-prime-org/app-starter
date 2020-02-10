
import React from 'react'
import { 
  TouchableOpacity, 
  Text,
  TextStyle, 
  ViewStyle 
} from 'react-native'


interface Props {
  children: React.ReactNode;
  onPress: () => void,
  outerStyle?: ViewStyle,
  textStyle?: TextStyle,
}

export default ({ children, onPress, outerStyle, textStyle }: Props) => (
  <TouchableOpacity onPress={onPress} style={outerStyle}>
    <Text style={textStyle}>{children}</Text>
  </TouchableOpacity>
)