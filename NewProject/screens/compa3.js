
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    Dimensions,
    FlatList
} from 'react-native';
import Menu from './menu'
import Icon from "react-native-vector-icons/Ionicons";
import Button from 'react-native-button';

var widths = Dimensions.get('window').width;
export default class App3 extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name='md-log-out' style={{ fontSize: 20, color: tintColor }} />
        )
    }
    constructor(props) {
        super(props);
        this.state = ({
            text: ''
        });
    }
    _onSubmit = () => {
        this.props.navigation.navigate('Home')
    }
    _onPressNum = (nums) => {

        var num = parseInt(nums);
        if (num === 11) {
            this.setState({
                text: '',
            });
            console.log("hi 11 " + nums);
        } else if (num === 12) {
            this.setState({
                text: this.state.text.slice(0, this.state.text.length - 1),
            });
            console.log("hi 12 " + this.state.text.length);
        } else {
            this.setState({
                text: this.state.text + num,
            });
            console.log("hi  ==" + nums);
        }

    }
    render() {
        return (
            <View style={{ backgroundColor: '#c4e6c6', flex: 1, alignItems: 'center' }}>
                <View style={{
                    alignItems: 'center'
                }}>
                </View>
                <Text style={{
                    fontSize: 20,
                    color: '#007100',
                    marginTop: 20
                }}>NHẬP MÃ ĐĂNG NHẬP</Text>
                <TextInput
                    style={{ height: 60, width: widths - 20, fontWeight: 'bold', fontSize: 30, color: '#d26900', textAlign: "center" }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    returnKeyType="done"
                    underlineColorAndroid="#007100"
                    secureTextEntry={true}
                    maxLength={20}
                    keyboardType={'numeric'}
                    blurOnSubmit={false}
                    onSubmitEditing={() => { this._onSubmit() }}
                //placeholder="enter code" 
                />
                <Text style={{
                    fontSize: 15,
                    color: '#d26900',
                    textDecorationLine: 'underline',
                }}
                >Đăng Nhập Bằng Mã Người Dùng</Text>
                <View style={{
                    width: widths - 30,
                    height: 50 * 4 + 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10
                }}>
                    <FlatList
                        data={[{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }, { key: '9' }, { key: '11' }, { key: '0' }, { key: '12' }]}
                        numColumns={3}
                        keyExtractor={item => item.key}
                        renderItem={({ item, index }) => {
                            var showView;
                            if (item.key == 11) {

                                showView = (
                                    <View style={{
                                        width: 50,
                                        height: 50,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: 10
                                    }} ><Text style={{
                                        fontSize: 15,
                                        color: '#007100'
                                    }}>CLEAR</Text></View>
                                );
                            } else if (item.key == 12) {
                                showView = (
                                    <View style={{
                                        width: 50,
                                        height: 50,
                                        //borderRadius: 25,
                                        //borderColor: '#007100',
                                        // borderWidth: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: 10
                                    }} >
                                        <Icon name='md-backspace' style={{ fontSize: 30, color: '#007100' }} />
                                    </View>
                                );
                            }
                            else {
                                showView = (

                                    <View style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 25,
                                        borderColor: '#007100',
                                        borderWidth: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: 10
                                    }} ><Text style={{
                                        fontSize: 25,
                                        color: '#007100'
                                    }}>{item.key}</Text></View>
                                );
                            }
                            return (
                                <View>
                                    <Button onPress={() => {
                                        this._onPressNum(item.key)
                                    }}>
                                        {showView}
                                    </Button>
                                </View>
                            );
                        }
                        }
                    />
                </View>
                <TouchableOpacity onPress={() => { this._onSubmit() }}>
                    <View style={{
                        width: widths - 50,
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
                <View style={{ height: 10 }}></View>

            </View >
        );
    }
}