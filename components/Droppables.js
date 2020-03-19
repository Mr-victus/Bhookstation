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
        }}
      >
        {({ active, viewProps }) => {
          return (
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={ApplicationStyles.droppables.treeLines}></View>
            <Animated.View
            
              {...viewProps}
              style={[
                viewProps.style,
              ]}
            >
               <View style={ApplicationStyles.droppables.view}>
              <Text style={ApplicationStyles.droppables.text}>{this.props.text}</Text>
              </View>
            </Animated.View>
            <View style={ApplicationStyles.droppables.treeLines}></View>
            </View>
          );
        }}
      </this.props.Droppable>
     
    );
  }
}

export default Droppables;
