
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Menu from './menu'
export default class App2 extends Component{
  static navigationOptions=({navigate})=>{
    let drawerLabel ='Settings';
    let drawerIcon = ()=>{
        <Image>
            source={require('../img/setting.png') }
            style={{
                width: 30,
                height:30,
                tintColor: '#400040'
            }}
        </Image>
    }
    return {drawerLabel,drawerIcon};
}
  render() {
    return (
      <View style={{
          flex:1,
          backgroundColor: '#ff9b9b',
      }}>
      <Menu {...this.props} />
      <TouchableOpacity onPress={ () => this.props.navigation.navigate('Third') } >
                    <View style={{
                        width: 70,
                        height: 15,
                        backgroundColor: '#ff0000'
                    }}>
                    </View>
                </TouchableOpacity>
      </View>
    );
  }
}