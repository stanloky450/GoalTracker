/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';

import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';




export default  App  = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  

  const goalHandler = titleGoal => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(),value: titleGoal}]);
    setIsAddMode(false); 
  };

  const goalRemover = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  };

  const onPressCancel = () => {
    setIsAddMode(false);
  };

 return(
  <View style={styles.container}>
    <Button title="Add Goals" onPress={() => setIsAddMode(true)}/>
   
    <GoalInput visible={isAddMode} onAddGoal={goalHandler} onCancel={onPressCancel}/>

    <FlatList keyExtractor={(item, index) => item.id} data={courseGoals}
      renderItem={itemData => (
        <GoalItem id={itemData.item.id} onDelete={goalRemover} title={itemData.item.value}/>
      )}
    />

  </View>
  
 )  
  
}


const styles = StyleSheet.create({
  container:{
    padding:50
  },
  
 
});


