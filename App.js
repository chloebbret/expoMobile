import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Button, FlatList, Pressable} from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
          <Text style={styles.bold}>Bonjour ! {"\n"}</Text>
          <View style={styles.row}>
              <TextInput placeholder="Ajouter" style={styles.input}/>
              {/*<Button title="ADD" color={"powderblue"}></Button>*/}
              <Pressable style={styles.button}>
                  <Text>ADD</Text>
              </Pressable>
          </View>
          <FlatList
              // style={styles.input}
              data={sampleGoals}
              renderItem={({item}) => <Text style={styles.liste}>{item}</Text>}
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

  input: {
      height: 50,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color: "lightblue",
      marginBottom: 50,
      borderColor: "lightblue",
      width: 230,
      justifyContent: "center",
      borderRadius: 10,
      fontSize: 17,
  },

  button: {
      backgroundColor: 'lightblue',
      borderColor: "lightblue",
      alignItems: "center",
      borderRadius: 5,
      height: 40,
      width: 40,
      justifyContent: "center"
  },

  liste: {
      color: "lightblue",
      // backgroundColor: "powderblue",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 17,
      borderRadius: 40,
  },

  row: {
      flexDirection: "row",
  }
});

const sampleGoals = [
    "Faire les courses",
    "Aller à la salle 3 fois par semaine",
    "Perdre 5kg",
    "Apprendre un nouveau langage",
]

