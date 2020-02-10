

import React from 'react'
import { StatusBar } from 'react-native'
import { Provider as MobxProvider } from 'mobx-react'

import { Provider as PaperProvider } from 'react-native-paper'
import { Asset } from 'expo-asset'
import { AppLoading } from 'expo'

import Router from './src/screens/Routes'
import stores from './src/stores'
import theme from './src/style/theme'

export default class App extends React.Component {

  state = {
    isReady: false,
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }

    return ( 
      <MobxProvider store={stores}>
        <PaperProvider theme={theme}>
          <StatusBar translucent='true' barStyle="light-content" />
          <Router /> 
        </PaperProvider>
      </MobxProvider>
    )
  }

  async _cacheResourcesAsync() {
    const images = [
      require('./assets/collage.png'),
      //require('./assets/esx-logo.svg'),
      require('./assets/esx-splash.png')
    ]

//    library.add(faChevronLeft)

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync()
    }) 
    return Promise.all(cacheImages)
  }
}