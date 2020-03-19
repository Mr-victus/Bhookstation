import React, { Component } from 'react';
import { View, Text,SafeAreaView, ScrollView } from 'react-native';
import colors from '../common/Colors';
import { normalizeHeight as nh } from '../common/NormalizeHeight';
import { normalizeWidth as nw } from '../common/NormalizeWidth';
import OrderIndivisual from '../components/OrderIndivisual';
class HomeScreen extends Component {
  static navigationOptions={header:null}
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{felx:1}}>
      <SafeAreaView style={{flex:1,backgroundColor:'#dedede'}}>
        <OrderIndivisual fooditem={"Pizza"} resturant={"Trident canteen"} lat={"20.340252"} lon={"85.808416"} ordernumber={"#123456"}/>
        <OrderIndivisual/>
        <OrderIndivisual/>
        <OrderIndivisual/>
        <OrderIndivisual/>
        <OrderIndivisual/>
        <OrderIndivisual/>
        <OrderIndivisual fooditem={"Pizza"} resturant={"Trident canteen"} lat={"20.340252"} lon={"85.808416"} ordernumber={"#123456"}/>

      </SafeAreaView>
      </ScrollView>
    );
  }
}

export default HomeScreen;
