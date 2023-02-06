import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import Home from '../tabs/Home';
import Connections from '../tabs/Connections';
import Add from '../tabs/Add';
import Nofitication from '../tabs/Nofitication';
import Jobs from '../tabs/Jobs';


const Main = ({navigation}) => {
  const [selectedTab,setSelectedTab] = useState(0);
  
  return (
    <View style={styles.container}>
      {
        selectedTab == 0 ? (
          <Home/>
        ): selectedTab == 1 ? (
          <Connections/>
        ): selectedTab == 2 ? (
          <Add/> 
        ) : selectedTab == 3 ? (
          <Nofitication/> 
        ) :  (
          <Jobs/>
        )
      }
     <View style={styles.bottomView}>
      <TouchableOpacity style={[styles.bottomTab,{borderTopWidth: selectedTab == 0 ? 3 : 0}]}
      onPress={()=>{
        setSelectedTab(0)
      }}
      >
        <Image 
        source={require('../Assets/Images/home.png')}
        style={[styles.bottomTabImage,{tintColor:selectedTab == 0 ? 'black':'#8e8e8e'}]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.bottomTab,{borderTopWidth: selectedTab == 1 ? 3 : 0}]}
         onPress={()=>{
          setSelectedTab(1)
        }}
      >
        <Image 
        source={require('../Assets/Images/bell.png')}
        style={[styles.bottomTabImage,{tintColor:selectedTab == 1 ? 'black':'#8e8e8e'}]}
        />
      </TouchableOpacity>

      <TouchableOpacity  style={[styles.bottomTab,{borderTopWidth: selectedTab == 2 ? 3 : 0}]}
         onPress={()=>{
        navigation.navigate('Add')
        }}
      >
        <Image
        source={require('../Assets/Images/plus.png')} 
        
        style={[styles.bottomTabImage,{tintColor:selectedTab == 2 ? 'black':'#8e8e8e'}]}
        />
      </TouchableOpacity>




      <TouchableOpacity style={[styles.bottomTab,{borderTopWidth: selectedTab == 3 ? 3 : 0}]}
         onPress={()=>{
          setSelectedTab(3)
        }}
      >
        <Image 
        source={require('../Assets/Images/box.png')}
        style={[styles.bottomTabImage,{tintColor:selectedTab == 3 ? 'black':'#8e8e8e'}]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.bottomTab,{borderTopWidth: selectedTab == 4 ? 3 : 0}]}
      onPress={()=>{
        setSelectedTab(4)
      }}
      >
    <Image 
        source={require('../Assets/Images/users-group.png')}
        style={[styles.bottomTabImage,{tintColor:selectedTab == 4 ? 'black':'#8e8e8e'}]}
        />
      </TouchableOpacity>
     </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bottomView:{
        backgroundColor:'#fff',
        elevation:5,
        height:70,
        width:'100%',
        position:'absolute',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        bottom:0,
        shadowColor:'#000',
        shadowRadius:5,
        shadowOffset:{
            x:1,
            y:1,
        },
    },
    bottomTab:{
        width:'15%',
        height:'98%',
        justifyContent:'center',
        alignItems:'center',
    },
    bottomTabImage:{
        width:24,
        height:24,

    },

})