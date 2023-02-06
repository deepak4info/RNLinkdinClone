import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, FlatList, Keyboard } from 'react-native'
import React, { useRef, useState } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const Add = () => {
  const bottomSheetRef = useRef();
  const [imageData, setImageData] = useState(
    { "assets": [{ "fileName": "", "fileSize": 200791, "height": 1280, "type": "image/jpeg", 
    "uri": "", "width": 960 }] }
  )
  const openGallery = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    if(result.didCancel){

    }else {
      setImageData(result)
    }
    console.log(result);
  }
  const openCamera = async () => {
    const result = await launchCamera({ mediaType: 'photo' });
    console.log(result);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../Assets/Images/cancel.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.title}> Start a Post </Text>
        <TouchableOpacity style={styles.postBtn}>
          <Text style={{ color: '#000', fontWeight: '600' }}> Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileDetails}>
        <Image source={require('../Assets/Images/people.png')} style={styles.profileimg} />
        <TouchableOpacity style={styles.borderBtn}>
          <Image source={require('../Assets/Images/users-group.png')} style={[styles.icon, { width: 16, height: 16 }]} />

          <Text style={{ fontSize: 12, marginLeft: 10, fontWeight: '600', marginRight: 10, }}> Deepak Kumar </Text>
          <Image source={require('../Assets/Images/dropdown.png')} style={[styles.icon, { width: 16, height: 16, }]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.borderBtn}>
          <Image source={require('../Assets/Images/users-group.png')} style={[styles.icon, { width: 16, height: 16 }]} />

          <Text style={{ fontSize: 12, marginLeft: 10, fontWeight: '600', marginRight: 10, }}>Public </Text>
          <Image source={require('../Assets/Images/dropdown.png')} style={[styles.icon, { width: 16, height: 16, }]} />
        </TouchableOpacity>
      </View>
      <View style={styles.captionView}>
        <TextInput placeholder='Type Caption here...' />
      </View>
      <View> 
        <Image
        source={{uri:imageData.assets[0].uri}}
        style={{width:'100%', height:200}}
        
        />
      </View>
      <KeyboardAvoidingView style={{ position: 'absolute', bottom: 20 }}>
        <View style={styles.bottomView}>
          <View style={styles.bottomViewLeft}>
            <TouchableOpacity
              onPress={() => {
                openGallery();
              }}
            >
              <Image
                source={require('../Assets/Images/camera.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                openCamera();
              }}
            >
              <Image
                source={require('../Assets/Images/video.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                bottomSheetRef.current.open();
              }}
            >
              <Image
                source={require('../Assets/Images/photo.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomViewRight}>
            <TouchableOpacity>
              <Image
                source={require('../Assets/Images/chat.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
              }}
            >
              <Image
                source={require('../Assets/Images/mail.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

      <RBSheet
        ref={bottomSheetRef}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center"
          }
        }}
      >
        <View style={styles.bottomSheetView}>
          <FlatList
            data={[
              { name: 'Camera', icon: require('../Assets/Images/camera.png') },
              { name: 'Video', icon: require('../Assets/Images/video.png') },
              { name: 'Upload', icon: require('../Assets/Images/upload.png') },

            ]}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity style={styles.optionItems}>
                  <Image source={item.icon} style={styles.icon} />
                  <Text style={{ marginLeft: 10 }}> {item.name}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </RBSheet>
    </View>
  )
}
export default Add
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdc2',
  },
  icon: {
    width: 24,
    height: 23,
    tintColor: '#8e8e8e'
  },
  title: {
    fontSize: 20,
  },
  postBtn: {

    backgroundColor: '#8e8e8e',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  profileDetails: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  profileimg: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  borderBtn: {
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
  },
  captionView: {
    width: '100%',
    height: 200,
    padding: 20,
  },
  bottomView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomViewLeft: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomViewRight: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomSheetView: {
    width: '100%',
  },
  optionItems: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center'
  }

})