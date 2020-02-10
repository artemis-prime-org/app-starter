import React from 'react'
import { Image, StyleSheet } from 'react-native'


const img = require('../../assets/esx-logo.svg')

export default () => (
  <Image source={img} style={styles.image} />
);

const styles = StyleSheet.create({
    // ratio 890 / 515 from svg source
  image: {
    width: 346,
    height: 200,
    marginBottom: 12,
  },
})

