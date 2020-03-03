import { DarkTheme } from 'react-native-paper'


const logoYellow = "#ff9e3e"
const logoBlue = "#0099ff"
const errorRed = '#f13a59'

  // This is the theme format for react-native-paper
  // we're adding a function that creates a theme format for react-navigation
const rnpTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: logoYellow,  
    accent: logoBlue, 

      // extensions
    error: errorRed,
    border: logoYellow,
  },
    // extensions
  spacing: (n: number) => (32 * n),
}

export const reactNavigationTheme = {
  dark: true,
  colors: {
    primary: rnpTheme.colors.primary,
    background: rnpTheme.colors.background,
    card: rnpTheme.colors.surface,
    text: rnpTheme.colors.text,
    border: rnpTheme.colors.border
  }
}

export default rnpTheme

