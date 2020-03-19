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
import ApplicationStyles from '../common/ApplicationStyles'

const { Provider, Droppable, Draggable } = createDndContext();
class Draggables extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
      <this.props.Draggable
      // key={this.props.key}
      
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
            pointerEvents={this.props.opacity==1?"auto":"none"}
            style={[viewProps.style, {opacity: this.props.opacity,}]}
          >
            <View style={ ApplicationStyles.draggables.view }>
        <Text style={ ApplicationStyles.draggables.text }>{this.props.text}</Text>
        </View>   
          </Animated.View>
        );
      }}
    </this.props.Draggable>
    )
  }
}

export default Draggables;
