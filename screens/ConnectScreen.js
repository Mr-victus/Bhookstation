import React, { Component } from 'react';
import { View,SafeAreaView, Text } from 'react-native';
import colors from '../common/Colors';
class ConnectScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{backgroundColor:colors.blackish,flex:1}}>
        <Text style={{color:'#fff',fontSize:15}}> ConnectScreen </Text>
      </SafeAreaView>
    );
  }
}

export default ConnectScreen;
