
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
export default class App1 extends Component {
    static navigationOptions = ({ navigate }) => {
        let drawerLabel = 'Home';
        let drawerIcon = () => {
            <Image style={{
                width: 30, height: 30
            }}
                source={require('../img/home.png')}
            />
        }
        return { drawerLabel, drawerIcon };
    }
    render() {
        console.log( "hahaha "+JSON.stringify(this.props));
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#88ff88',
            }}>

                <Menu {...this.props} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')} >
                    <View style={{
                        width: 70,
                        height: 15,
                        backgroundColor: '#ff0000'
                    }}>
                    </View>
                </TouchableOpacity>
                <Text> hello </Text>
            </View>
        );
    }
}