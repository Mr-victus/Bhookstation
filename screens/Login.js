import React, { Component } from 'react';
import { View, Text ,TouchableOpacity,SafeAreaView,Image,ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import Images from '../common/Images';
import { normalizeHeight as nh } from '../common/NormalizeHeight';
import { normalizeWidth as nw } from '../common/NormalizeWidth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:''
    };
  }
  static navigationOptions =(props)=>({
      header:null
  });
  render() {
    return (
        <ScrollView style={{flex:1,backgroundColor:'white'}}>
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <View style={{flex:1,justifyContent:'center',backgroundColor:'white',marginVertical:100}}>
            <View style={{alignContent:'space-between'}} >
                {/* for treetor logo */}
                <Image style={{alignSelf:'center',marginBottom:60,height:nh(100),width:nw(100) ,resizeMode:'contain'}} source={Images.logo}/>
                <TextInput theme={{ colors: {
                    placeholder: '#FF4141', text: 'black', primary: '#FF4141',
                    underlineColor: 'transparent', background: '#003489'
            } }} style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='email' value={this.state.email} onChangeText={(text)=>this.setState({email:text})} />
                <TextInput theme={{ colors: {
                    placeholder: '#FF4141', text: 'black', primary: '#FF4141',
                    underlineColor: 'transparent', background: '#003489'
            } }} style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white'}} label='password'  selectionColor='#6EF31A' value={this.state.password} onChangeText={(text)=>this.setState({password:text})} secureTextEntry={true} />
                <TouchableOpacity onPress={()=>{
                  //this.callapi()
                  this.props.navigation.navigate('MainPage')

                }}>
                <View style={{backgroundColor:'#FF4141',height:40,justifyContent:'center',marginHorizontal:50,marginBottom:10}}>
                      <Text style={{color:'white',alignSelf:'center'}}>LOGIN</Text>
                </View>
                </TouchableOpacity>
                <Text style={{alignSelf:'center'}}>{"New here?" }</Text>
                <TouchableOpacity onPress={()=>{
                //   this.props.navigation.navigate('Signupfirst')
                }}>
                <Text  style={{color:'#FF4141',alignSelf:'center'}}>Register</Text>
                </TouchableOpacity>
                
            </View>
           
            <View>
                {/* Buttons */}
            </View>
            <View>
                {/* forgot pass and shits */}
            </View>
         
        </View>
        </SafeAreaView>
        </ScrollView>
    );
  }
}

export default Login;
