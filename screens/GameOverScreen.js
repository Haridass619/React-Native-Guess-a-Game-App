import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Titletext from '../components/TitleText';
import { Image } from 'react-native';
import Bodytext from '../components/Bodytext';
import MainButton from '../components/MainButton';
import color from '../constants/color';

const GameOverScreen = ({ rounds, userChoice, restartGame }) => {

  let avilableDeviceWidth = Dimensions.get('window').width;
  let avilableDeviceHeight = Dimensions.get('window').height;
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Titletext>Game Over hari</Titletext>
        <View style={{
          ...styles.imageContainer,
          ...{
            width: avilableDeviceHeight * 0.4,
            height: avilableDeviceHeight * 0.4,
            borderRadius: (avilableDeviceWidth * 0.7) / 2,
            marginVertical: avilableDeviceWidth / 30,
          }
        }}>
          <Image
            source={require('../assets/Success.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={{
          ...styles.resultCondainer,
          ...{
            marginVertical:avilableDeviceHeight /60
          }
        }}>
          <Bodytext style={styles.resulttext}>
            Your Phone Needed <Text style={styles.higlighttext}>{rounds} </Text>
            round to guess the Number
            <Text style={styles.higlighttext}>{userChoice}</Text>
          </Bodytext>
        </View>
        <MainButton onPress={restartGame}>New Game</MainButton>
      </View>
    </ScrollView>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:10,
  },
  image:{
    width:"100%",
    height:"100%",
  },
  imageContainer:{
    borderWidth:2,
    borderColor:'black',
    overflow:'hidden'
  },
  higlighttext:{
    color:color.primary
  }
})