import { View, TextInput, Button, StyleSheet } from "react-native"

const Goalinput = (props)=>{

    return(
    
    <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Text Goal!' onChangeText={props.onInputGoal}/>
        <Button title='Add Goal' onPress={props.onAddGoal}/>
     
    </View>
      
      )


}
export default Goalinput

const styles = StyleSheet.create({
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

})