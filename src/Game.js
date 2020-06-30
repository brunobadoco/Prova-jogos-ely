import React from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import Estilo from './Estilo';

export default class ListBeer extends React.Component {
     static navigationOptions = {
        title: "List of Games"
    };
    constructor (props) {
    super(props);
    this.state = {dados: []};
    this.props.navigation.addListener(
          'didFocus',
          payload => {
            this.listar();
          }
    )}
    listar(){
          fetch('https://crudcrud.com/api/bb50e6f8a26b485882b947d680326196/games')
          .then((response) => response.json())
          .then((responseJson) => {
            //Success 
            console.log(responseJson); 
            this.setState({dados: responseJson});
            })
            .catch((error) => console.error(error))
    }
    render() {
      return (
        <View style={Estilo.container}>
          <View style={Estilo.pesquisa}>
          <View style={Estilo.inputtextoback}>
            <TextInput style={Estilo.inputtexto} onChangeText={text => onChangeText(text)} />
          </View>
            
          </View>
          <View style={Estilo.body}>
            <View> 
        <Button title='Novo'  onPress={() => this.props.navigation.navigate('Novo')}/>
        <Text>Lista de jogos</Text>
        {this.state.dados.map((l,i) => (
            <Text>{l.nome} - {l.empresa} - {l.lançamento} - {l.genero}</Text>))
        }
      </View>


          </View>
        </View>
     );
   }
}