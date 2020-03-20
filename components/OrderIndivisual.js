import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { normalizeHeight as nh } from '../common/NormalizeHeight';
import { normalizeWidth as nw } from '../common/NormalizeWidth';
import { openLink } from '../common/OpenLink';

import images from '../common/Images';
import { normalizeFont as np} from '../common/NormalizeFont';
class OrderIndivisual extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{borderRadius:nw(15),backgroundColor:'white',marginHorizontal:nw(10),marginTop:nh(20),shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      
      elevation: 6,}}>
        <View style={{flexDirection:'row',borderRadius:nw(15),backgroundColor:'white',height:nh(130),justifyContent:'space-between',alignItems:'center'}}>
        <View style={{marginHorizontal:nw(30)}}> 
        <View >
                <Text style={{fontSize:np(15)}}>{this.props.ordernumber||"#654321"}</Text>
            </View>
        <View style={{flexDirection:'row'}}>
            <Image style={{height:nh(20),width:nw(20),resizeMode:'contain'}} source={images.food}/>
            <Text style={{marginLeft:nw(20),fontSize:np(15)}}>{this.props.fooditem||"Food"}</Text>
        </View>
            <View style={{flexDirection:'row',marginVertical:nh(10)}}>
            <Image style={{height:nh(20),width:nw(20),resizeMode:'contain'}} source={images.restaurant}/>
            <Text style={{marginLeft:nw(20),fontSize:np(15)}}>{this.props.resturant||"Resturant"}</Text>
            </View>
            
        </View>
        <View>
       
        <TouchableOpacity onPress={()=>{
          this.props.onPickUp()
        }}>
        <View style={{justifyContent:'center',color:'white',marginHorizontal:nw(30),backgroundColor:'#FF4141',height:nh(35),width:nw(90),borderRadius:nw(20),alignContent:'center',alignItems:'center'}}>
          <Text style={{color:'white',fontSize:np(15)}}>Pick up</Text>
        </View>
        </TouchableOpacity>
        </View>
        
        
      </View>
      <View>
            <View style={{backgroundColor:'#FF4141',height:nh(40),width:nw(150),borderRadius:nw(15),alignSelf:'center',justifyContent:'center',marginBottom:nh(10)}}>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-evenly'}} onPress={()=>{
                var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
                //20.340252, 85.808416 trident academy
                var url = scheme + `${this.props.lat||20.340252},${this.props.lon||85.808416}`;
                openLink(url)
            }}>
              <Image style={{height:nh(20),width:nw(20),resizeMode:'contain'}} source={images.location}/>
            <Text style={{color:'white',alignSelf:'center',fontSize:np(15)}}>Drop Of Location</Text>
            </TouchableOpacity>
            </View>
            
            </View>
      </View>
    );
  }
}

export default OrderIndivisual;
