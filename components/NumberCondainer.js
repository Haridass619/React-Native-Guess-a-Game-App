import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../constants/color'

const NumberCondainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

export default NumberCondainer

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:color.accent,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        textAlign:"center",
        justifyContent:"center"
    },
    number:{
        color:color.accent,
        fontSize:22,
    }

})