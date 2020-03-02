

import React from 'react'
import { StatusBar, Image } from 'react-native'
import { Asset } from 'expo-asset'
import { AppLoading } from 'expo'
import { Provider as MobxProvider } from 'mobx-react'
import { Provider as PaperProvider } from 'react-native-paper'

import Navigator from './src/screens/Navigator'
import stores from './src/stores'
import theme from './src/style/theme'

import { NavigationContainer } from '@react-navigation/native'


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

      // :aa TODO ... this is a hack to pass the Paper theme in, but it sets a few good defaults... we should create a proper translation layer
      // there exist two similar but different theming systems: react-navigation and react-native-paper.
      // This is a hack that passes one in to where the other is expected.  

    return ( 
      <MobxProvider store={stores}>
        <PaperProvider theme={theme}>
          <StatusBar translucent='true' barStyle="light-content" />
          <NavigationContainer theme={theme}>
            <Navigator />
          </NavigationContainer>
        </PaperProvider>
      </MobxProvider>
    )
  }

  async _cacheResourcesAsync() {
    let images = [
      require('./assets/collage.png'),
//      require('./assets/esx-splash.png')
    ]
    stores.movieStore.movies.map(movie => {
      images.push(movie.posterImg)
    }) 
    
    const imagesCached = cacheImages(images)
    await Promise.all(imagesCached)
  }
}

const cacheImages = (images) => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } 
      return Asset.fromModule(image).downloadAsync()
  })
}

