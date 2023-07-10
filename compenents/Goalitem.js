import {StyleSheet} from 'react-native'
import { View, Text } from 'react-native'


const Goalitem = props =>{


    return(
        <View>
        {props.text.map((goal)=> <Text style={styles.goalItem} key={Math.random()}>{goal}
        </Text>)}
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
      }
})