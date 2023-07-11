import {StyleSheet} from 'react-native'
import { View, Text, Pressable } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const Goalitem = props =>{


  

    return(
   
        <View>
            <Pressable android_ripple={{color: '#dddddd'}} onPress={props.onDeleteItem.bind(this, props.id)}
          
            > 
        {props.text.map((goal)=> <Text style={styles.goalItem} key={Math.random()}>{goal}
        </Text>)}
            </Pressable>
        </View>
    
    )
}

export default Goalitem

const styles = StyleSheet.create({

    goalItem:{
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#5e0acc',
        padding:10,
        color: 'white'
      },
      pressedItem:{
        opacity: 0.5
      }
})