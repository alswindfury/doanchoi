
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    
} from 'react-native';
import Menu from './menu';
import Icon from "react-native-vector-icons/Ionicons";
export default class App1 extends Component {
    /*
    static navigationOptions ={
        
        drawerIcon: ({tintColor})=>(
            <Icon name='md-home' style={{ fontSize:20, color: tintColor}}/>
        ),
        
    }
    */
   static navigationOptions = {
    header: null,
    title: "Home",
    tabBarIcon: () => {
      return <Icon name="md-home" size={25} color={"white"} />;
    }
  }
    render() {
        console.log( "hahaha "+JSON.stringify(this.props));
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#4f4fff',
            }}>

                <Menu {...this.props} />
            </View>
        );
    }
}