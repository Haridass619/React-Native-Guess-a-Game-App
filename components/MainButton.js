import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from '../constants/color'

const MainButton = ({children,onPress}) => {
  return (
    <View style={styles.buttoncontainer}>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttontext}>{children}</Text>
      </View>

      </TouchableOpacity>
    </View>
  )
}

export default MainButton

const styles = StyleSheet.create({
    buttoncontainer:{
        borderRadius:25,
        overflow:"hidden"
    },
    button:{
        backgroundColor:color.primary,
        paddingHorizontal:12,
        paddingVertical:30,
        borderRadius:30
    },
    buttontext:{
        color:"white",
        fontSize:18,
    }
})