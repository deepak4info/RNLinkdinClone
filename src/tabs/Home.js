import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity>
        <Image
        source={require('../Assets/Images/people.png')}
        style={styles.userIcon}        
        />
      </TouchableOpacity>
      <View style={styles.SearchIcon}> 
      <Image
        source={require('../Assets/Images/search.png')}
        style={styles.Search}  
        resizeMode='contain'     
        />
        <TextInput placeholder='Search...' style={styles.textInput}/>
      </View>
      <TouchableOpacity>
        <Image
        source={require('../Assets/Images/chat.png')}
        style={styles.chatIcon}  
        resizeMode='contain'     
        />
      </TouchableOpacity>

      </View>
      <View style={styles.editBox}> 
      <Image source={require('../Assets/Images/edit.png')}
      style={styles.iconEdit}
      />
      <Text style={{marginLeft:15, fontSize:16}}> {'Start a Post'}</Text>

      </View>
      <View style={styles.postType}> 
      <Image source={require('../Assets/Images/upload.png')}
      style={styles.iconEdit}
      />
       <Image source={require('../Assets/Images/calendar.png')}
      style={styles.iconEdit}
      />
       <Image source={require('../Assets/Images/layout.png')}
      style={styles.iconEdit}
      />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    height:70,
    width:'100%',
    elevation:5,
    backgroundColor:'#fff',
    shadowColor:'#000',
    shadowRadius:3,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    shadowOffset:{
      x:1,
      y:1,
    },
  },
  userIcon:{
    width:40,
    height:40,
    borderRadius:20,
    marginLeft:5,
  },
  SearchIcon:{
    width:'70%',
    height:'65%',
    backgroundColor:'#ebebeb',
    borderRadius:8,
    flexDirection:'row',
    alignItems:'center',  
  },
Search:{
height:24,
width:24,
marginLeft:20,
  },
  iconEdit:{
    height:30,
    width:30,
    marginRight:5,
  },
  chatIcon:{
    height:30,
    width:30,
    marginRight:5,
  },
  textInput:{
    paddingLeft:20,
    fontSize:16,
  },
  editBox:{
    width:'100%',
    height:50,
    flexDirection:'row',
    borderBottomWidth:0.5,
    borderBottomColor:'#d8d8d8',
    borderTopWidth:0.5,
    borderTopColor:'#d8d8d8',
    backgroundColor:'#efefef',
    alignItems:'center',
    paddingLeft:20,
  },
  postType:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    width:'100%',
    height:50,
  },



})