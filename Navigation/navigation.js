import React, { Component } from "react";
import {
    createAppContainer,
    createSwitchNavigator
    
  } from "react-navigation";
  import {createBottomTabNavigator } from 'react-navigation-tabs';
  import { Platform, StyleSheet, Text, View, Image,  Dimensions } from "react-native";
  import {createStackNavigator} from 'react-navigation-stack'
  import Images from "../common/Images";
  // import Fonts from "../common/Fonts";
  import { normalizeFont as np } from "../common/NormalizeFont";
  import { normalizeWidth as nw } from "../common/NormalizeWidth";
  import { normalizeHeight as nh } from "../common/NormalizeHeight";
  import colors from "../common/Colors";
import Order from "../screens/Order";
import Deliveries from "../screens/Deliveries";
import LearnScreen from "../screens/LearnScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ConnectScreen from "../screens/ConnectScreen";
import Login from "../screens/Login";

const Del=createStackNavigator({
  screen:Deliveries
})
const Ord=createStackNavigator({
  screen:Order
})
const Pro=createStackNavigator({
  screen:ProfileScreen
})
const MainBottomNavigator = createBottomTabNavigator(
    {
      Deliveries: {
        screen: Del,
      },
      Order: {
        screen: Ord,
      },
      ProfileScreen: {
        screen: Pro,
      },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        headerBackAllowFontScaling: true,
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName=null
          if (routeName.includes("Deliveries")) {
            iconName = focused ? Images.deliveries_select : Images.deliveries_unselect;
          } else if (routeName.includes("Order")) {
            iconName = focused ? Images.order_select : Images.order_select;
          } else if (routeName.includes("ProfileScreen")) {
            iconName = focused ? Images.profile_select : Images.profile_unselect;
          }
          return (
            <Image
              source={iconName}
              style={{marginTop:nh(40),marginBottom:nh(30),width:nw(24),height:nh(24),resizeMode:'contain',opacity:focused?1:0.5}}
              color={tintColor}
            />
          );
        }
      }),
      tabBarOptions: {
        
        activeTintColor: "#000",
        style: {
          justifyContent: "center",
          alignItems: "center",
          height:nh(50),
          backgroundColor: 'white'
        },
        labelStyle: {
          fontSize:np(13),
         // fontFamily: Fonts.type.bold,
          fontWeight: "200",
          marginTop:nh(10),
          
     
        },
        headerBackTitleStyle: {
          color: "#000",
         // fontFamily: Fonts.type.base,
          fontSize: np(17)
        }
      }
    }
  );
const switchNavigator=createSwitchNavigator({
  Login:Login,
  MainPage:MainBottomNavigator,
},{
  header:null
})
const NavigationApp = createAppContainer(switchNavigator);

export default NavigationApp;