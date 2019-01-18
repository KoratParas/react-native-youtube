import React from "react";
import { Header } from "react-navigation";
import { View, Platform, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const CustomHeader = props => {
  return (
    <View
      style={{
        height: 56,
        marginTop: Platform.OS == "ios" ? 20 : 0
      }}

    >
    <Text>Hello qordl</Text>
    
     
        <Header {...props} />
     
    </View>
  );
};

export default CustomHeader;