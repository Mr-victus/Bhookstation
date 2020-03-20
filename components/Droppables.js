import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  LayoutAnimation,
  Alert,
  ScrollView,
  Animated,
  AppRegistry
} from "react-native";
import colors from '../common/Colors';
import { normalizeHeight as nh} from '../common/NormalizeHeight';
import { normalizeWidth as nw} from '../common/NormalizeWidth';
import { createDndContext } from "react-native-easy-dnd";
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import ApplicationStyles from '../common/ApplicationStyles';


const { Provider, Droppable, Draggable } = createDndContext();

class Droppables extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        
      <this.props.Droppable
      onEnter={() => {
        console.log('Draggable entered');
      }}
      onLeave={() => {
        console.log('Draggable left');
      }}
      onDrop={({ payload }) => {
        console.log('Draggable with the following payload was dropped', payload);
        this.props.onDrop(payload)
        // this.setState({
        //   image:Images.food,
        //   opacity:1,
        //   pickupScreen:false,
        //   msg:"Food Delivered"
        // })
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
      <Image source={this.props.image} style={{height:nh(50),width:nw(50),resizeMode:'contain'}}/>
      </View>
          </Animated.View>
        );
      }}
    </this.props.Droppable>
     
    );
  }
}

export default Droppables;
