
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';


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
          <View>
          {courseGoals.map((goal)=> <Text style={styles.goalItem} key={Math.random()}>{goal}
          </Text>)}
            </View>
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
  goalItem:{
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
    padding:10,
    color: 'white'
  },
 

});
