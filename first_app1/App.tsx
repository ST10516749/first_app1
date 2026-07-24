import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my app!</Text>
      <StatusBar style="auto" />
  
      <Text>enter your name:</Text>
      < TextInput placeholder="Jane"/>
      ‹Button title="Add user"/"
  
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b55050',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
