import { useNavigation, useRoute } from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {Estado} from './Home'
import {api}from '../services/api'
import { ItemMunicipio } from "../components/itemMunicipio";

interface Params{
    estado:Estado;
}
export interface Municipio{
    id: number;
    nome: string;
}



export function Municipio() {
    const route = useRoute();
    const {estado} = route.params as Params;
    const [municipios, setMunicipios] = useState<Municipio[]> ([]);
    const navigation = useNavigation();
    
    async function carregaMunicipios() {
        const response = await api.get<Municipio[]>(`/${estado.id}/municipios?orderBy=nome`);
        setMunicipios(response.data);
      }

      useEffect(() => {
        carregaMunicipios();
        navigation.setOptions({title: estado.nome })
      }, [])
    
    return(
        <View style={styles.container}>
      <FlatList<Municipio>
        
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        data={municipios}
        keyExtractor={(municipio) => String(municipio.id)}
        renderItem={({ item }) => {
          return (
            <ItemMunicipio item={item} />
          )
        }}
      >

      </FlatList>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eeeeee',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    }
  })