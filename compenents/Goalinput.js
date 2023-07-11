import { View, TextInput, Button, StyleSheet, Modal } from "react-native"

const Goalinput = (props)=>{

    return(
    <Modal visible={props.visible} animationType="slide">
    
    <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Text Goal!' onChangeText={props.onInputGoal}/>
        <Button title='Add Goal' onPress={props.onAddGoal}/>
     
    </View>
    <View style={styles.buttonContainer}>
      <Button title="Add Goal" />
      <Button title="Cancel"/>
    </View>
    </Modal>
      
     )


}
export default Goalinput

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent: 'center',
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
      buttonContainer:{
        flexDirection:'row'
      }

})