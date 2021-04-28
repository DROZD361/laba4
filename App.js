import React, { useState } from 'react';
import { Alert, StyleSheet, Button, TextInput, View } from 'react-native';
import NavBar from './components/NavBar'


export default function App() {
  const [value, setValue] = useState('')

  return (
    <View style={styles.container}>
      <NavBar title="Radius" />  
      <View style={{margin: 15}}>  
        <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Введите радиус окружности"/>
        <Button title="Расчитать" onPress={() => {
          let s = Math.PI * parseFloat(value) * parseFloat(value)
          Alert.alert('Ваша площадь равна ' + s)
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, input: {
    padding: 10,
    borderBottomColor: '#3949ab',
    borderBottomWidth: 2,
    width: '100%',
    marginBottom: 20
}
});
