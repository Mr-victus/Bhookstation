import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated
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
import { openLink } from '../common/OpenLink';
const { Provider, Droppable, Draggable } = createDndContext();
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image:undefined,
      opacity:1,
      pickupScreen:true,
      msg:"Drag the Food Item to the bag when you pick up the parcel"
    };
  }
  static navigationOptions =(props)=>({
    header:null
});
  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#ededed',justifyContent:'space-between'}}>
        <Provider>
      <View style={{backgroundColor:'#ee0d0d',height:nh(120),borderBottomLeftRadius:nw(30),borderBottomRightRadius:nw(30),zIndex:this.state.pickupScreen?1:0}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:nw(90),marginTop:nh(20)}}>
        <View>
        <View>
        <Text style={{color:'white',fontWeight:'bold'}}>{this.state.pickupScreen?"Trident Canteen":"Jhon Doe"}</Text>
      </View>
      {this.state.pickupScreen?<Draggable
      onDragStart={() => {
        console.log('Started draggging');
      }}
      onDragEnd={() => {
        console.log('Ended draggging');
      }}
      payload={this.props.payload}
    >
      {({ viewProps }) => {
        return (
          <Animated.View
            {...viewProps}
            pointerEvents={this.state.opacity==1?"auto":"none"}
             style={[viewProps.style, {zindex: 1,opacity: this.state.opacity}]}
          >
            <View>
            <Image source={Images.food} style={{height:nh(50),width:nw(50)}}/>
            </View>
          </Animated.View>
        );
      }}
    </Draggable>:<Droppable
        onEnter={() => {
          console.log('Draggable entered');
        }}
        onLeave={() => {
          console.log('Draggable left');
        }}
        onDrop={({ payload }) => {
          console.log('Draggable with the following payload was dropped', payload);
          // this.props.onDrop(payload)
          this.setState({
            image:Images.food,
            opacity:1,
            pickupScreen:false,
            msg:"Food Delivered"
          })
        }}
      >
        {({ active, viewProps }) => {
          return (
            <Animated.View
              {...viewProps}
              style={[
                viewProps.style,
              ]}
            >
                <View style={{alignItems:'center'}}>
        <Image source={this.state.image} style={{height:nh(50),width:nw(50)}}/>
        </View>
            </Animated.View>
          );
        }}
      </Droppable>}
        </View>
        <View style={{marginLeft:nw(30)}}>
          <Text style={{color:'white',fontWeight:'bold'}}>Food</Text>
          <Text style={{color:'white',fontWeight:'bold'}}>Delivery Time: 12:20 PM</Text>
          <TouchableOpacity onPress={()=>{
                var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
                //20.340252, 85.808416 trident academy
                var url = scheme + `${this.props.lat||20.340252},${this.props.lon||85.808416}`;
                openLink(url)
            }}>
            <Text style={{color:'white'}}>Drop Of Location</Text>
            </TouchableOpacity>
            {this.state.pickupScreen?null:<Text style={{color:'white'}}>987654321</Text>}
        </View>
      </View>
      </View>
      <View style={{alignItems:'center'}}>
        <Text style={{color:'gray'}}>{this.state.msg}</Text>
      </View>
      <View style={{backgroundColor:'#ee0d0d',height:nh(120),borderTopLeftRadius:nw(30),borderTopRightRadius:nw(30),justifyContent:'space-evenly'}}>
        <View style={{alignItems:'center'}}>
        <Text style={{color:'white',fontWeight:'bold'}}>Bag</Text>
        </View>
        {this.state.pickupScreen?<Droppable
        onEnter={() => {
          console.log('Draggable entered');
        }}
        onLeave={() => {
          console.log('Draggable left');
        }}
        onDrop={({ payload }) => {
          console.log('Draggable with the following payload was dropped', payload);
          // this.props.onDrop(payload)
          this.setState({
            image:Images.plate,
            opacity:0,
            pickupScreen:false,
            msg:"Drag the Food Item to the Plate when you Deliver the parcel"
          })
        }}
      >
        {({ active, viewProps }) => {
          return (
            <Animated.View
              {...viewProps}
              style={[
                viewProps.style,
              ]}
            >
                <View style={{alignItems:'center',justifyContent:'center'}}>
        <Image source={this.state.image||Images.bag} style={{height:nh(50),width:nw(50)}}/>
        </View>
            </Animated.View>
          );
        }}
      </Droppable>:<Draggable
      onDragStart={() => {
        console.log('Started draggging');
      }}
      onDragEnd={() => {
        console.log('Ended draggging');
      }}
      payload={this.props.payload}
    >
      {({ viewProps }) => {
        return (
          <Animated.View
            {...viewProps}
            pointerEvents={this.state.opacity==0?"auto":"none"}
             style={[viewProps.style, {zindex: 1,opacity: this.state.opacity==0?1:0,}]}
          >
            <View style={{alignItems:'center',justifyContent:'center'}}>
            <Image source={Images.food} style={{height:nh(50),width:nw(50)}}/>
            </View>
          </Animated.View>
        );
      }}
    </Draggable>}
      </View>
      </Provider>
      </SafeAreaView>
    );
  }
}

export default Order;
