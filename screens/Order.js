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
      Variables:["pts per possession offense","pts per possession defense","home/away/neutral","days between games","line/pts given","temp","team quality","free throws per game"],
      Selection:["Drop here","Drop here","Drop here"],
      opacity:[]
    };
  }
  static navigationOptions =(props)=>({
    header:null
});
  getPercentage(){
    return Math.floor(Math.random() * 101)+"%"; 
  }
  componentDidMount(){
    this.setState({
      opacity:Array(this.state.Variables.length).fill().map((_, i) => 1)
    })
  }
  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#ededed'}}>
      <Text>Orders</Text>
      </SafeAreaView>
    );
  }
}

export default TestScreen;
