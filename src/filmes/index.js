import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class Filmes extends Component {

    render() {
        return(
            <View style={styles.card}>                
                <Text style={styles.titulo}>{this.props.data.nome}</Text>
                <Image
                source={{uri: this.props.data.foto}}
                style={styles.img}
                />                                
                <TouchableOpacity
                style={styles.areaBotao}
                onPress={() => alert(this.props.data.nome + '\n' + this.props.data.sinopse)}
                >
                    <View style={styles.botao}>
                        <Text style={styles.botaoTexto}>Leia mais...</Text>
                    </View>                    
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        backgroundColor: '#591E19',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        margin: 10,
        shadowRadius: 6,
        borderRadius: 6,
        elevation: 3,
    },
    titulo: {
        color: '#fff',
        fontSize: 18,
        margin: 5,
    },
    sinopse: {
        color: '#fff',
        fontSize: 16,
        margin: 5,
    },
    img: {
        height: 230,
        marginBottom: 10,
    },
    areaBotao: {
        alignItems: 'flex-end',
        marginTop: -50,
        zIndex: 9,
    },
    botao:{
        width: 100,
        backgroundColor: '#09a6ff',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    botaoTexto: {
        color: '#fff',
        textAlign: 'center'
    },
})

export default Filmes