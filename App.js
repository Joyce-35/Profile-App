import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import pic from './assets/profile.jpeg';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.image} />
      <View style={styles.camera}>
        <Ionicons name="md-camera" size={25} color="white" alignSelf={'center'} marginTop={6} />
        </View>
      
      <View>
      <Text style={styles.placeHolder1}>School</Text>
      <TextInput style={styles.input} />
      <Text style={styles.placeHolder1}>Email Address</Text>
      <TextInput style={styles.input} />
      <Text style={styles.placeHolder2}>Name</Text>
      <TextInput style={styles.input}  />
      <Text style={styles.placeHolder2}>Nick Name</Text>
      <TextInput style={styles.input}  />
      <Text style={styles.placeHolder2}>Emergency Contact</Text>

      <TextInput style={styles.input} />
      <View style={styles.contact}>
        <Ionicons name="md-call" size={10} color="#bcc2c2" alignSelf={'center'} marginTop={6} />
        </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>UPDATE PROFILE</Text>
      </TouchableOpacity>
      
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:50,
    marginTop:'auto',
  },
  image:{
    height:150,
    width:150,
    borderRadius:75,
    alignSelf:'center',
    marginTop:70,
    marginBottom:50,
  },
  placeHolder1:{
    color:'#4d4d4d',
    fontSize:15,
    marginVertical:3,
  },
  placeHolder2:{
    color:'#17d0e8',
    fontSize: 15,
   marginTop:15,
  },
  detail:{
    fontSize:16,
    color:'black',
    marginTop: 10,
  },
  button:{
    marginTop:40,
    backgroundColor:'#17d0e8',
    width:250,
    alignSelf:'center',
    height:50,
    borderRadius:20,
  },
  buttonText:{
    color:'white',
    textAlign:'center',
    fontSize:20,
    paddingTop:10,
  },
  input:{
    borderColor:'#e0c5b8',
    borderBottomWidth: 1,
    fontSize:20,
  },
  camera:{
      backgroundColor:'#17d0e8',
      width:40,
      height:40,
      borderRadius:100,
      position:'absolute',
      top:160,
      right:50,
  },
  contact:{
    borderColor:'#bcc2c2',
    borderWidth:1,
    width:20,
    height:25,
    bottom:100,
    position:'absolute',
    right:0,
}
});
