import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";


const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    color: "lightblue",
    borderColor: "lightblue",
    width: 230,
    justifyContent: "center",
    borderRadius: 10,
    fontSize: 17,
  },

  gap: {
    gap: 10,
  },

  button: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center'
  },

  marginBottom: {
    marginBottom: 20
  }
});

const ButtonInput = props => {
  return (
    <View style={[styles.row, styles.marginBottom, styles.gap]}>
      <TextInput placeholder="Ajouter" style={styles.input} value={inputValue}
                 onChangeText={text => setInputValue(text)}/>
      <Pressable style={styles.button} onPress={onPress}>
        <Text>ADD</Text>
      </Pressable>
    </View>
  )
}

export default ButtonInput;
