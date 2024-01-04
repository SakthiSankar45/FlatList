import { StyleSheet, View, Text, TextInput, Button} from "react-native";
import { useState } from 'react';

function GoalInput(items) {

    const [txtFieldText, setTextFieldText] = useState('');

    function txtFieldAction(enteredText){

        setTextFieldText(enteredText);
    }

    function onButtonAction(){

        items.onAddGoal(txtFieldText);
        setTextFieldText('');
    }

    return(
        <View style = {styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Set Your Goal!..' onChangeText={txtFieldAction} value={txtFieldText}></TextInput>
        <Button title='Add Goal' onPress={onButtonAction}/>
      </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
      }
});