import React, { Component } from 'react';
import { View,SafeAreaView, Text } from 'react-native';
import colors from '../common/Colors';
class SaveScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions =(props)=>({
    header:null
});
  render() {
    return (
      <SafeAreaView style={{backgroundColor:'#ededed',flex:1}}>
        <Text style={{fontSize:15}}> Profile </Text>
      </SafeAreaView>
    );
  }
}

export default SaveScreen;
