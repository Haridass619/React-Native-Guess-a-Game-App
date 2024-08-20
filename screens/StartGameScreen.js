import { Button, Dimensions, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'
import Bodytext from '../components/Bodytext'
import Input from '../components/input'
import color from '../constants/color'
import NumberCondainer from '../components/NumberCondainer'
import MainButton from '../components/MainButton'

const StartGameScreen = ({startGameHandler}) => {

 const [enterValue, setEnterValue] = useState("");
 const [confimed, setConfimed] = useState(false);
 const [selectNumber, setSelectNumber] = useState()


const resetInputHandler =()=>{
  setEnterValue("");
  setConfimed(false);
  setSelectNumber("")
}

const conformInputHandler =()=>{
  const chosenNumber = parseInt(enterValue); // 89 change to string '89'
  setConfimed(true);
  setSelectNumber(chosenNumber);
  setEnterValue('');
  Keyboard.dismiss()
}

let confirmedOutput;
if(confimed){
  confirmedOutput =(
    <Card style={styles.summeycontainer}>
      <Text>Your Select</Text>
      <NumberCondainer>{selectNumber}</NumberCondainer>
      <MainButton onPress={()=>startGameHandler(selectNumber)}>Satrt Game</MainButton>
    </Card>
  )
}

  const [buttonWidth, setbuttonWidth] = useState(Dimensions.get('window').width/4);
  return (
    <ScrollView>
     <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback>
            <View style={styles.screen}>
              <Text>Satrt a New Game </Text>
              <Card>
                <Bodytext> Game Start </Bodytext>
                  <Input 
                  blurOnSubmit
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Enter number"
                 keyboardType="numeric"
                 maxLength={2}
                  onChangeText={(text)=>setEnterValue(text)}
                  value ={enterValue}
                />
                 <View style={styles.ButtonCondatiner}>
              <View style={{width:buttonWidth}}>
                <Button title='Reset' color={color.accent} onPress={resetInputHandler} />
              </View>

              <View style={{width:buttonWidth}}> 
                <Button title='Confirm' color={color.primary} onPress={conformInputHandler} />
              </View>

              </View>
              </Card>

            {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding:10,
    alignItems:"center"
  },
  ButtonCondatiner:{
    flexDirection:'row',
    width:'100%',
    justifyContent:"space-between",
    paddingHorizontal:10,
    marginTop:20
  },
  summeycontainer:{
    marginTop:20,
    textAlign:"center",
    alignItems:"center"
  }


})