import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import {Estado} from '../pages/Home'
import {Municipio} from '../pages/Municipio'
interface ItemMunicipioProps extends TouchableOpacityProps {
    item: Municipio;
}


export function ItemMunicipio({item, ...rest}:  ItemMunicipioProps) {
    return (
        <TouchableOpacity
            {...rest}
            style={styles.itemEstado}>
            <View style={styles.avatarSigla}>
                <Text style={styles.sigla}>{item.nome.substring(0 , 2)}</Text>
            </View>
            <Text style={styles.estado} >{item.nome}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    itemEstado: {
        paddingVertical: 10,
        marginTop: 5,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        borderRadius: 10
    },
    avatarSigla: {
        width: 60,
        height: 60,
        backgroundColor: '#77ff99',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    sigla: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white"
    },
    estado: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        alignSelf: 'center'
    }

})
function handleToMunicipio(item: Estado): void {
    throw new Error("Function not implemented.");
}

