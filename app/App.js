import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
       <View style={styles.topchild1}>
       <View style={styles.grandchild}>
       <Text style={styles.appTitle}>Tonight</Text>
        <Text style={styles.appDate}>Friday,April 17</Text>
       </View>
       </View>
       <View style={styles.topchild2}>
       <View style={styles.grandchild2}>
        <Image style={styles.logo} source={require('./assets/facebook.png')} />
       </View>
       </View>
       </View> 

      <View style={styles.mid}>
      <View style={styles.midchild1}>
      <View style={styles.button}>
      <Text style={styles.foodItem}>Chocolate</Text>
      </View>
      <View style={styles.button}>
      <Text style={styles.foodItem}>Ice Cream</Text>
      </View>
      <View style={styles.button}>
      <Text style={styles.foodItem}>Strawberry</Text>
      </View>
      </View>

       <View style={styles.midchild2}>
         <View style={styles.wrapperForRadius}>
       <ImageBackground style={styles.halfsircle} source={require('./assets/choco.jpeg')}>
       <View style={styles.halfsirclechild1}>
        <View style={styles.halfsirclechild3}>
        <Text style={styles.percent}>30%</Text>
         <Text style={styles.energy}>Energy</Text>
        </View>
        </View>
        <View style={styles.halfsirclechild2}>
        <Text style={styles.choco}>Chocolate</Text>
        <Text style={styles.littlechoco}>Bon appetit</Text>
        </View>
       </ImageBackground>
      </View>
       </View> 

     </View>
      <View style={styles.bottom}>
     <View style={styles.bottomchild}>
     <Image style={styles.icon} source={require('./assets/chat.png')} />
     </View>
      <View style={styles.bottomchild}>
      <Image style={styles.icon} source={require('./assets/gear.png')} /></View>
       <View style={styles.bottomchild}>
       <Image style={styles.icon} source={require('./assets/heart.png')} />
       </View>
     </View>

     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

 top: {
   flex: 2,
   flexDirection: 'row',
 },

topchild1: {
width: '70%',
height: '100%',
alignContent: "center",
alignItems: 'center',
},

grandchild: {
width: '60%',
height: '50%',
borderRadius: '15px',
marginTop: '50px',
marginRight: '50px',
},

appTitle:{
  fontSize: 30,
  color: 'white',
},

appDate:{
  color: "white",
},


topchild2: {
width: '30%',
height: '100%',
alignContent: "center",
alignItems: 'center',
},

grandchild2: {
width: '60%',
height: '65%',
borderRadius: '15px',
marginTop: '15px',
alignContent: "center",
alignItems: 'center',

},

logo:{
width: 40,
height: 40,
},

 mid: {
  flex: 5,
 },

midchild1: {
width: '100%',
height: '20%',
backgroundColor: 'lightgray',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
},

button: {
width: '30%',
height: '45%',
backgroundColor: 'black',
margin: '5px',
borderRadius: '20px',
justifyContent: 'center',
alignItems: 'center',
},

foodItem:{
  color: "white",
  textTransform: "lowercase",
},

midchild2: {
flex: 3,
justifyContent: 'center',
alignItems: 'center',
},

wrapperForRadius:{
width: '80%',
height: '91%',
borderRadius: 20,
overflow: "hidden",

},

halfsircle: {
width: '100%',
height: '100%',
borderRadius: '20px',

},

halfsirclechild1: {
flex: 4,
borderTopStartRadius: '15px',
borderTopEndRadius: '15px',
},

halfsirclechild3: {
width: '20%',
height: '40%',
marginTop: '15px',
marginLeft: '10px',
borderRadius: '10px',
backgroundColor: 'black',
justifyContent: 'center',
alignItems: "center",
},

percent: {
  color: 'white',
  fontWeight: 'bold',
},

energy: {
  color: 'white',
},

halfsirclechild2: {
flex: 2,
backgroundColor: 'rgba(0,0,0,0.5)',
borderBottomStartRadius: '15px',
borderBottomEndRadius: '15px',
},

choco: {
  color: "white", 
  fontSize: 28,
  fontWeight: "bold",

},

littlechoco: {
  color: "white", 
  fontSize: 15,
},

bottom: {
flex: 1,
borderRadius: '15px', 
justifyContent: 'center',
alignItems: 'center',
flexDirection: 'row',
 },

 bottomchild: {
   width: '15%',
   height: '45%',
    margin: '15px',
   borderRadius: '20px',
   backgroundColor: 'lightgray',
   justifyContent: 'center',
alignItems: 'center',

 },

icon:{
width: 20,
height: 20,
},

});
