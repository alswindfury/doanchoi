import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions, View,
    TextInput, TouchableOpacity,
    Text
} from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
//import App from './App';
//import Todo from './App1';w

import App1 from './screens/compa1';
import App2 from './screens/compa2';
import App3 from './screens/compa3';

var width = Dimensions.get('window').width;
const routeConfigs = {
    'Main': { path: '/', screen: App1 },
    'Detail': { path: '/Detail', screen: App2 },
    'Third': { screen: App3 }
};
let drawerNavigatorConfig = {
    initialRouteName: 'Third',
    drawerWidth: width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
        activeTintColor: 'red'
    },
    order: ['Main', 'Detail', 'Third']
}
const App = DrawerNavigator(routeConfigs, drawerNavigatorConfig);

/*
export default class AppOr extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            DangNhap: 0,
            text: ''
        });
    }
    _onSubmit = () => {
        this.setState({
            DangNhap: this.state.text
        });
    }
    render() {
        const ddn = (<App name="TUNG" />);
        const dn = (<View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
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

        var HienThi = this.state.DangNhap == '123' ? ddn : dn;
        return (
            <View style={{
                flex: 1
            }}>
                {HienThi}
            </View>
        );
    }
}

export  class DaDangNhap extends Component {
    static navigationOptions = ({ navigation }) => {
        let headerStyle ={ height:0 }
        return { headerStyle };
    }
    render() {
        return (
            <View style={{flex:1}}>
                <App />
            </View>
        );
    }
}

export default  class DangNhap extends Component {
    static navigationOptions = ({ navigation }) => {
        let headerStyle ={ height:0 }
        return { headerStyle };
    }
    constructor(props) {
        super(props);
        this.state = ({
            text: ''
        });
    }
    _onSubmit=()=>{
        this.props.navigation.navigate('Detail1')
    }
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
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
            </View>
        );
    }
}

const AppNavigator = StackNavigator({
    'Main1': { screen: DangNhap },
    'Detail1': { screen: DaDangNhap },
});
*/

AppRegistry.registerComponent('NewProject', () => App);
