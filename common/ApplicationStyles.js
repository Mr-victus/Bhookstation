import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';
import {normalizeFont as np} from './NormalizeFont';
import { normalizeHeight as nh } from './NormalizeHeight';
import { normalizeWidth as nw } from './NormalizeWidth';
import DeviceInfo from 'react-native-device-info';
import Images from "./Images";
import colors from '../common/Colors';

let brand = DeviceInfo.getBrand();
let height=35,lineHeight=17,heightDroppable= 40,padding=26;
let isApple = brand == "Apple" ? true : false;
if(isApple)
{
  height= 40;
  lineHeight= 14;
  heightDroppable=55;
  padding=39;
}

// This file is for a reusable grouping of common items.
const ApplicationStyles = {
  draggables: {
    view: {
      backgroundColor:"#6d6f73",
      width:nw(130),
      marginVertical:nh(10),
      borderRadius:6,
      justifyContent: 'center',
      zIndex: 1,
      padding: nw(4),
      alignItems: 'center',
      height: nh(height)
    },
    text: {
      lineHeight: nh(lineHeight),
      color:'white',
      alignSelf:'stretch',
      textAlign: 'center',
      alignContent: 'center'
    }
  },
  droppables: {
    view: {
      backgroundColor:"#6d6f73",
      width:nw(110),
      marginVertical:nh(20),
      justifyContent: 'center', 
      borderRadius: 6,
      padding: nw(4),
      justifyContent: 'center', 
      alignItems: 'center', 
      height: nh(heightDroppable)
    },
    text: {
      lineHeight: nh(lineHeight),
      color:'white',
      alignSelf:'stretch', 
      textAlign:'center'
    },
    treeLines: {
      borderBottomWidth: 2,
      borderBottomColor: 'white',
      width:nw(15)
    }
  },


  testScreen: {
    headingText: {
      color:'white',alignSelf:'center', paddingBottom:nh(6)
    },
    separator: {
      borderWidth:2, borderColor:colors.bottom_navigation_bg
    },
    draggableContainer: {
      borderColor: '#fff',
      paddingLeft:nw(12), 
      borderBottomWidth:2,
      borderRightWidth:2,
      paddingRight:nw(8),
      borderTopWidth:2,
      marginTop:nh(20),
      zIndex: 1
    },
    droppableContainer: {
      marginTop: nh(20),
      justifyContent: 'center'
    },
    successContainer: {
      flex:1,
      justifyContent:'center',
      paddingTop:nh(20)
    },
    successInnerContainer: {
      borderColor: '#fff',
      borderLeftWidth:2,
      // zIndex: 1,
      paddingVertical: nh(padding)
    },
    greenTick: {
      resizeMode:'contain',
      height:nh(22),
      width:nw(22),
      alignSelf:'center',
      backgroundColor:colors.app_background
    },
    percentContainer:{
      flexDirection:'row',
      alignItems:'center', 
      paddingVertical: nh(16), 
      paddingHorizontal: nw(2)
    },
    treeLine:{
      borderBottomWidth: 2,
      borderBottomColor: 'white',
      width:nw(17)
    },
    percentInnerContainer:{
      backgroundColor:colors.bottom_navigation_bg, 
      borderRadius: 6,
      padding:nh(8)
    },
    discard: {
      resizeMode:'contain',
      height:nh(22),
      width:nw(22),
      alignSelf:'center'
    }
  }
}

export default ApplicationStyles
