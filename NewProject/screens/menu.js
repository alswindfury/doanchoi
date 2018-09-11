
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

export default class Menu extends Component {

    render() {
        return (
            <View style={{
                height: 40,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <TouchableHighlight style={{ marginLeft: 10 }}
                    onPress={() => {
                        /*const { navigate } = this.props.navigation;
                        navigate('DrawerOpen');*/
                        this.props.navigation.openDrawer();
                    }} >
                    <Image style={{
                        width: 30, height: 30
                    }}
                        source={require('../img/menu.png')}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}