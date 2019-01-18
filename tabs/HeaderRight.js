import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from './SearchBar';
import { navigation } from "react-navigation";

export default class HeaderRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
        <View style={{ flexDirection: 'row', marginRight: 4 }}>
        <TouchableOpacity style={{ paddingHorizontal: 12 }}>
          <Icon name='videocam' size={25} color={'rgba(96, 96, 96, 0.9)'} />
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 12 }} >
          <Icon name='search' size={25} color={'rgba(96, 96, 96, 0.9)'} />
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 12 }}>
          <Icon name='account-circle' size={24} color={'rgba(96, 96, 96, 0.8)'} />
        </TouchableOpacity>
      </View>
    );
  }
}


