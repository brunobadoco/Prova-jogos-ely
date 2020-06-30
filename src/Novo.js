import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import Estilo from './Estilo';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            empresa:'',
            lançamento: '',
            genero: ''
        };
    }
    onSalvar() {
    fetch('https://crudcrud.com/api/bb50e6f8a26b485882b947d6803/games', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(data => {
      this.props.navigation.navigate('Games');
      })
    }
    render() {
      return (
        <View style={Estilo.container}>
          <TextInput  value={this.state.nome}  onChangeText={(nome) => this.setState({ nome })} placeholder={'Nome'} />
          <TextInput value={this.state.empresa}  onChangeText={(empresa) => this.setState({ empresa })} placeholder={'Empresa'}  />
          <TextInput value={this.state.lançamento}  onChangeText={(lançamento) => this.setState({ lançamento })} placeholder={'Lançamento'}  />
          <TextInput value={this.state.genero}  onChangeText={(genero) => this.setState({ genero })} placeholder={'Gênero'}  />
          <Button title={'Adicionar'} onPress={this.onSalvar.bind(this)} />


        </View>
     );
   }
}




