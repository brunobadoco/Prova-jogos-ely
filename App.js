import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Game from './src/Game';
import Novo from './src/Novo';




const Project= createStackNavigator({
  Game,
  Novo
},
{
  defaultNavigationOptions: {
    headerStyle: {       
      backgroundColor: '#000000', 
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0, 
    },
    headerTintColor: '#ff6347',
    headerTitleStyle: {
      fontWeight: 'bold', 
      textAlign: 'center'   
    },
    headerBackTitle: 'voltar'
  }
});
export default createAppContainer(Project);
