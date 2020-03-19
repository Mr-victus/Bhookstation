import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { normalizeHeight as nh } from '../common/NormalizeHeight';
import { normalizeWidth as nw } from '../common/NormalizeWidth';
import { openLink } from '../common/OpenLink';

import images from '../common/Images';
class OrderIndivisual extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flexDirection:'row',backgroundColor:'white',height:nh(100),marginHorizontal:nw(10),justifyContent:'space-between',alignItems:'center',marginTop:nh(20)}}>
        <View style={{marginHorizontal:nw(30)}}> 
        <View style={{flexDirection:'row'}}>
            <Image style={{height:nh(20),width:nw(20),resizeMode:'contain'}} source={images.food}/>
            <Text style={{marginLeft:nw(20)}}>{this.props.fooditem||"Food"}</Text>
        </View>
            <View style={{flexDirection:'row',marginVertical:nh(10)}}>
            <Image style={{height:nh(20),width:nw(20),resizeMode:'contain'}} source={images.restaurant}/>
            <Text style={{marginLeft:nw(20)}}>{this.props.resturant||"Resturant"}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <View>
            <TouchableOpacity onPress={()=>{
                var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
                //20.340252, 85.808416 trident academy
                var url = scheme + `${this.props.lat||20.340252},${this.props.lon||85.808416}`;
                openLink(url)
            }}>
            <Text style={{color:'#ee0d0d'}}>Drop Of Location</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginLeft:nw(10)}}>
                <Text>{this.props.ordernumber||"#654321"}</Text>
            </View>
            </View>
        </View>
        <View>
       
        <TouchableOpacity onPress={()=>{

        }}>
        <View style={{justifyContent:'center',color:'white',marginHorizontal:nw(30),backgroundColor:'#ee0d0d',height:nh(35),width:nw(90),borderRadius:nw(20),alignContent:'center',alignItems:'center'}}>
          <Text style={{color:'white'}}>Pick up</Text>
        </View>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default OrderIndivisual;
