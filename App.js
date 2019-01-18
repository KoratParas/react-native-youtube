
import React, { Component } from 'react';
import {  StyleSheet, View, Text, Image, StatusBar } from 'react-native';
import Route from "./Route";

export default class App extends Component {

    

    

    constructor() {
        super();
        this.state = {
            isVisible: true,
        }
    }

    Hide_Splash_Screen = () => {
        this.setState({
            isVisible: false
        });
    }

    componentDidMount() {
        var that = this;
        setTimeout(function () {
            that.Hide_Splash_Screen();
        }, 2000);

    }

    render() {

        let Splash_Screen = (
            <View style={styles.SplashScreen_RootView}>
                <View style={styles.SplashScreen_ChildView}>
                    {/* Put all your components Image and Text here inside Child view which you want to show in Splash Screen. */}
                    <Image source={require('./You.png')}
                        style={{ width: '56%', height: '59%' }} />
                </View>
            </View>)

if(this.state.isVisible === true) { 
    return(Splash_Screen);
     
}else{ 
    return(<View style={styles.MainContainer}>
        <StatusBar
        backgroundColor="rgba(204, 204, 204, 1)"
        />
        <Route/> 
      
   </View>);
    }

        
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            

            // paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
        },

        SplashScreen_RootView:
        {
            //justifyContent: 'center',
            position: 'absolute',
            backgroundColor: "white",
            // set the window size of SplashScreen_RootView 
            width: '100%',
            height: '100%',

        },

        SplashScreen_ChildView: {

            // To set the image in center(Horizontal alignment) of SplashScreen_ChildView
            alignItems: 'center',

            // To set the image in bottom(Vertical alignment)end of this SplashScreen_ChildView
            justifyContent: "flex-end",

        }



    });