import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export const ListItem = (props) => {
  return (
     <View style={styles.listItem}> 
      <Text style={styles.listItemText}>{props.tvyal.title}</Text>
      <Button color='#4b0082' title="x" onPress={() => props.jnjel(props.tvyal.id)} />
      </View>
  )
}

const styles = StyleSheet.create({
listItem: {
width: '80%',
height: 45,
borderWidth: 4,
borderColor: 'white',
backgroundColor: 'white',
marginVertical: 20,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
paddingLeft: 10,
},

 listItemText:{
color: 'black',
fontSize: 15,
 },


});
