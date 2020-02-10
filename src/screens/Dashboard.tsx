import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'

import { 
  Image, 
  View, 
  StyleSheet, 
  ScrollView, 
  Text, 
  TouchableOpacity 
} from 'react-native'

import {
  Modal, 
  Portal,
  Button

} from 'react-native-paper'

import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';


import { Row, Grid } from "react-native-easy-grid"

import { Paragraph } from '../components'
import { NavProps } from '../types'
import theme from '../style/theme'

/*
export default inject('store')(observer(({ navigation, store }: NavProps) => {

  return (
    <FlatList 
      data={store.movieStore.movies}
      renderItem={(movie) => (<MovieCard movie={movie}/>)}
      keyExtractor={movie => movie.movieSlug}
      numColumns={3}
    />
  )
}))
*/
/*
export default inject('store')(observer(({ navigation, store }: NavProps) => {

  return (
    <ScrollView contentContainerStyle={s.inner}>
      {store.movieStore.movies.map((m, i) => <MovieCard movie={m} key={i} />)}
    </ScrollView>
  )
}))
*/
/*
export default inject('store')(observer(({ navigation, store }: NavProps) => {

  return (
    <FlatGrid
      itemDimension={130}
      items={store.movieStore.movies}
      renderItem={(movie) => (<MovieCard movie={movie}/>)}
      spacing={10}
      style={s.gridView}
    />
  )
}))
*/
/*
      {store.movieStore.filteredMovies.map((m, i) => (
        <MovieCard movie={m} key={i} />
      ))}
*/
//          .map((m, i) => <MovieCard movie={m} key={i} />)}
 
export default inject('store')(observer(({ navigation, store }: NavProps) => {

  const [activeMovie, setActiveMovie] = useState(null)


  let setsOfThree = []
  let currentArray = undefined
  for (let i = 0; i < store.movieStore.movies.length; i++) {
    if (i % 3 == 0) {
      currentArray = []
      setsOfThree.push(currentArray)
    }
    currentArray.push(store.movieStore.movies[i])
  }

  return (
    <Portal >
    <ScrollView contentContainerStyle={s.inner}>
      <Grid style={s.grid}>
      {setsOfThree.map((three, i) => (
        <Row key={i} style={s.row}>
        {three.map((m, j) => (
          <MovieCard onPress={() => setActiveMovie(m)} movie={m} outerStyle={s.outerStyle} key={j}/>
        ))}
        </Row>
      ))}
      </Grid>
    </ScrollView>
      <Modal visible={activeMovie != null} onDismiss={() => setActiveMovie(null)} contentContainerStyle={s.modalStyle}>
        {activeMovie && (
          <>
            <Image source={{uri: activeMovie.heroImg}} style={{width: 'auto', height: 150}}/>
            <Text style={s.detailTitle} >{activeMovie.name}</Text>
            <Text style={s.detailStatusOuter} ><Text style={s.detailStatusLabel} >Status: </Text>{activeMovie.trading ? 'Trading' : 'Funding'}</Text>
            <Paragraph style={s.description} >{activeMovie.shortDescription}</Paragraph>
            <View style={s.buttonsOuter}>
              <IconButton buttonStyle={s.detailButton} onPress={() => setActiveMovie(null)} icon={<FontAwesome name="info-circle" size={25} />} />
              <IconButton buttonStyle={s.detailButton} onPress={() => setActiveMovie(null)} icon={<Ionicons name="md-stats" size={25} />} />
              <IconButton buttonStyle={s.detailButton} onPress={() => setActiveMovie(null)} icon={<MaterialIcons name="favorite" size={25} />} />
            </View>
            <IconButton buttonStyle={s.tradeButton} textStyle={s.tradeText} onPress={() => setActiveMovie(null)} icon={<FontAwesome name="dollar" size={25} style={s.tradeIcon}/>} >Trade</IconButton>
          </>
        )}
      </Modal>
    </Portal>
  )
}))


const IconButton = ({icon, buttonStyle, onPress, children, textStyle}) => {
   
  return (
    <Button style={buttonStyle} onPress={onPress} >
      {icon}{children && <Text style={textStyle}>{children}</Text>}
    </Button>
  )
}


const MovieCard = ({movie, onPress, outerStyle}) => {
//  const heightStyle = (height) ? { height: height, width: 'auto' } : {}
  //console.log(movie.posterImg)

  return (
    <TouchableOpacity onPress={onPress} style={outerStyle}>
      <Image source={{uri: movie.posterImg}} style={{width: 100, height: 120, marginRight: 5}} />
    </TouchableOpacity>
  )
}



const s = StyleSheet.create({
  

  inner: {
    paddingTop: theme.spacing(3),
    flex: 1,
    width: '100%',
    alignItems: 'center',
    //flexWrap: 'wrap',
    justifyContent: 'flex-start',
    //paddingBottom: theme.spacing(4),
    //padding: theme.spacing(0.3)
  },

  grid: {
    justifyContent: 'flex-start',
  },
  row: {
    margin: 0,
    marginBottom: 5,
    //alignItems: 'stretch',
    height: 120
  },
  outerStyle: {

  },
  modalStyle: {
    top: 0,
    left: '10%',
    width: '80%',
    height: 425,
    backgroundColor: theme.colors.background,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d6d7da',
    //flex: 1,
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    paddingLeft: 16,
    paddingRight: 16,
  },

  detailTitle: {
    color: '#eee',
    paddingTop: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  detailStatusOuter: {
    color: '#ddd',
    textAlign: 'center',
  },
  detailStatusLabel: {
    color: theme.colors.primary
  },

  description: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 16,
    color: '#ddd',
  },
  buttonsOuter : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  detailButton: {
    //marginRight: 10,
    //width: 40,
    //height: 40,
    //marginRight: 10,
    borderColor: theme.colors.primary,
    borderRadius: 20,
    borderWidth: 1,
    width: 70
  },
  icon: {
    position: 'relative',
    left: 15,
    //marginRight: 5,
    padding: 0
  },
  tradeButton: {
    backgroundColor: theme.colors.primary,
    color: '#eee',
  },
  tradeText: {
    color: '#eee',
    textTransform: 'none'
  },
  tradeIcon: {
//    justifyContent:  'center',
    color: '#eee',
    marginRight: 4,
    height: 15,
  }

})

