import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, KeyboardAvoidingView, TextInput, TouchableOpacity, FlatList, StatusBar, SafeAreaView} from 'react-native';
import { Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FolService } from '../../services'

export function Search({ navigation }) {
  // const [documents, setDocuments] = useState([]);
  
  useEffect(()=>{
    async function getDocuments(){
      let fols = await FolService.findAll()
      console.log(fols)
    }
    getDocuments()
  })
  
  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(32, 70, 219, 0.76)', 'rgba(32, 129, 219, 0)']}
        style={styles.background}
        />
        <TextInput
        style={styles.input}
        placeholder="Parameter"
        autoCorrect={false}
        />
          <Button
        style={styles.btnSubmit}
        title="Search"
        ></Button>
        {/* <FlatList
          data={[
            { key: "teste 1" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
            { key: "teste 2" },
          ]}
          renderItem={({item}) => <text>{item.key}</text>}
        /> */}
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: -50,
    top: 0,
    height: 420,
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },

  input: {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: '90%',
    marginBottom: 15,
    color: 'black',
    fontSize: 17,
    borderRadius: 15,
    // stroke: 'black',
    padding: 10,
  },

  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '100%',
    height:45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },

  submitText:{
    fontSize:18,
    color: '#FFF',
  },
  scrollView: {
    marginHorizontal: 20,
  }
});
