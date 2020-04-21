import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Header } from './components/Header'; 
import { AddToDo } from './components/AddToDo'; 
import { ListItem } from './components/ListItem'; 


export default function App() {

const [data, setData] = useState([])

const addTodo = (val) => {
setData((prev) => {
 return [
   {
     id: Date.now().toString(), 
     title: val
     },
  ...prev
]
})
}

const deleteToDo = (id) => {
  setData((prev) =>{
    return prev.filter((t) => t.id !== id)
  })
}

  return (
    <View style={styles.container}>
    <Header></Header>
      <View style={styles.main}>
    {
      data.map((i, index)=> <ListItem  tvyal={i} key={index} jnjel={deleteToDo} />)
    }
    
      </View>
      <AddToDo avelacnel={addTodo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

    main: {
    height: '75%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#4b0082',
  },


});
