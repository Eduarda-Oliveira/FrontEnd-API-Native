import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, KeyboardAvoidingView, TextInput, Text} from 'react-native';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FolService } from '../../services'

export function Search({ navigation }) {
   const [documents, setDocuments] = useState([]);
   const { register, setValue, handleSubmit } = useForm()
   
   useEffect(() => {
    register('keyword')
  }, [register])

  const onSubmit = async (params) => {
    data ={
          EFOL_KEYWORD:params.keyword,
          }
    await FolService.findByKeyword(data)
    .then(() => {
      setDocuments(data)
    })
    .catch((error) => {
           console.log(error.message)
         });
  };

  return (
    <KeyboardAvoidingView style={styles.background}>
      <LinearGradient
          colors={['rgba(32, 70, 219, 0.76) 60%', 'rgba(32, 129, 219, 0)']}
          style={styles.background}
          />
      <ScrollView>
        <View style={styles.container}>

          <TextInput
          style={styles.input}
          placeholder="Parameter"
          autoCorrect={false}
          onChangeText={text => setValue('keyword', text)}
          />

          <Button
          style={styles.btnSubmit}
          title="Search"
          onPress={handleSubmit(onSubmit)}
          ></Button>
      
        {
            documents.map(document => {
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
  )
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
    flex:1,
    top: 70,
    bottom: 0,
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

  listText:{
    top: 150,
    fontSize: 18,
  },
 
});
