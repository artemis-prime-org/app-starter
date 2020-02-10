import { DarkTheme } from 'react-native-paper'

export default {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#fac54c",  // logo yellow,
    secondary: "#0099ff",
    error: '#f13a59',
  },
  spacing: (n) => (32 * n),

}

    //secondary: "#5fb8ff", // desaturaed logo blue per Material recommendations for dark mode,
