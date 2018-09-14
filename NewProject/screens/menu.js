
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TouchableHighlight,

} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
export default class Menu extends Component {

    render() {
        return (
            <View style={{
                height: 30,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderBottomWidth:1
            }}>
                <TouchableOpacity style={{ marginLeft: 10 }}  
                    onPress={() => {
                        /*const { navigate } = this.props.navigation;
                        navigate('DrawerOpen');*/
                        this.props.navigation.openDrawer();
                    }} >
                    <Icon name='md-menu' style={{ fontSize:23, color:'#000000' }}/>
                </TouchableOpacity>
            </View>
        );
    }
}