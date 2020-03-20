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
import { normalizeFont as np } from "../common/NormalizeFont";
const { Provider, Droppable, Draggable } = createDndContext();
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image:undefined,
      opacity:1,
      pickupScreen:true,
      msg:"Drag the Food Item to the bag when you pick up the parcel",
      deliveryTime:'12:20 PM'
    };
  }
  static navigationOptions =(props)=>({
    header:null
});
onDrop(payload){
  if(payload==="1")
  {
    this.setState({
      image:Images.food,
      opacity:1,
      pickupScreen:false,
      msg:"Food Delivered"
    })
  }
  else{
    this.setState({
      image:Images.plate,
      opacity:0,
      pickupScreen:false,
      msg:"Drag the Food Item to the Plate when you Deliver the parcel",
      deliveryTime:'12:20 PM'
    })
  }
}
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
      {this.state.pickupScreen?<Draggables payload={"2"} Draggable={Draggable} image={Images.food} opacity={this.state.opacity}/>:<Droppables Droppable={Droppable} onDrop={(payload)=>{
        this.onDrop(payload)
      }} image={this.state.image}/>}
        </View>
        <View style={{marginLeft:nw(30)}}>
          <Text style={{color:'white',fontWeight:'bold'}}>Food</Text>
          <Text style={{color:'white',fontWeight:'bold'}}>Delivery Time: {this.state.deliveryTime}</Text>
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
        <Text style={{color:'gray',fontSize:np(15)}}>{this.state.msg}</Text>
      </View>
      <View style={{backgroundColor:'#ee0d0d',height:nh(120),borderTopLeftRadius:nw(15),borderTopRightRadius:nw(15),justifyContent:'space-evenly'}}>
        <View style={{alignItems:'center'}}>
        <Text style={{color:'white',fontWeight:'bold',fontSize:np(15),textAlign:'center'}}>{this.state.msg}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent: 'space-evenly',}}>
        {this.state.pickupScreen?<Droppables Droppable={Droppable} onDrop={(payload)=>{
        this.onDrop(payload)
      }} image={this.state.image||Images.bag}/>:<Draggables payload={"1"} Draggable={Draggable} image={Images.food} opacity={this.state.opacity==0?1:0}/>}
      <View style={{backgroundColor:'white',height:nh(40),width:nw(150),borderRadius:nw(15),alignSelf:'center',justifyContent:'center',marginBottom:nh(10)}}>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-evenly'}} onPress={()=>{
                var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
                //20.340252, 85.808416 trident academy
                var url = scheme + `${this.props.lat||20.340252},${this.props.lon||85.808416}`;
                openLink(url)
            }}>
              <Image style={{height:nh(20),width:nw(20),resizeMode:'contain'}} source={Images.location}/>
            <Text style={{color:'black',alignSelf:'center',fontSize:np(15)}}>Drop Of Location</Text>
            </TouchableOpacity>
            </View>
      </View>
      </View>
      </Provider>
      </SafeAreaView>
    );
  }
}

export default Order;
