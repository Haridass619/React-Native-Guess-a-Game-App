import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Titletext = ({children,style}) => {
  return ( 
  <Text style={{...styles.text,...style}}>{children}</Text>
  
  )
}

export default Titletext

const styles = StyleSheet.create({
    text:{
        fontSize:18,
        // fontFamily:'OpenSans-Bold',
    }
})