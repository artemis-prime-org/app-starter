import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'

import { Image, View, StyleSheet, FlatList, ScrollView, Text, TouchableOpacity } from 'react-native'
import {
  Card,
  Title,
  Modal, 
  Portal
} from 'react-native-paper'

//import { FlatGrid } from 'react-native-super-grid'
import { Col, Row, Grid } from "react-native-easy-grid"

import { Paragraph, AsyncImage } from '../components'
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

  const [modalVisible, setModalVisible] = useState(false)


  let setsOfThree = []
  let currentArray = undefined
  for (let i = 0; i < store.movieStore.movies.length; i++) {
    if (i % 3 == 0) {
      currentArray = []
      setsOfThree.push(currentArray)
    }
    currentArray.push(store.movieStore.movies[i])
  }

  //console.log(JSON.stringify(setsOfThree))


  return (
    <Portal >
    <ScrollView contentContainerStyle={s.inner}>
      <Grid style={s.grid}>
      {setsOfThree.map((three, i) => (
        <Row key={i} style={s.row}>
        {three.map((m, j) => (
          <MovieCard onPress={() => setModalVisible(true)} movie={m} outerStyle={s.outerStyle} key={j}/>
        ))}
        </Row>
      ))}
      </Grid>
    </ScrollView>
      <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)} contentContainerStyle={s.modalStyle}>
        <Text>test</Text>
      </Modal>
    </Portal>
  )
}))


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
    height: '80%',
    backgroundColor: theme.colors.background,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#d6d7da'  }
})

