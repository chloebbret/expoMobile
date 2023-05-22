import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Button, FlatList, Pressable} from 'react-native';
import {useState} from "react";
import ButtonInput from "./ButtonInput";

function TouchableWithoutFeedback(props) {
    return null;
}

export default function App() {

    const [inputValue, setInputValue] = useState('');
    const [objectifs, setObjectifs] = useState(objectif);

    const onPress = () => {
        if (inputValue.length >= 5) {
            setObjectifs([...objectifs, inputValue]) // Adding the value of the input to the array
            setInputValue('') // Resetting the input value
        }
    }

    const deleteObjectif = (objectifToDelete) => {
        setObjectifs(objectifs.filter(objectif => objectif !== objectifToDelete));
    };

  return (
      <View style={styles.container}>
          <Text style={styles.bold}>Bonjour ! {"\n"}</Text>

          <FlatList
              data={objectifs}
              renderItem={({item}) => (
                  <View style={styles.listeRow}>
                      <Text style={styles.liste}>{item}</Text>
                      <Text onPress={() => deleteObjectif(item)}>
                          ❌
                      </Text>
                  </View>
              )}
              keyExtractor={(item, index) => index.toString()}
          />
          <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bold: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 300,
    color: "lightblue",
  },

  liste: {
      color: "lightblue",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 17,
      maxWidth: 300
  },

  row: {
      flexDirection: "row"
  },

  listeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  delete: {
    color: 'red',
    marginLeft: 5,
  },
});

const objectif = [
    "Faire les courses",
    "Aller à la salle 3 fois par semaine",
    "Perdre 5kg",
    "Apprendre un nouveau langage",
]

