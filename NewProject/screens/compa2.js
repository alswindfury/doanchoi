
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
import Icon from "react-native-vector-icons/Ionicons";
export default class App2 extends Component {
    static navigationOptions ={
        drawerIcon: ({tintColor})=>(
            <Icon name='md-settings' style={{ fontSize:20, color: tintColor}}/>
        )
    }
   
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#ff9b9b',
            }}>
                <Menu {...this.props} />
            </View>
        );
    }
}