import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> TODO LIST </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: '10%',
    width: '100%',
    backgroundColor: '#9370db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  }

});
