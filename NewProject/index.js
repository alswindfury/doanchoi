import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions, View,
    TextInput, TouchableOpacity,
    Text, ScrollView
} from 'react-native';
import { DrawerNavigator, StackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';

//import App from './App';

import App1 from './screens/compa1';
import App2 from './screens/compa2';
import App3 from './screens/compa3';

console.disableYellowBox =true;

var width = Dimensions.get('window').width;

const CustomDrawerComponent = (props) => (
    <View style={{flex: 1 }}>
        <View style={{ backgroundColor: '#9fe987',height: 150,justifyContent:'center', alignItems:'center'}}>
            <Text>HELLO</Text>
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </View>
)
const AppDrawerNavigation = createDrawerNavigator(
    {
        'Home': App1,
        'Setting': App2,
        'Log Out': App3
    },
    {   
        initialRouteName: 'Log Out',
        contentComponent: CustomDrawerComponent,
        drawerWidth:width/2,
        
        contentOptions:{    
            activeTintColor: '#ff8000',
            labelStyle: { fontSize:10 },
            //itemsContainerStyle:{backgroundColor:'#808080'},
           // itemStyle:{Color: '#77ff77'},
            //iconContainerStyle:{ tintColor: '#000000'}
        }
    },
    
)

export class AppNavi extends Component {

    render() {
        return (
            <AppDrawerNavigation />
        )
    }
}

AppRegistry.registerComponent('NewProject', () => AppNavi);
