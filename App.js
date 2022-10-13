import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredText, setEnteredText] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = (enterText) => {
    setEnteredText(enterText);
  };

  const addGoalHandler = () => {
    setCourseGoal(prev => [...prev, enteredText]);
    setEnteredText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput style={styles.textInput} placeholder='Input your goal!' onChangeText={goalInputHandler} value={enteredText} />
        <Button title='Add goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        {
          courseGoal.map((v, i) => {
            return <Text key={i}>{v}</Text>
          }) 
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 80,
      paddingHorizontal: 16,
      flex: 1,
    },

    inputArea: {
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
      padding: 8,
    },

    listContainer: {
      flex: 5,
    }
});