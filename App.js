import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Header from './components/Header';

const App =() => {
  const [usernumber, setUsernumber] = useState();
  const [guessround, setGuessround] = useState(0);

  const startGameHandler = selectedNumber =>{
    setUsernumber(selectedNumber);
  }

  const gameOverHandler =(numOfGuesses) =>{
    setGuessround(numOfGuesses)
  }

  const restartGame =()=>{
    setGuessround(0);
    setUsernumber(null);
  }

  let content = <StartGameScreen startGameHandler={startGameHandler} />

 

  if(usernumber && guessround === 0){
    content = <GameScreen userChoice={usernumber} gameOverHandler={gameOverHandler} />
  }
  else if(guessround > 0){
    content = <GameOverScreen rounds={guessround} userChoice={usernumber} restartGame={restartGame} />
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header style={styles.header} title="Guess a Number" />

      {content}
    
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
export default App
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: "center",
    // justifyContent: "flex-start",
    marginTop:50,
    
    // fontFamily:"OpenSans-Bold"
  },
  header:{
    alignItems : "center",
    textAlign:"center",
    backgroundColor:"red",
    color:"#fff"
  }
});
