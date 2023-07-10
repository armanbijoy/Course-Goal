
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import Goalitem from './compenents/Goalitem';
import Goalinput from './compenents/Goalinput';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setcourseGoals] =  useState([])

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }

  function addgoalHandler (){
    setcourseGoals([...courseGoals, enteredGoalText])
  }


  return (
    <View style={styles.appContainer}>

      <Goalinput onAddGoal={addgoalHandler} onInputGoal={goalInputHandler}/>


      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={item=>{
        return (
         <Goalitem text={courseGoals}/>
        )
      }}/>
       
      
      </View>
      
    </View>
  );
}

 
const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16
    
  },
  
 
  goalsContainer:{
    flex:3
  },
 
 

});
