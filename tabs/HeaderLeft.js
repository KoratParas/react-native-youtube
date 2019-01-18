import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class HeaderLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Image
        style={{ height: 25, width: 105, marginLeft: 5 }}
        source={require('../hlogo.png')} />
    );
  }
}
