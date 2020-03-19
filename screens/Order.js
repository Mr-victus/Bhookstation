import React, { Component } from "react";
import {
  Text,
  View,
  Image,
} from "react-native";
import Draggables from '../components/Draggables'
import Droppables from '../components/Droppables'
import colors from '../common/Colors';
import { normalizeHeight as nh} from '../common/NormalizeHeight';
import { normalizeWidth as nw} from '../common/NormalizeWidth';
import Images from '../common/Images';
import { createDndContext } from "react-native-easy-dnd";
import BottomResults from "../components/BottomResults";
import { SafeAreaView } from "react-navigation";
import DeviceInfo from 'react-native-device-info';
import ApplicationStyles from "../common/ApplicationStyles";
const { Provider, Droppable, Draggable } = createDndContext();
class TestScreen extends Component {
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
      <SafeAreaView style={{flex:1,backgroundColor:'#ededed'}}>
        
      <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:nw(90),marginTop:nh(20)}}>
        <View>
        <View>
        <Text>Trident Canteen</Text>
      </View>
            <Image source={Images.food} style={{height:nh(50),width:nw(50)}}/>
        </View>
        <View>
          <Text>Food</Text>
          <Text>Delivery Time</Text>
          <Text>12:20</Text>
        </View>
      </View>
      
      </SafeAreaView>
    );
  }
}

export default TestScreen;
