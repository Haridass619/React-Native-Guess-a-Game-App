import React, { useRef, useState,useEffect } from 'react';
import { Alert, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Titletext from '../components/TitleText';
import NumberCondainer from '../components/NumberCondainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import Ionicons from "react-native-vector-icons/Ionicons"
import Bodytext from '../components/Bodytext';


const generateRandom =(min,max,exlude) =>{
  min = Math.ceil(min);
  max = Math.ceil(max);

  const rndNum =Math.floor(Math.random()*(max-min)) + min;

  if(rndNum === exlude){
    return generateRandom(min,max,exlude);
  }
  else{
    return rndNum
  }
}

const renderListItem =(guess,index) =>{
  return(
    <View key={index} style={styles.listItem}>
      <Bodytext>#{index}</Bodytext>
      <Bodytext>{guess}</Bodytext>
    </View>
  )
}

const GameScreen = ({userChoice,gameOverHandler}) => {

const initialGuess = generateRandom(1,100,userChoice);

const [currentGuess, setCurrentGuess] = useState(initialGuess)
const [pastGuess, setPastGuess] = useState([initialGuess.toString()])

const currentLow = useRef(1);
const currentHigh = useRef(100);

useEffect(() => {
  if(currentGuess === userChoice){
    gameOverHandler(pastGuess.length);
  }
},[currentGuess,userChoice])


const nextGuessHandler = (direction) =>{
  if((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)){
    Alert.alert("Don't Lie","you know that is wrong...",
      [
        {
          text:'Sorry',
          style:"cancel",
        }
      ]);
      return;
  }
  if(direction === 'lower'){
    currentHigh.current = currentGuess;
  }
  else{
    currentLow.current =currentGuess;
  }
  const nextNumber = generateRandom(currentLow.current,currentHigh.current,currentGuess)
  setCurrentGuess(nextNumber);

  setPastGuess((currPastGuesses)=>[nextNumber.toString(),...currPastGuesses])
}




  return (
    <View style={styles.screen}>
    <Titletext>Opponent's Guess</Titletext>
    <NumberCondainer>{currentGuess}</NumberCondainer>
    <Card style={styles.buttonCondainer}>
      <MainButton onPress={()=>nextGuessHandler('lower')}>
        <Ionicons name="remove" size={24} color="white" />
      </MainButton>
      <MainButton onPress={()=>nextGuessHandler('greater')}>
        <Ionicons name="add" size={24} color="white" />
      </MainButton>
    </Card>

    <View style={styles.listContainer}>
      <ScrollView contentContainerStyle={styles.list}>
      {pastGuess.map((guess,index)=>renderListItem(guess,pastGuess.length - index))}

      </ScrollView>

      {/* <FlatList 
        keyExtractor={item => item}
        data={pastGuess}
        renderItem={itemData =>
        renderListItem(itemData.item,pastGuess.length)}
        contentContainerStyle={styles.list}
      /> */}
    </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding:10,
    alignItems:"center",
  },
  buttonCondainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:200
  },
  listItem:{
    borderColor:"#ccc",
    borderWidth:1,
    padding:15,
    marginVertical:10,
    backgroundColor:"white",
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%"

  },
  listContainer:{
    flex:1,
    width:'60'
  },
  list:{
    flexGrow:1,
    justifyContent:"flex-end"
  }
})