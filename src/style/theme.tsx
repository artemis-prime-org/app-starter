import { DarkTheme } from 'react-native-paper'

export default {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
//    primary: "#fac54c",   // imdb yellow,
    primary: "#ff9e3e",   // logo yellow,
    secondary: "#0099ff", // logo blue
    error: '#f13a59',
    //secondary: "#5fb8ff", // desaturaed logo blue per Material recommendations for dark mode,
  },
  spacing: (n: number) => (32 * n),
}

