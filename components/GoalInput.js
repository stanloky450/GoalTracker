import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet,Button, Modal } from 'react-native'

const GoalInput = (props) => {
    const [enterGoal, setEnterGoal] = useState('');

    const enteredGoalHandler = (enteredText) => {
        setEnterGoal(enteredText);
      };

      const addGoalHandler = () => {
        props.onAddGoal(enterGoal)
        setEnterGoal("")
      };
 
    return (
      <Modal visible={props.visible} animationType="slide">
          <View style={styles.inputContainer}>    

            <TextInput placeholder='Enter your goals' style={styles.input} 
              onChangeText={enteredGoalHandler} value={enterGoal} />
      
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button title="Cancel" color="red" style={styles.button} onPress={props.onCancel}/>
                </View>

                <View style={styles.button}>
                  <Button title='Add' onPress={addGoalHandler} />
                </View>

            </View>
        </View>
      </Modal>
    )
 
}
const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      input:{
        width: '80%',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
      },
      button:{
        marginBottom: 20,
        padding: 100,
        borderColor: 'green',
        borderWidth: 5,
      },
      buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
      },
      button:{
        width:'40%'
      }
})

export default GoalInput
