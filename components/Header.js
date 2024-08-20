import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Titletext from './TitleText'
import Colors from '../constants/color'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
     <Titletext style={styles.title}>{title}</Titletext>
     
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

  header:{
      backgroundColor:Colors.primary,
    width:"100%",
    height:60,
    padding:20,
    alignItems:"center",
    justifyContent:"center",

  },
  title:{
    color:"#fff",
    // fontFamily:"OpenSans-Bold",
  }
})