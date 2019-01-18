import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Platform, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import Home from "./tabs/Home";
import Trending from "./tabs/Trending";
import Subscriptions from "./tabs/Subscriptions";
import Inbox from "./tabs/Inbox";
import Library from "./tabs/Library";
import YouTubeVideo from "./tabs/YouTubeVideo";
import HeaderRight from "./tabs/HeaderRight";
import HeaderLeft from "./tabs/HeaderLeft";
import Notifications from "./tabs/Notifications";



import BottomNavigation, {
  IconTab,
  Badge,
  FullTab
} from 'react-native-material-bottom-navigation'


import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';


export const HomeStack = createStackNavigator(
  {
    Home: { screen: Home },
    YouTubeVideo: { screen: YouTubeVideo }
  },{
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'rgba(255,255,255,1)',
      height: 48, 
    },
    headerLeft: (
      <HeaderLeft/>   
    ),
    headerRight: (
      <HeaderRight/>
    )
  }
  },
);

export const TreandingStack = createStackNavigator(
  {
    Trending: { screen: Trending },
    YouTubeVideo: { screen: YouTubeVideo }
  },{
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'rgba(255,255,255,1)',
        height: 48,
        
      },
      headerLeft: (
        <HeaderLeft/>   
      ),
      headerRight: (
        <HeaderRight/>
      )
  
    }
  }
);

export const SubscriptionsStack = createStackNavigator({
  Subscriptions: { screen: Subscriptions },
  //YouTubeVideo: { screen: YouTubeVideo }
},{
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'rgba(255,255,255,1)',
      height: 48,
      
    },
    headerLeft: (
      <HeaderLeft/>   
    ),
    headerRight: (
      <HeaderRight/>
    )
  }
})




export const InboxStack = createStackNavigator({
  Inbox: { screen: Inbox },
},{
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'rgba(255,255,255,1)',
      height: 48,
    },
    headerLeft: (
      <HeaderLeft/>   
    ),
    headerRight: (
      <HeaderRight/>
    )
  },
  headerMode:"float"
  
})

export const LibraryStack = createStackNavigator({
  Library: { screen: Library },
},{
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'rgba(255,255,255,1)',
      height: 48,
    },

    headerLeft: (
      <HeaderLeft/>   
    ),
    headerRight: (
      <HeaderRight />
    )
  },
})







export const TabContainer = createBottomTabNavigator(
  {
    Home: HomeStack,
    Trending: TreandingStack,
    Subscriptions: SubscriptionsStack,
    Inbox: InboxStack,
    Library: LibraryStack,

  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Trending') {
          iconName = `whatshot`;
        }
        else if (routeName === 'Subscriptions') {
          iconName = `subscriptions`;
        }
        else if (routeName === 'Inbox') {
          iconName = `email`;
        }
        else if (routeName === 'Library') {
          iconName = `folder`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} style={{ paddingBottom:4 }}/>

      },
    }),
    tabBarOptions: {
      activeTintColor: 'rgba(255, 0, 0, 1)',
      inactiveTintColor: 'rgba(68, 68, 68, 0.8)',
      activeBackgroundColor: 'rgba(255,255,255,1)',
      inactiveBackgroundColor: 'rgba(255,255,255,1)',
    },
   

  },
);



export default RootStack = createStackNavigator(
  {
    Index: {
      screen: TabContainer,
    },
    
  },
  {
    initialRouteName: 'Index',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    navigationOptions:{
      header:null,
    }
  },
 
   

);
