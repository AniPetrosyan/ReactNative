import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, Alert } from 'react-native';

export const AddToDo = (props) => {


const [val, setVal] = useState("")

const addValue = () => {
  if(val.trim()){
props.avelacnel(val)
setVal("")
}

else{
Alert.alert(
      "Error!",
      "You must write something",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
}
}


  return (
    <View style={styles.addTodo}>
      <TextInput value={val} style={styles.input} onChangeText={setVal} />
      <Button onPress={addValue} title="ADD" color="#4b0082" style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  addTodo: {
    height: '15%',
    width: '100%',
   backgroundColor: '#9370db',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input: {
    width: '75%',
    height: 40,
    borderWidth: 4,
    borderColor: 'black',
    padding: 7,
  },

});
