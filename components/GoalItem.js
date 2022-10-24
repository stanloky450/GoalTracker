import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {
  
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem:{
        padding: 10,
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#ccc'
      }
})

export default GoalItem
