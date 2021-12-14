import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { ItemEstado } from '../components/itemEstado';
import { api } from '../services/api'


export interface Estado {
  id: number;
  nome: string;
  sigla: string;
  regiao: string;
}



const App = () => {

  const [estados, setEstados] = useState<Estado[]>([]);
  const navigation = useNavigation();

  async function carregaEstados() {
    const response = await api.get('?orderBy=nome');
    setEstados(response.data);
  }

  useEffect(() => {
    carregaEstados();
  }, [])

  function handleToMunicipio(item: Estado) {
    navigation.navigate('Municipio', {estado:item});
  }

  return (
    <View style={styles.container}>
      <FlatList<Estado>
        
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        data={estados}
        keyExtractor={(estado) => String(estado.id)}
        renderItem={({ item }) => {
          return (
            <ItemEstado item={item} onPress={()=> handleToMunicipio(item)}/>
          )
        }}
      >

      </FlatList>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})
