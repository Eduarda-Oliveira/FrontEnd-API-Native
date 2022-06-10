import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FolService } from '../../services'

export function Index({ navigation }) {
  const [documents, setDocuments] = useState([]);
  
   useEffect(()=>{
     async function getDocuments(){
       let fols = await FolService.findAll()
       setDocuments(fols.data)
     }
     getDocuments()
   })

    return (
      <KeyboardAvoidingView style={styles.background}>
      <LinearGradient
          colors={['rgba(32, 70, 219, 0.76) 60%', 'rgba(32, 129, 219, 0)']}
          style={styles.background}
      />
      <ScrollView>       
          <View style={styles.container}>
            
          <Image source={{ uri: "https://i.ibb.co/RgykfNH/bmw.jpg" }} 
          style={styles.image}/>

          <Text style={styles.text}>
            Username
          </Text>

          {
          documents.map(document =>{
            return(
              <Text 
              style={styles.listText}
              key={document.id}>
              {document.title}
              </Text>
            )
          })
        }
          </View>
          
          </ScrollView>
        </KeyboardAvoidingView>
      );
    }
    
    const styles = StyleSheet.create({
      background: {
        position: 'absolute',
        left: 0,
        right: -50,
        top: 0,
        height: '100%',
      },

      container:{
       flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        gap: '5%',
      },

      image: {
        position: 'relative',
        width: 200,
        height: 200,
        borderRadius: 200,
      },

      text: {
        position: 'relative',
        color: '#000000',
        fontSize: 18,
        marginHorizontal: 15,
        //fontWeight: 'bold',
      },

      listText: {
        fontSize: 18,
        textAlign: 'center',
      },  

      scrollView: {
        marginHorizontal: 20,
      }
    });