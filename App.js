import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    
    if(imc < 18.6) {
      alert('Você está abaixo do peso! ' + imc.toFixed(2));
    } else if(imc >= 18.6 && imc < 24.9) {
      alert('Peso Ideal! ' + imc.toFixed(2));
    } else {
      alert('Você está um pouco acima do peso ' + imc.toFixed(2));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu App</Text>

      <TextInput 
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso) }
      placeholder="Peso (kg)"
      keyboardType="numeric"
      />

      <TextInput 
      style={styles.input}
      value={altura}
      onChangeText={ (altura) => setAltura(altura) }
      placeholder="Altura (cm)"
      keyboardType="numeric"
      />

      <TouchableOpacity style={styles.butao} onPress={handleSubmit}>
        <Text style={styles.butaoText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  titulo:{
    textAlign: 'center',
    marginTop: 220,
    fontSize: 30,
  },
  input:{
    backgroundColor: '#121212',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#fff',
    fontSize: 20,
  },
  butao:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    padding: 10,
    backgroundColor: '#9932cc',
  },
  butaoText:{
    color: '#fff',
    fontSize: 25,
  }
})