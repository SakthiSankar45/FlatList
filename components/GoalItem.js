import { StyleSheet, View, Text, Pressable} from "react-native";

function GoalItem(itemList) {

    return(
        <Pressable android_ripple={{color: 'red'}} onPress={itemList.onDeleteItem.bind(this, itemList.id)} style = {({pressed}) => 
            pressed && styles.pressedItem }>

            <View style = {styles.goalItems}>
                <Text >{itemList.text} </Text>
             </View>
        </Pressable>
    )
}

export default GoalItem;

const styles = StyleSheet.create({

    goalItems:{
        margin: 8,
        borderRadius: 6,
        padding: 8,
        backgroundColor: 'purple'
      },
      pressedItem:{
        opacity: 0.5
      }
});