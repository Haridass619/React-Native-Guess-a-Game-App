import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bodytext = ({children,style}) => {
  return (
   
      <Text style={{...styles.text,...style}}>{children}</Text>
   
  )
}

export default Bodytext

const styles = StyleSheet.create({
    text:{
        fontWeight:"900",
        fontSize:24
    }
})