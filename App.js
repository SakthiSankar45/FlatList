import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [setOfGoals, setSetOfGoals] = useState([]);

function buttonAction(txtFieldText){

  setSetOfGoals((currentGoals) => [...currentGoals, {text: txtFieldText, id: Math.random().toString()}]);

}

function onDeleteAction(id){
  
  setSetOfGoals((currentGoals) => {

    return currentGoals.filter ((goal) => goal.id !== id);
  });
}

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal = {buttonAction}/>
      <View style = {styles.goalsContainer}>
        <FlatList data={setOfGoals} renderItem={(itemData) => {
          return(
            <GoalItem text = {itemData.item.text} id={itemData.item.id} onDeleteItem = {onDeleteAction}/>
            );
        }}

        keyExtractor={(item,index) => {
          return item.id;
        }}
         alwaysBounceVertical={false}/>
          
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer:{
    flex: 4
  }
  
});

