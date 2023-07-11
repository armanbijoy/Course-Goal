
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import Goalitem from './compenents/Goalitem';
import Goalinput from './compenents/Goalinput';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setcourseGoals] =  useState([])
  const [modalVisible, setModalVisible]=useState(false)

  function startAddGoalHandler(){
    setModalVisible(true)
  }

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }

  function addgoalHandler (){
    setcourseGoals([...courseGoals, enteredGoalText])
  }

  function deleteGoalHandler(id){
   setcourseGoals(courseGoals=>{
    return courseGoals.filter((goal)=> goal.id !== id)
   })
  }


  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color={'#5c0acc'} onPress={startAddGoalHandler}/>
       
       <Goalinput visible={modalVisible} onAddGoal={addgoalHandler} onInputGoal={goalInputHandler}/> 
     


      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={item=>{
        return (
         <Goalitem id={courseGoals.id} text={courseGoals} onDeleteItem={deleteGoalHandler}/>
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
