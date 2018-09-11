
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import Menu from './menu'
export default class App3 extends Component {
    static navigationOptions = ({ navigate }) => {
        let drawerLabel = 'Dang Xuat';
        let drawerIcon = () => {
            <Image>
                source={require('../img/user.png')}
                style={{
                    width: 30,
                    height: 30,
                    tintColor: '#400040'
                }}
            </Image>
        }
        return { drawerLabel, drawerIcon };
    }
    constructor(props) {
        super(props);
        this.state = ({
            DangNhap: 0,
            text: ''
        });
    }
    _onSubmit = () => {
        this.props.navigation.navigate('Main')
    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#c1c1c1',
            }}>
                <TextInput
                    style={{ height: 60, width: 200, fontWeight: 'bold', fontSize: 20, color: '#d26900', textAlign: "center" }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    returnKeyType="done"
                    underlineColorAndroid="#007100"
                    secureTextEntry={true}
                    keyboardType={'numeric'}
                    blurOnSubmit={false}
                    onSubmitEditing={() => { this._onSubmit() }}
                //placeholder="enter code" 
                />
                <TouchableOpacity onPress={() => { this._onSubmit() }}>
                    <View style={{
                        width: 150,
                        height: 25,
                        backgroundColor: '#009300',
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 15
                        }}>ĐĂNG NHẬP</Text>
                    </View>
                </TouchableOpacity>
            </View>);
    }
}