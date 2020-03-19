import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../common/Colors';
// import Fonts from "../common/Fonts";
import { normalizeFont as np } from "../common/NormalizeFont";
import { normalizeWidth as nw } from "../common/NormalizeWidth";
import { normalizeHeight as nh } from "../common/NormalizeHeight";

class BottomResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>

          <View style={styles.viewTitle}>
            <Text style={styles.title}>Upcoming Recommended Tests</Text>
            <Text style={styles.rightArrow}>></Text>
          </View>

          <View style={{flexDirection:"row",  justifyContent: 'space-evenly'}}>

            <View style={styles.divisionOne}>
              <View style={styles.viewDivisions}>
                <Text style={styles.divisionTitle}>DAY  </Text>
                <Text style={styles.divisionValues}>22-2        </Text>
                <Text style={styles.divisionValues}>-13.5</Text>
              </View>
              <View style={styles.viewDivisions}>
                <Text style={styles.divisionTitle}>MASS </Text>
                <Text style={styles.divisionValues}>10-14       </Text>
                <Text style={styles.divisionValues}>-146</Text>
              </View>
              <Text style={styles.divisionTime}>2:00 PM on CBS</Text>
            </View>

            <View style={styles.divisionOne}>
              <View style={styles.viewDivisions}>
                <Text style={styles.divisionTitle}>SYR  </Text>
                <Text style={styles.divisionValues}>14-10       </Text>
                <Text style={styles.divisionValues}>146.5</Text>
              </View>
              <View style={styles.viewDivisions}>
                <Text style={styles.divisionTitle}>FSU </Text>
                <Text style={styles.divisionValues}>20-4        </Text>
                <Text style={styles.divisionValues}>-9.5</Text>
              </View>
              <Text style={styles.divisionTime}>9:00 PM on ESPN</Text>
            </View>

          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: colors.blackish, padding: nw(12), paddingBottom: nw(10)},
  innerContainer: {backgroundColor:"#383838", paddingHorizontal: nh(10), paddingBottom: nh(10), borderRadius: nw(15)},
  viewTitle: {flexDirection:"row",  justifyContent: 'space-between', alignItems: 'center'},
  viewDivisions: {flexDirection:"row",  justifyContent: 'space-around', alignItems: 'center'},
  title: {color:"#fff"},
  rightArrow: {
      //fontFamily: Fonts.type.bold, 
    color: '#fff', fontWeight: "bold", fontSize: np(25)},
  divisionOne: {backgroundColor:colors.blackish, padding: nw(8), borderRadius: nw(5), flexDirection: "column"},
  divisionTitle: {
    //   fontFamily: Fonts.type.bold,
       color: '#fff', fontWeight: "bold", fontSize: np(14)},
  divisionValues: {
    //   fontFamily: Fonts.type.bold, 
      color: "#6e6d6d", fontWeight: "bold", fontSize: np(12)},
  divisionTime: {
    //   fontFamily: Fonts.type.bold,
       color: '#fff', fontWeight: "bold", fontSize: np(11), paddingTop: nh(6)},
});

export default BottomResults;
