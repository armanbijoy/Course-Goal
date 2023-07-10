
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import Goalitem from './compenents/Goalitem';

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

      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Text Goal!' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addgoalHandler}/>
      </View>


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
  inputContainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth:1,
    borderColor: '#cccccc'

  },
  textInput:{
    flex:3,
    borderWidth:1,
    borderColor: '#cccccc',
    width:'70%',
    marginRight:8,
    padding: 8
  },
  goalsContainer:{
    flex:3
  },
 
 

});
