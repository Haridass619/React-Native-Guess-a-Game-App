import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children,style}) => {
  return (
    <View style={{...styles.card,...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
        // borderColor:"gray",
        borderWidth:1,
        // shadowColor:"black",
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:9,
        backgroundColor:"white",
        padding:20,
        borderRadius:10,
    }
})