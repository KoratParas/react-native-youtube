import React from "react";
import { Text, View, Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Messages from "./Messages";
import Notifications from "./Notifications";
import {createStackNavigator} from "react-navigation";
import Route from "../Route";

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Inbox extends React.Component{
    render(){
        return(
           
            <ScrollableTabView 
            tabBarUnderlineStyle={{backgroundColor:"rgba(19, 19, 19, 1)", height:2}}
            tabBarBackgroundColor="rgba(255,255,255,1)"
            tabBarActiveTextColor="rgba(19, 19, 19, 1)"
            tabBarInactiveTextColor="rgba(96, 96, 96, 1)" 
            tabBarTextStyle={{fontSize: 14, fontWeight:"500",justifyContent:"center"}}>
            
        <Messages tabLabel="MESSAGES" />
        <Notifications tabLabel="NOTIFICATIONS" />
        
      </ScrollableTabView>
      

        );
    }
}

const styles = StyleSheet.create({
    item:{
        flex:1,
        justifyContent : 'center',
        alignItems: 'center',
    }
});


  