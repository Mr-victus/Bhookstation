import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';
import {normalizeFont as np} from './NormalizeFont';
import { normalizeHeight as nh } from './NormalizeHeight';
import { normalizeWidth as nw } from './NormalizeWidth';
import DeviceInfo from 'react-native-device-info';
import Images from "./Images";


let brand = DeviceInfo.getBrand();
let isApple = brand == "Apple" ? true : false;
let image1 = Images.header_back_arrow,w1=15,h1=15;
if(isApple)
{
  image1 = Images.header_back;
}

// This file is for a reusable grouping of common items.
const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor:" Colors.transparent"
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
    sectionText: {
      ...Fonts.style.base,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
    }
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.opensansType.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  },
  webContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 315,
    height: 60,
    top: 15,
    
  },  
  itemText: {
    color: "#459ff6",
    fontSize: np(19),    
    fontFamily: Fonts.opensansType.base,
  },
  sectionText: {
    color: "#14517D",
    fontSize: np(20),
    marginTop:nh(0),
    fontFamily: Fonts.opensansType.bold,
    
    
   // backgroundColor:"red"
    
  },
  itemStyle: {
    marginTop:nh(8),
    marginStart:nw(10),
    marginBottom:nh(8),
   // backgroundColor:"#eaeaea"
    
  },
  itemStyleMed: {
    marginTop:nh(8),
    marginStart:nw(10),
    marginBottom:nh(8),
    
    
  },
  sectionStyle: {
    backgroundColor: "#e0e0e0",
    //marginTop: nh(5),
    paddingLeft: nw(12),
    flex:1,
   
  },
  myCustomStyle: {
    // height: "100%",
    // width: "100%",
    flex:1,
    alignSelf:'center',
    // marginTop:nh(50),
    // marginBottom:nh(50),
    marginLeft: nw(-70),
    
  },

  myText:
  {
    fontSize: np(20),
    color:'#489ff6',
    
  },

  backbutton:{
     width: nw(w1), 
     height: nh(h1),
     resizeMode:"contain",
      marginLeft: nw(10) 
  },

  adviceStyle:
  {
    backgroundColor: '#eaeaea'},

  container: {
    // height: "100%",
    // width: "100%",
    flex: 3,
   
    backgroundColor:'#EDEDED',
    flexDirection:'row'
    //justifyContent: "center",
    //alignSelf: "center"
  },
  image: {
    height: nh(18.94),
    width: nw(14.94),
    alignSelf:'center'
    // marginTop: 20
  },
  searchbar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 10,
    paddingLeft: nw(10),
    elevation: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowColor: "black"
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: "#ededed"
  },
  help_icon:{
    width: nw(25),
    resizeMode:'contain',
     height: nh(25),
     marginRight:nw(16)
  },
  hamburger:{
    width: nw(25),
    height: nh(25),
    resizeMode:'contain',
   margin:10
  },
  chlalogo:{
    alignContent:'center',justifyContent:'center',alignSelf:'center',alignItems:'center',
        resizeMode:'contain',
        marginHorizontal:nw(75),
        width:nw(150),
        height:'100%',
  },
  screenStyle: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  screenTextStyle:{
    fontSize: np(16.5),
    textAlign: 'center',
    borderBottomWidth: nw(5),
    fontFamily: Fonts.opensansType.bold,
    fontWeight: Fonts.weight.bold,
  },
  screenStyleother: {
    height: 45,
    paddingLeft:nh(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    flex:1,
    backgroundColor: Colors.background,
    resizeMode:'contain',
    marginHorizontal:nw(15),
    marginVertical:nh(10)
  },
  circularImage: {
    borderRadius: nh(85),
    height:nh(65),
    width:nw(65),
    resizeMode:'contain',
    position:'relative',
  },
  heading: {
    color: "#14517d",
    fontFamily: Fonts.opensansType.bold,
    fontWeight: Fonts.weight.bold,
    fontSize: np(19),
    marginTop:nw(15)
  },
  description: {
    color: "#000",
    fontFamily: Fonts.opensansType.base,
    fontSize: np(17),
    paddingBottom:nh(10)
  },
  contact: {
    color: Colors.titleLabel,
    fontFamily: Fonts.opensansType.base,
    fontSize: np(17)
  },
  listtext: {
    justifyContent:'center',
    alignItems:'center',
    color: "#000",
    fontFamily: Fonts.opensansType.normal,
    fontSize: np(18) 
  },
  headertext: {
    color: "#14517d",
    fontFamily: Fonts.opensansType.bold,
    fontWeight: Fonts.weight.bold,
    fontSize: np(20)},
  textInput: {
      color: "black",
      fontFamily: Fonts.opensansType.base,
      height:'100%',
      width:'100%',
      fontSize: np(17),
      marginLeft: nw(10),
      alignSelf:'center'
    },
    boxInactive: {
      marginHorizontal: nw(22),
      height: nh(50),
      marginBottom: nh(6),
      backgroundColor:Colors.containerBackground,
      borderRadius: 10,
      borderColor: Colors.borderOutline,
      borderWidth: 2
    },
    boxActive: {
      marginHorizontal: nw(22),
      height: nh(50),
      marginBottom: nh(6),
      borderRadius: 10,
      backgroundColor:Colors.containerBackground,
      borderColor: Colors.borderOutline,
      borderWidth: 2
    },
    containerTextHeading: {
      fontFamily: Fonts.opensansType.bold,
      color: "#383738",
      backgroundColor: Colors.background,
      paddingHorizontal: nw(10),
      marginHorizontal: nw(25),
      marginBottom: nh(7),
      fontSize: np(19)
    },
    containerTextHeadingActive: {
      fontFamily: Fonts.opensansType.bold,
      color: "#383738",
      backgroundColor: Colors.background,
      paddingHorizontal: nw(10),
      marginHorizontal: nw(25),
      marginBottom:nh(7),
      fontSize: np(17)
    },
    placeholder: {
      color: Colors.blackish,
      fontFamily: Fonts.opensansType.base,
      fontSize: np(14),
      alignSelf: "center",
      marginBottom: nh(10)
    },
    submitbutton: {
      backgroundColor: Colors.green,
      marginHorizontal: nw(22),
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    submitbuttonText: {
      fontFamily: Fonts.opensansType.bold,
      fontWeight: Fonts.weight.bold,
      color: "#ffffff",
      fontSize: np(21),
      alignSelf: "center",
      letterSpacing:0.3,
      marginVertical:10
    },
    viewAll: {
      alignSelf: "center",
      color: Colors.textDarkBlue,
      fontFamily: Fonts.opensansType.bold,
      fontWeight: Fonts.weight.bold,
      fontSize: np(21),
      marginTop: nh(21)
    },
    textContainer: {
      width: "100%",
      height: nh(50),
      flexDirection: "row-reverse",
      backgroundColor:Colors.containerBackground,
    },
    text: {
      color: Colors.modalDone,
      fontSize: np(18),
      marginTop: nw(15),
      fontFamily: Fonts.opensansType.bold,
      fontWeight: Fonts.weight.bold,
      marginHorizontal: nw(20),
      alignSelf: "center"
    },
}

export default ApplicationStyles
